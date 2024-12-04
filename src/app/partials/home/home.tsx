"use client";
import { useTranslation } from 'next-i18next';
import '@/app/idiomas/i18n';
import "@/app/partials/home/home.css";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const { t, i18n } = useTranslation("home");
  const router = useRouter();

  const [idioma, setIdioma] = useState("EN");
  
  const cambiarIdioma = () => {
    if (idioma === ("EN")) {
      i18n.changeLanguage("ES");
      setIdioma("ES");
    } else if (idioma === ("ES")) {
      i18n.changeLanguage("EN")
      setIdioma("EN");
    }
  }

  return (
      <>
        <div className="fotoBanner">
          <img id='news' src="./banner.PNG" className="fotoBanner" alt="Banner" />
          <div className="bannerOverlay">{t("news")}</div>
        </div>
        <br />
        <div className="cards">
          <div className="cardItem">
            <img src="./indices.jpg" alt="indices" className="cardImage" />
            <h3 className="cardTitle">{t("check")}</h3>
            <p className="cardText">{t("check1")}</p>
            <button className="cardButton" onClick={() => router.push('/stock#indices')}>{t("check2")}</button>
          </div>
          <div className="cardItem">
            <img src="./accesibilidad.png" alt="Accesibilidad " className="cardImage" />
            <h3 className="cardTitle">{t("access")}</h3>
            <p className="cardText">{t("access1")}</p>
            <button className="cardButton" onClick={cambiarIdioma}>{t("change")}</button>
          </div>
          <div className="cardItem">
            <img src="./aboutUs.jpg" alt="About Us" className="cardImage" />
            <h3 className="cardTitle">{t("ab")}</h3>
            <p className="cardText">{t("ab1")}</p>
            <button className="cardButton" onClick={() => router.push('/aboutUs#ab')}>{t("ab2")}</button>
          </div>
        </div>
  
        <button className="checkStocks" onClick={() => router.push('/stock')}>{t("stocks")}</button>
        <br></br>
        <br></br>
        <br></br>

      </>
  );
}