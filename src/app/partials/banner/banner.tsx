"use client";
import { useRouter } from 'next/navigation';
import React from 'react';
import {useTranslation} from 'next-i18next';
import '@/app/idiomas/i18n';
import { useState } from "react";

export default function Banner() {
    const router = useRouter();

    const { t, i18n} = useTranslation();
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
                <img className="titulo" src="./ASX.png"></img>
                <div className="botonesBanner">
                    <button  onClick={cambiarIdioma}> {t('cambiar')}</button>
                    <button onClick={() => router.push('/aboutUs')}>About us</button>
                    <button onClick={() => router.push('/stock')}>Stock</button>
                    <button onClick={() => router.push('/')}>News</button>
                    <button>prueba</button>
                </div>
            </div>
        </>
    );
}