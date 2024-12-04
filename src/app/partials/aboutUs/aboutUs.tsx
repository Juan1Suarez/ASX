"use client"
import { useTranslation } from 'next-i18next';
import '@/app/idiomas/i18n';
import "@/app/partials/AboutUs/aboutUs.css"
import { useRouter } from 'next/navigation';

export default function AboutUs() {
  const router = useRouter();
  
  const { t, i18n } = useTranslation("aboutUs");
  return (
    <>
      <div className='containerAboutUs'>
        <h1 id="ab" className='titulo'>{t("aboutUs")}</h1>
        <h2 className='subtitulo'> {t("slogan")}</h2>
        <br></br>

        <h3 id="who"className='subAboutUs'>{t("who")}</h3> 
        <div className='aboutUs'>{t("who1")}</div> <br></br>
        <div className='aboutUs'>{t("who2")}</div> <br></br>
        <br></br>

        <h3 id="our" className='subAboutUs'>{t("our")}</h3>
        <br></br>
        <div className='aboutUs'>{t("our1")}</div> <br></br>
        <div className='aboutUs'>{t("our2")}</div> <br></br>
        
        <h3 className='subAboutUs'>{t("what")}</h3>
        <br></br>
        <div className='aboutUs'>{t("what1")}</div> <br></br>
        <div className='aboutUs'>{t("what2")}</div> <br></br>
        <button className='checkStocks' onClick={() => router.push('/stock')} >{t("check")}</button>
      </div>

    </>
  );
}
