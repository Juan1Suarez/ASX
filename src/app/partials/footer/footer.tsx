"use client";
import React, { useState } from 'react';
import "@/app/partials/footer/footer.css"
import { useRouter } from 'next/navigation';
import { i18n, useTranslation } from 'next-i18next';

export default function Footer() {
    const router = useRouter();
    const { t, i18n } = useTranslation("footer");
    const [idioma, setIdioma] = useState("EN");

    const cambiarIdioma = () => {
        if (idioma === "EN") {
            i18n.changeLanguage("ES");
            setIdioma("ES");
        } else if (idioma === "ES") {
            i18n.changeLanguage("EN");
            setIdioma("EN");
        }
    };

    return (
        <div className='footerContainer'>
            <div className="contenido">
                <img className="logoFooter" src="./ASX.png" onClick={() => router.push('/aboutUs')} alt='logo' />
                <div className="footersub">
                    <h3>{t("aboutUs")}</h3>
                    <a href="/aboutUs#who">  <small>{t("who")}</small></a>
                    <a href="/aboutUs#our"> <small>{t("ourCommitment")}</small></a>
                    <a href="/#news"> <small>{t("news")}</small></a>
                    <a href="/aboutUs#ab"> <small>{t("aboutUs")}</small></a>
                </div>
                <div className="footersub">
                    <h3>{t("comunity")}</h3>
                    <a href="https://www.instagram.com/asx__official/"><small>Instagram</small></a>
                    <a href="https://www.linkedin.com/company/asx/?trk=similar-pages_result-card_full-click&originalSubdomain=es"><small>Linkedin</small></a>
                    <a href="https://x.com/ASX?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><small>X (Twitter)</small></a>
                    <a href="https://www.youtube.com/user/ASXLtd"><small>Youtube</small></a>
                    <a href="https://www.reddit.com/r/ASX/"><small>Reddit</small></a>
                </div>
                <div className="footersub">
                    <h3>{t("language")}</h3>
                    <br></br>
                    <button onClick={cambiarIdioma}>
                        {idioma === "EN" ? "Español" : "English"}
                    </button>
                </div>
            </div>
            <br />
            <small className='trademark'>{t("trademark")}</small>
        </div>
    );
}