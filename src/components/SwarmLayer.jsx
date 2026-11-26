import React, { useEffect, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import './SwarmLayer.css';

const CUR_SVG =
  '<svg viewBox="0 0 20 22"><path class="cur-path" d="M2 1.5v17l4.6-4.3 3 6.3 3-1.4-3-6.2h6.3z" stroke-width="1.4" stroke-linejoin="round"/></svg>';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const ease = (p) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2);
const rnd = (a, b) => a + Math.random() * (b - a);
const tr = (x, y) => `translate(${x}px,${y}px)`;
const pr = (el) => {
  const r = el.getBoundingClientRect();
  return {
    x: r.left + window.scrollX,
    y: r.top + window.scrollY,
    w: r.width,
    h: r.height
  };
};

function getTextNodes(el) {
  const w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  const arr = [];
  while (w.nextNode()) {
    if (w.currentNode.nodeValue && w.currentNode.nodeValue.trim().length > 0) {
      arr.push(w.currentNode);
    }
  }
  return arr;
}

export default function SwarmLayer() {
  const { i18n } = useTranslation();
  const layerRef = useRef(null);
  const hselRef = useRef(null);
  const progRef = useRef(null);

  // Velocidade permanentemente fixada em 2x e cursores sempre ativos (sem barra de controle)
  const speedRef = useRef(2);
  const parkedRef = useRef(false);

  const genRef = useRef(0);
  const agentsRef = useRef([]);
  const congaRafRef = useRef(null);
  const secsRef = useRef([]);
  const doneCountRef = useRef(0);
  const totalCountRef = useRef(0);

  const T = useCallback((ms, S) => {
    if (S && S.abort) return 0;
    const rate = S ? S.rate || 1 : 1;
    return Math.max(0, ms / (speedRef.current * rate)) || 0;
  }, []);

  const wait = useCallback(
    (ms, S) => {
      const d = T(ms, S);
      return d < 4 ? Promise.resolve() : sleep(d);
    },
    [T]
  );

  const tween = useCallback(
    (dur, S, g, fn) => {
      return new Promise((res) => {
        const d = T(dur, S);
        if (d < 16) {
          fn(1);
          return res();
        }
        const s = performance.now();
        function frame(now) {
          if (g !== genRef.current) return res();
          let p = Math.min(1, (now - s) / d);
          if (S && S.abort) p = 1;
          fn(p);
          if (p < 1) requestAnimationFrame(frame);
          else res();
        }
        requestAnimationFrame(frame);
      });
    },
    [T]
  );

  const updateLayerHeight = useCallback(() => {
    if (layerRef.current) {
      layerRef.current.style.height = `${Math.max(
        document.documentElement.scrollHeight,
        window.innerHeight
      )}px`;
    }
  }, []);

  const finalizeBlock = useCallback((b) => {
    if (!b || !b.el || b.final) return;
    b.final = true;
    const el = b.el;
    el.classList.remove('bw');
    if (b.tn && b.tv) {
      b.tn.forEach((n, idx) => {
        try {
          n.nodeValue = b.tv[idx];
        } catch {
          // ignore if React replaced text node
        }
      });
    }
    el.getAnimations().forEach((a) => a.cancel());
    el.style.translate = '';
    el.style.filter = '';
    el.style.clipPath = '';
    el.style.opacity = '';
    if (b.skel) {
      b.skel.remove();
      b.skel = null;
    }
    doneCountRef.current += 1;
  }, []);

  const startConga = useCallback((g) => {
    if (congaRafRef.current) cancelAnimationFrame(congaRafRef.current);
    const histLeft = [];
    const histRight = [];
    let time = rnd(0, 10);
    const gap = 14;

    const tick = () => {
      if (g !== genRef.current) {
        congaRafRef.current = null;
        return;
      }
      time += 0.0055 * Math.min(speedRef.current, 2);
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      // Mantém a dança ociosa nas faixas laterais (Esquerda: ~3% a 14% da tela | Direita: ~86% a 97% da tela)
      // deixando o centro de leitura 100% livre, com curvas variadas e orgânicas de cima a baixo
      const sideBand = Math.max(36, Math.min(vw * 0.065, 110));
      const leftCenterX = Math.max(42, Math.min(vw * 0.085, 145));
      const rightCenterX = vw - leftCenterX;
      const cy = vh * 0.5;
      const ay = vh * 0.38;

      // Trilha Lateral Esquerda (Figura-8 orgânica + harmônicos variados)
      const lx =
        leftCenterX +
        sideBand * (0.65 * Math.sin(time * 1.15) + 0.35 * Math.cos(time * 2.4 + 0.8));
      const ly =
        cy +
        ay * (0.72 * Math.sin(time * 0.68 + 0.4) + 0.28 * Math.cos(time * 1.55));

      // Trilha Lateral Direita (Harmônicos defasados para movimento independente e fluido)
      const rx =
        rightCenterX +
        sideBand * (0.65 * Math.cos(time * 1.05 + 1.2) + 0.35 * Math.sin(time * 2.2));
      const ry =
        cy +
        ay * (0.72 * Math.cos(time * 0.74 + 1.9) + 0.28 * Math.sin(time * 1.42 + 0.7));

      histLeft.unshift([lx, ly]);
      histRight.unshift([rx, ry]);
      if (histLeft.length > 800) histLeft.pop();
      if (histRight.length > 800) histRight.pop();

      if (!parkedRef.current) {
        let nL = 0;
        let nR = 0;
        for (const a of agentsRef.current) {
          if (a.busy) continue;
          const isLeft = a.i % 2 === 0;
          const hist = isLeft ? histLeft : histRight;
          const idx = isLeft ? nL++ : nR++;
          const p = hist[Math.min(hist.length - 1, idx * gap)];
          if (p) {
            // Pequena variação individual por agente para não parecer uma linha rígida única
            const ox = Math.sin(time * 1.9 + a.i * 1.7) * 14;
            const oy = Math.cos(time * 1.6 + a.i * 2.1) * 18;
            a.set(p[0] + ox + window.scrollX, p[1] + oy + window.scrollY);
          }
        }
      }
      congaRafRef.current = requestAnimationFrame(tick);
    };

    congaRafRef.current = requestAnimationFrame(tick);
  }, []);

  // Fase 1: Arrasta a caixa Figma (.selbox) no espaço vazio e deixa o skeleton (.skel)
  const selectDrag = useCallback(
    async (a, b, S, g) => {
      const layer = layerRef.current;
      if (!layer || !b.el || S.abort || g !== genRef.current) return;
      const r = pr(b.el);
      if (r.w < 8 || r.h < 8) return;

      await a.move(r.x, r.y, S, g);
      if (S.abort || g !== genRef.current) return;

      const box = document.createElement('div');
      box.className = 'selbox';
      box.innerHTML =
        '<span class="tg"></span><i class="hd"></i><i class="hd"></i><i class="hd"></i><i class="hd"></i>';
      Object.assign(box.style, {
        left: `${r.x}px`,
        top: `${r.y}px`,
        width: '0px',
        height: '0px'
      });
      layer.appendChild(box);
      S.nodes.add(box);
      const tg = box.querySelector('.tg');

      const x0 = a.x;
      const y0 = a.y;
      await tween(Math.min(500, 260 + r.w * 0.15), S, g, (p) => {
        const e = ease(p);
        const w = r.w * e;
        const h = r.h * e;
        box.style.width = `${w}px`;
        box.style.height = `${h}px`;
        if (tg) tg.textContent = `${Math.round(w)} × ${Math.round(h)}`;
        a.set(x0 + w, y0 + h);
      });

      await wait(85, S);
      box.remove();
      S.nodes.delete(box);
      if (S.abort || g !== genRef.current) return;

      // Cria o Skeleton no lugar reservado até a Fase 2 depositar o elemento real
      const skel = document.createElement('div');
      skel.className = 'skel';
      Object.assign(skel.style, {
        left: `${r.x}px`,
        top: `${r.y}px`,
        width: `${r.w}px`,
        height: `${r.h}px`
      });
      layer.prepend(skel);
      b.skel = skel;
      S.nodes.add(skel);
    },
    [tween, wait]
  );

  // Animação de digitação real pelo cursor
  const typeIn = useCallback(
    async (b, a, S, g) => {
      const el = b.el;
      if (!b.tn || !b.tv || b.tn.length === 0) {
        el.classList.remove('bw');
        return;
      }
      const tn = b.tn;
      const tv = b.tv;
      const len = tv.join('').length;
      tn.forEach((n) => {
        n.nodeValue = '';
      });
      el.classList.remove('bw');

      const r = pr(el);
      if (a) a.move(r.x + Math.min(r.w, 36), r.y + Math.min(r.h - 4, 28), S, g, 200);

      const step = Math.max(4, Math.min(18, 780 / Math.max(1, len)));
      let k = 0;
      for (let i = 0; i < tn.length; i++) {
        const str = tv[i];
        for (let j = 1; j <= str.length; j++) {
          if (S.abort || g !== genRef.current) return;
          tn[i].nodeValue = str.slice(0, j);
          k++;
          if (k % 2 === 0) {
            if (a && k % 6 === 0) {
              a.set(Math.min(r.x + r.w, r.x + (k / len) * r.w), a.y);
            }
            await wait(step * 1.8, S);
          }
        }
      }
    },
    [wait]
  );

  // Animação de revelação de card/imagem (photo)
  const photoIn = useCallback(
    async (b, a, S, g) => {
      const el = b.el;
      el.classList.remove('bw');
      const dur = Math.max(1, T(1050, S) || 1);
      const anim = el.animate(
        [
          { clipPath: 'inset(100% 0 0 0)', filter: 'grayscale(1) contrast(1.1)' },
          { clipPath: 'inset(0 0 0 0)', filter: 'grayscale(1) contrast(1.1)', offset: 0.5 },
          { clipPath: 'inset(0 0 0 0)', filter: 'grayscale(0)' }
        ],
        { duration: dur, easing: 'ease-in-out' }
      );
      S.anims.add(anim);
      if (a) {
        const r = pr(el);
        a.move(r.x + r.w * 0.5, r.y + 18, S, g, 240).then(() =>
          a.move(r.x + r.w * 0.5, r.y + r.h * 0.88, S, g, T(700, S))
        );
      }
      await anim.finished.catch(() => {});
      S.anims.delete(anim);
    },
    [T]
  );

  // Animação de encaixe físico (Nudge) + Smart Guide Rosa
  const nudgeIn = useCallback(
    async (b, a, S, g) => {
      if (!b.nudge || S.abort || g !== genRef.current) return;
      const [dx, dy] = b.nudge;
      const el = b.el;
      const r = pr(el);
      await a.move(r.x + r.w * 0.5, r.y + Math.min(r.h * 0.5, 55), S, g, 260);
      if (S.abort || g !== genRef.current) return;

      const x0 = a.x;
      const y0 = a.y;
      await tween(480, S, g, (p) => {
        const e = ease(p);
        el.style.translate = `${dx * (1 - e)}px ${dy * (1 - e)}px`;
        a.set(x0 - dx * e, y0 - dy * e);
      });
      el.style.translate = '';
      if (S.abort || g !== genRef.current) return;

      const layer = layerRef.current;
      if (!layer) return;
      const f = pr(el);
      const guide = document.createElement('div');
      if (dx) {
        guide.className = 'guide v';
        Object.assign(guide.style, {
          left: `${f.x}px`,
          top: `${Math.max(0, f.y - 50)}px`,
          height: `${f.h + 100}px`
        });
      } else {
        guide.className = 'guide h';
        Object.assign(guide.style, {
          left: `${Math.max(0, f.x - 60)}px`,
          top: `${f.y}px`,
          width: `${f.w + 120}px`
        });
      }
      layer.appendChild(guide);
      S.nodes.add(guide);
      await wait(380, S);
      guide.style.opacity = '0';
      setTimeout(() => {
        guide.remove();
        S.nodes.delete(guide);
      }, 360);
    },
    [tween, wait]
  );

  // Animação de clonagem (dupIn) com badge '+' no cursor
  const dupIn = useCallback(
    async (b, firstBlock, a, S, g) => {
      await firstBlock.donePromise;
      if (S.abort || b.final || g !== genRef.current) return;
      const layer = layerRef.current;
      if (!layer) return;

      const fr = pr(firstBlock.el);
      const tr2 = pr(b.el);
      await a.move(fr.x + fr.w * 0.5, fr.y + fr.h * 0.5, S, g);
      if (S.abort || g !== genRef.current) return;

      a.el.classList.add('copy');
      const ghost = firstBlock.el.cloneNode(true);
      ghost.removeAttribute('id');
      ghost.classList.add('swarm-ghost');
      ghost.classList.remove('bw');
      Object.assign(ghost.style, {
        left: `${fr.x}px`,
        top: `${fr.y}px`,
        width: `${fr.w}px`,
        height: `${fr.h}px`,
        margin: '0'
      });
      layer.appendChild(ghost);
      S.nodes.add(ghost);

      const ax = a.x;
      const ay = a.y;
      const dx = tr2.x - fr.x;
      const dy = tr2.y - fr.y;
      await tween(Math.min(760, 360 + Math.hypot(dx, dy) * 0.45), S, g, (p) => {
        const e = ease(p);
        ghost.style.transform = tr(dx * e, dy * e);
        a.set(ax + dx * e, ay + dy * e);
      });

      a.el.classList.remove('copy');
      ghost.remove();
      S.nodes.delete(ghost);
      if (S.abort || g !== genRef.current) return;

      b.el.classList.remove('bw');
      finalizeBlock(b);
    },
    [finalizeBlock, tween]
  );

  // Fase 2: Deposita e revela o conteúdo do bloco
  const applyBlock = useCallback(
    async (b, a, S, g) => {
      if (b.final || S.abort || g !== genRef.current) return;
      const el = b.el;
      if (b.nudge) {
        el.style.translate = `${b.nudge[0]}px ${b.nudge[1]}px`;
      }
      if (b.skel) {
        b.skel.classList.add('go');
        const s = b.skel;
        b.skel = null;
        setTimeout(() => {
          s.remove();
          S.nodes.delete(s);
        }, 350);
      }

      if (a) {
        const r = pr(el);
        await a.move(r.x + 10, r.y + 10, S, g);
      }
      if (S.abort || g !== genRef.current) return;

      if (b.type === 'type') {
        await typeIn(b, a, S, g);
      } else if (b.type === 'photo') {
        await photoIn(b, a, S, g);
      } else {
        el.classList.remove('bw');
        const dur = Math.max(1, T(360, S) || 1);
        const anim = el.animate([{ opacity: 0 }, { opacity: 1 }], {
          duration: dur,
          easing: 'ease-out'
        });
        S.anims.add(anim);
        await anim.finished.catch(() => {});
        S.anims.delete(anim);
      }

      if (S.abort || g !== genRef.current) return;
      if (b.nudge && a) {
        await nudgeIn(b, a, S, g);
      } else if (a) {
        // Pisca uma smart guide rosa rápida ao terminar de posicionar
        const layer = layerRef.current;
        if (layer) {
          const f = pr(el);
          const guide = document.createElement('div');
          guide.className = 'guide h';
          Object.assign(guide.style, {
            left: `${Math.max(0, f.x - 40)}px`,
            top: `${f.y}px`,
            width: `${f.w + 80}px`
          });
          layer.appendChild(guide);
          setTimeout(() => {
            guide.style.opacity = '0';
            setTimeout(() => guide.remove(), 320);
          }, 220);
        }
      }
      finalizeBlock(b);
    },
    [T, finalizeBlock, nudgeIn, photoIn, typeIn]
  );

  const finishSec = useCallback(
    (S) => {
      if (S.state === 2) return;
      S.abort = true;
      S.state = 2;
      S.anims.forEach((a) => {
        try {
          a.finish();
        } catch {
          // ignore
        }
      });
      S.anims.clear();
      S.blocks.forEach(finalizeBlock);
      S.nodes.forEach((n) => n.remove());
      S.nodes.clear();
      agentsRef.current.forEach((a) => {
        if (a.sec === S) {
          a.busy = false;
          a.sec = null;
          a.el.classList.remove('copy');
        }
      });
      if (S.resolveDone) S.resolveDone();
    },
    [finalizeBlock]
  );

  const offView = (S) => {
    if (!S.el) return false;
    const rect = S.el.getBoundingClientRect();
    return rect.bottom < -40 || rect.top > window.innerHeight + 40;
  };

  const runSec = useCallback(
    async (S, g) => {
      let free = agentsRef.current.filter((a) => !a.busy);
      if (free.length === 0) free = agentsRef.current.slice(0, 4);
      const want = Math.min(free.length, Math.max(4, S.blocks.length));
      const workers = free.slice(0, want);
      workers.forEach((a) => {
        a.busy = true;
        a.sec = S;
      });

      // Fase 1: Desenha caixas de seleção Figma e cria os skeletons nos espaços vazios
      const q1 = S.blocks.filter((b) => !b.firstDup);
      await Promise.all(
        workers.map(async (a, k) => {
          await wait(k * 65, S);
          let b;
          while (!S.abort && g === genRef.current && (b = q1.shift())) {
            await selectDrag(a, b, S, g);
          }
        })
      );

      if (S.abort || g !== genRef.current) return;
      await wait(160, S);

      // Fase 2: Coloca os elementos reais (digita texto, revela cards, clona métricas/timeline e empurra com nudge)
      const q2 = [...S.blocks];
      await Promise.all(
        workers.map(async (a, k) => {
          await wait(k * 55, S);
          let b;
          while (!S.abort && g === genRef.current && (b = q2.shift())) {
            if (b.firstDup) {
              await dupIn(b, b.firstDup, a, S, g);
            } else {
              await applyBlock(b, a, S, g);
            }
            if (b.resolveBlock) b.resolveBlock();
          }
          a.busy = false;
          a.sec = null;
        })
      );
    },
    [applyBlock, dupIn, selectDrag, wait]
  );

  const startSec = useCallback(
    (S, g) => {
      if (S.state !== 0 || g !== genRef.current) return;
      S.state = 1;
      updateLayerHeight();

      if (offView(S)) {
        finishSec(S);
        return;
      }

      runSec(S, g).then(() => {
        if (S.state < 2 && g === genRef.current) {
          finishSec(S);
        }
      });
    },
    [finishSec, runSec, updateLayerHeight]
  );

  const checkSections = useCallback(
    (g) => {
      const vh = window.innerHeight;
      for (const S of secsRef.current) {
        if (S.state === 0 && S.el) {
          const top = S.el.getBoundingClientRect().top;
          const threshold = S.id === 'hero' ? vh * 0.95 : vh * 0.72;
          if (top < threshold) {
            startSec(S, g);
          }
        } else if (S.state === 1 && offView(S)) {
          finishSec(S);
        }
      }
    },
    [finishSec, startSec]
  );

  const runChoreography = useCallback(async () => {
    genRef.current += 1;
    const g = genRef.current;

    if (congaRafRef.current) {
      cancelAnimationFrame(congaRafRef.current);
      congaRafRef.current = null;
    }

    // Limpa estado anterior caso seja um Replay
    secsRef.current.forEach((S) => {
      S.blocks.forEach((b) => {
        if (b.el) {
          b.el.classList.remove('bw');
          b.el.style.translate = '';
          b.el.style.filter = '';
          b.el.style.clipPath = '';
          b.el.style.opacity = '';
          if (b.tn && b.tv) {
            b.tn.forEach((n, idx) => {
              try {
                n.nodeValue = b.tv[idx];
              } catch {
                // ignore
              }
            });
          }
        }
        if (b.skel) b.skel.remove();
      });
      S.nodes.forEach((n) => n.remove());
    });

    const layer = layerRef.current;
    if (!layer) return;
    layer.innerHTML = '';
    agentsRef.current = [];
    doneCountRef.current = 0;
    updateLayerHeight();

    // Mapeia todos os blocos reais do portfólio de Aaron com seus respectivos modos de construção
    const sectionBlueprints = [
      {
        id: 'hero',
        label: 'Hero',
        elSelector: '#hero',
        rate: 1.25,
        items: [
          { sel: '.header .logo-container', type: 'box' },
          { sel: '.header .nav-menu', type: 'box' },
          { sel: '.header .nav-controls', type: 'box' },
          { sel: '#heroName', type: 'type' },
          { sel: '.hero-title', type: 'type' },
          { sel: '.hero-desc', type: 'box', nudge: [0, 18] },
          { sel: '.hero-actions', type: 'box', nudge: [24, 0] },
          { sel: '.terminal-window', type: 'photo', nudge: [52, -22] },
          { sel: '.hero-metrics .stat-item:nth-child(1)', type: 'box', dupGroup: 'hero-stat' },
          { sel: '.hero-metrics .stat-item:nth-child(2)', type: 'box', dupGroup: 'hero-stat' },
          { sel: '.hero-metrics .stat-item:nth-child(3)', type: 'box', dupGroup: 'hero-stat' }
        ]
      },
      {
        id: 'sobre',
        label: 'Sobre',
        elSelector: '#sobre',
        rate: 1,
        items: [
          { sel: '#sobre .profile-card', type: 'photo', nudge: [-36, 16] },
          { sel: '#sobre .section-title', type: 'type' },
          { sel: '#sobre .sobre-text p:nth-child(1)', type: 'box', nudge: [0, 16] },
          { sel: '#sobre .sobre-text p:nth-child(2)', type: 'box', nudge: [0, 16] },
          { sel: '#sobre .sobre-text p:nth-child(3)', type: 'box', nudge: [0, 16] }
        ]
      },
      {
        id: 'habilidades',
        label: 'Stack',
        elSelector: '#habilidades',
        rate: 1,
        items: [
          { sel: '#habilidades .skills-badge', type: 'box' },
          { sel: '#habilidades .skills-header h2', type: 'type' },
          { sel: '#habilidades .skills-header p', type: 'box' },
          { sel: '#habilidades .skills-status-pill', type: 'box' },
          { sel: '#habilidades .marquee-left', type: 'box', nudge: [45, 0] },
          { sel: '#habilidades .marquee-right', type: 'box', nudge: [-45, 0] }
        ]
      },
      {
        id: 'projetos',
        label: 'Stories',
        elSelector: '#projetos',
        rate: 1,
        items: [
          { sel: '#projetos .projects-badge', type: 'box' },
          { sel: '#projetos .sec-title', type: 'type' },
          { sel: '#projetos .sec-subtitle', type: 'box' },
          { sel: '#projetos .stories-instruction-pill', type: 'box' },
          { sel: '#projetos .stories-deck-container', type: 'photo', nudge: [0, 28] },
          { sel: '#projetos .stories-pills-bar', type: 'box' }
        ]
      },
      {
        id: 'trajetoria',
        label: 'Trajetória',
        elSelector: '#trajetoria',
        rate: 1.1,
        items: [
          { sel: '#trajetoria .sec-title', type: 'type' },
          { sel: '#trajetoria .timeline-item:nth-child(1)', type: 'box', dupGroup: 'tl-item' },
          { sel: '#trajetoria .timeline-item:nth-child(2)', type: 'box', dupGroup: 'tl-item' },
          { sel: '#trajetoria .timeline-item:nth-child(3)', type: 'box', dupGroup: 'tl-item' },
          { sel: '#trajetoria .timeline-item:nth-child(4)', type: 'box', dupGroup: 'tl-item' },
          { sel: '#trajetoria .timeline-item:nth-child(5)', type: 'box', dupGroup: 'tl-item' }
        ]
      },
      {
        id: 'contato',
        label: 'Contato',
        elSelector: '#contato',
        rate: 1,
        items: [
          { sel: '#contato .section-label', type: 'box' },
          { sel: '#contato .contact-info h2', type: 'type' },
          { sel: '#contato .contact-info p', type: 'box' },
          { sel: '#contato .contact-actions', type: 'box', nudge: [0, 18] },
          { sel: '#contato .contact-calendar-wrapper', type: 'photo', nudge: [35, 0] },
          { sel: '.site-footer', type: 'box' }
        ]
      }
    ];

    let totalBlocks = 0;
    secsRef.current = sectionBlueprints
      .map((bp) => {
        const secEl = document.querySelector(bp.elSelector);
        if (!secEl) return null;
        const dupMap = {};
        const blocks = [];

        bp.items.forEach((item) => {
          const el = document.querySelector(item.sel);
          if (!el) return;
          let resolveBlock;
          const donePromise = new Promise((r) => {
            resolveBlock = r;
          });

          const b = {
            el,
            type: item.type,
            nudge: item.nudge || null,
            dupGroup: item.dupGroup || null,
            firstDup: null,
            tn: null,
            tv: null,
            skel: null,
            final: false,
            donePromise,
            resolveBlock
          };

          if (b.type === 'type') {
            b.tn = getTextNodes(el);
            b.tv = b.tn.map((n) => n.nodeValue);
          }

          if (b.dupGroup) {
            if (!dupMap[b.dupGroup]) {
              dupMap[b.dupGroup] = b;
            } else {
              b.firstDup = dupMap[b.dupGroup];
            }
          }

          // Oculta o bloco inicialmente (.bw) para o mouse realmente colocá-lo na tela!
          el.classList.add('bw');
          blocks.push(b);
          totalBlocks += 1;
        });

        let resolveDone;
        const done = new Promise((r) => {
          resolveDone = r;
        });

        return {
          id: bp.id,
          label: bp.label,
          el: secEl,
          rate: bp.rate || 1,
          blocks,
          state: 0,
          abort: false,
          anims: new Set(),
          nodes: new Set(),
          done,
          resolveDone
        };
      })
      .filter(Boolean);

    totalCountRef.current = totalBlocks;

    const isMob = window.innerWidth <= 768;
    const totalAgents = isMob ? 6 : 12;

    class AgentCursor {
      constructor(i) {
        this.i = i;
        this.busy = false;
        this.sec = null;
        this.x = 0;
        this.y = 0;
        this.oa = (i / totalAgents) * Math.PI * 2;
        this.or = rnd(65, 125);

        // APENAS O PONTEIRO SVG MONOCHROME + BADGE '+' DE CÓPIA (ZERO TEXTO EMBAIXO)
        const el = document.createElement('div');
        el.className = 'cur';
        el.innerHTML = CUR_SVG + '<span class="cp">+</span>';
        layer.appendChild(el);
        this.el = el;
      }

      set(x, y) {
        this.x = x;
        this.y = y;
        this.el.style.transform = tr(x, y);
      }

      edgeIn() {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const side = Math.floor(Math.random() * 4);
        const y0 = window.scrollY;
        const pos =
          side === 0
            ? [rnd(0, vw), y0 - 30]
            : side === 1
            ? [vw + 15, y0 + rnd(0, vh)]
            : side === 2
            ? [rnd(0, vw), y0 + vh + 15]
            : [-30, y0 + rnd(0, vh)];
        this.set(pos[0], pos[1]);
      }

      async move(x, y, S, genCheck, dur) {
        if (genCheck !== genRef.current || (S && S.abort)) return;
        const dist = Math.hypot(x - this.x, y - this.y);
        const d = T(dur ?? Math.min(640, Math.max(220, 170 + dist * 0.36)), S);
        if (d < 16 || !isFinite(x) || !isFinite(y)) {
          if (isFinite(x) && isFinite(y)) this.set(x, y);
          return;
        }
        const anim = this.el.animate(
          [{ transform: tr(this.x, this.y) }, { transform: tr(x, y) }],
          { duration: d, easing: 'cubic-bezier(.55,0,.15,1)' }
        );
        this.set(x, y);
        if (S) S.anims.add(anim);
        await anim.finished.catch(() => {});
        if (S) S.anims.delete(anim);
      }
    }

    for (let i = 0; i < totalAgents; i++) {
      const ag = new AgentCursor(i);
      ag.edgeIn();
      agentsRef.current.push(ag);
    }

    // Boot Orbital Rápido (~0.75s) na tela vazia antes de começar a construir o site
    let orbiting = true;
    let ang = 0;

    await Promise.all(
      agentsRef.current.map((a, i) => {
        const cx = window.innerWidth / 2 + window.scrollX;
        const cy = window.innerHeight / 2 + window.scrollY;
        return wait(i * 24).then(() =>
          a.move(cx + Math.cos(a.oa) * a.or, cy + Math.sin(a.oa) * a.or, null, g, 460)
        );
      })
    );

    const orbitLoop = () => {
      if (!orbiting || g !== genRef.current) return;
      ang += 0.028 * speedRef.current;
      const cx = window.innerWidth / 2 + window.scrollX;
      const cy = window.innerHeight / 2 + window.scrollY;
      agentsRef.current.forEach((a) => {
        a.set(
          cx + Math.cos(a.oa + ang) * (a.or + 8 * Math.sin(ang * 3 + a.i)),
          cy + Math.sin(a.oa + ang) * (a.or * 0.82)
        );
      });
      requestAnimationFrame(orbitLoop);
    };
    orbitLoop();

    await wait(450);
    orbiting = false;
    if (g !== genRef.current) return;

    startConga(g);
    if (secsRef.current[0]) {
      startSec(secsRef.current[0], g);
    }
    checkSections(g);
  }, [T, checkSections, startConga, startSec, updateLayerHeight, wait]);

  // Se o usuário trocar o idioma (PT/EN), garante que todos os blocos fiquem visíveis com o texto novo
  useEffect(() => {
    secsRef.current.forEach((S) => {
      if (S.state < 2) {
        finishSec(S);
      }
    });
  }, [i18n.language, finishSec]);

  // Inicialização principal + Listeners de Scroll e Resize
  useEffect(() => {
    runChoreography();

    let lastY = window.scrollY;
    const onScroll = () => {
      if (hselRef.current) hselRef.current.classList.remove('on');
      if (progRef.current) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = max > 0 ? Math.min(1, window.scrollY / max) : 0;
        progRef.current.style.transform = `scaleX(${ratio})`;
      }
      // Se o visitante rolar a página rápido enquanto o Hero está montando, acelera a montagem do Hero
      if (Math.abs(window.scrollY - lastY) > 10) {
        secsRef.current.forEach((s) => {
          if (s.id === 'hero' && s.state === 1) s.rate = 4.5;
        });
      }
      lastY = window.scrollY;
      checkSections(genRef.current);
    };

    const onResize = () => {
      updateLayerHeight();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      genRef.current += 1;
      if (congaRafRef.current) cancelAnimationFrame(congaRafRef.current);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [checkSections, runChoreography, updateLayerHeight]);

  // Auto-Demo Autônomo nos Stories a cada ~9 segundos
  useEffect(() => {
    let deckHovered = false;
    const deck = document.querySelector('.stories-deck-container');
    const onEnter = () => {
      deckHovered = true;
    };
    const onLeave = () => {
      deckHovered = false;
    };
    if (deck) {
      deck.addEventListener('pointerenter', onEnter);
      deck.addEventListener('pointerleave', onLeave);
    }

    const interval = setInterval(async () => {
      if (parkedRef.current || deckHovered) return;
      const nextBtn = document.querySelector('.story-nav-next');
      if (!nextBtn) return;

      const rect = nextBtn.getBoundingClientRect();
      if (rect.top < 40 || rect.bottom > window.innerHeight - 40) return;

      const freeAgent = agentsRef.current.find((a) => !a.busy);
      if (!freeAgent) return;

      const g = genRef.current;
      freeAgent.busy = true;
      const targetX = rect.left + window.scrollX + rect.width * 0.5;
      const targetY = rect.top + window.scrollY + rect.height * 0.5;

      await freeAgent.move(targetX, targetY, null, g, 520);
      if (g !== genRef.current || parkedRef.current || deckHovered) {
        freeAgent.busy = false;
        return;
      }

      freeAgent.el.classList.add('clicking');
      nextBtn.click();
      await sleep(180);
      freeAgent.el.classList.remove('clicking');
      await sleep(250);
      freeAgent.busy = false;
    }, 9000);

    return () => {
      clearInterval(interval);
      if (deck) {
        deck.removeEventListener('pointerenter', onEnter);
        deck.removeEventListener('pointerleave', onLeave);
      }
    };
  }, []);

  // 3 Efeitos Táteis Extras para Desktop (pointer: fine): Mira Azul (.hsel), Botões Magnéticos (.mag) e Tilt 3D
  useEffect(() => {
    const isFine = window.matchMedia && window.matchMedia('(pointer: fine)').matches;
    if (!isFine) return;

    const hoverSelector =
      '.btn-primary, .btn-secondary, .btn-contact, .story-nav-btn, .story-quick-pill, .btn-action, .profile-social-btn, .story-btn-primary, .story-btn-secondary';

    const showHsel = (el) => {
      const hsel = hselRef.current;
      if (!hsel || el.closest('.bw')) return;
      const r = el.getBoundingClientRect();
      Object.assign(hsel.style, {
        transform: `translate(${r.left - 5}px, ${r.top - 5}px)`,
        width: `${r.width + 10}px`,
        height: `${r.height + 10}px`
      });
      hsel.classList.add('on');
    };

    const hideHsel = () => {
      if (hselRef.current) hselRef.current.classList.remove('on');
    };

    const onPointerOver = (e) => {
      if (e.pointerType && e.pointerType !== 'mouse') return;
      const el = e.target.closest(hoverSelector);
      if (el && !el.closest('.swarm-bar') && !el.closest('.bw')) {
        showHsel(el);
      } else {
        hideHsel();
      }
    };

    document.addEventListener('pointerover', onPointerOver);

    // Botões Magnéticos (.mag)
    const magEls = Array.from(document.querySelectorAll(hoverSelector));
    const magCleanups = magEls.map((el) => {
      el.classList.add('mag');
      const onMove = (e) => {
        const r = el.getBoundingClientRect();
        const dx = (e.clientX - r.left - r.width / 2) * 0.25;
        const dy = (e.clientY - r.top - r.height / 2) * 0.3;
        el.style.translate = `${dx}px ${dy}px`;
        showHsel(el);
      };
      const onLeave = () => {
        el.style.translate = '';
      };
      el.addEventListener('pointermove', onMove);
      el.addEventListener('pointerleave', onLeave);
      return () => {
        el.removeEventListener('pointermove', onMove);
        el.removeEventListener('pointerleave', onLeave);
        el.style.translate = '';
      };
    });

    // Inclinação Física 3D (Tilt 3D) no Terminal do Hero e no Card de Perfil
    const tiltEls = Array.from(document.querySelectorAll('.terminal-window, .profile-card'));
    const tiltCleanups = tiltEls.map((el) => {
      el.classList.add('swarm-tilt-card');
      const onMove = (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        const ry = (x * 10).toFixed(2);
        const rx = (-y * 10).toFixed(2);
        el.style.transform = `perspective(1100px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      };
      const onLeave = () => {
        el.style.transform = '';
      };
      el.addEventListener('pointermove', onMove);
      el.addEventListener('pointerleave', onLeave);
      return () => {
        el.removeEventListener('pointermove', onMove);
        el.removeEventListener('pointerleave', onLeave);
        el.style.transform = '';
      };
    });

    return () => {
      document.removeEventListener('pointerover', onPointerOver);
      magCleanups.forEach((fn) => fn());
      tiltCleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <>
      {/* Barra fina de progresso no topo */}
      <div className="scroll-prog" ref={progRef} aria-hidden="true" />

      {/* Camada dos Cursores Autônomos */}
      <div id="swarm-layer" ref={layerRef} aria-hidden="true" />

      {/* Mira Azul estilo Figma no Hover */}
      <div className="hsel" ref={hselRef} aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </div>
    </>
  );
}
