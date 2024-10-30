"use client"
import {useTranslation} from 'next-i18next';
import '@/app/idiomas/i18n';

export default function Home() {
  const { t, i18n} = useTranslation();


  return (
    <>
        <img src="./carrousel1.png" className='carrouselHome'></img>
    <h1>{t('bienvenida')}</h1>    
    </>
  );
}
