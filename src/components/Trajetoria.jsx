import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Trajetoria() {
  const { t } = useTranslation();
  const items = t('trajetoria.items', { returnObjects: true }) || [];

  return (
    <section id="trajetoria" className="fi">
      <h2 className="sec-title">{t('trajetoria.title')}</h2>
      <div className="timeline">
        {Array.isArray(items) && items.map((item, idx) => (
          <div key={idx} className="timeline-item fi">
            <div className="time-date">{item.date}</div>
            <h4>{item.role}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
