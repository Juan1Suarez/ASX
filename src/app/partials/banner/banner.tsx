"use client";
import { useRouter } from 'next/navigation';
import React from 'react';
import {useTranslation} from 'next-i18next';
import '@/app/idiomas/i18n'
import { useState } from "react";
import "@/app/partials/banner/banner.css"

export default function Banner() {
    const router = useRouter();

    const { t , i18n} = useTranslation("banner");
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
            <div className="banner">
                <img className="logo" src="./ASX.png" onClick={() => router.push('/')}></img>
                <div className="botonesBanner">
                <button onClick={cambiarIdioma}>{t("idioma")}</button>
                    <div onClick={() => router.push('/aboutUs')}>{t("aboutUs")}</div>
                    <div onClick={() => router.push('/stock')}>Stocks</div>
                    <div onClick={() => router.push('/')}>{t("home")}</div>
                </div>
            </div>
        </>
    );
}