'use client';
import { useTranslation } from 'next-i18next';
import '@/app/idiomas/i18n';
import '@/app/partials/stockBanner/stockBanner.css';

export default function StockBanner() {
  const { t } = useTranslation("stockBanner");

  return (
    <>
    <br></br>
    <div className="stockBannerContainer">
      <div className="bienvenido">
        <h2>{t('titulo')}</h2>
        <p>{t('sub')}</p>
      </div>

      <div className="buttonContainer">
        <button
          className="redirectButton"
          onClick={() => window.location.hash = '#stock'}
        >
          {t('stock')}
        </button>
        <button
          className="redirectButton"
          onClick={() => window.location.hash = '#indices'}
        >
          {t('indices')}
        </button>
      </div>
    </div>
    </>
  );
}