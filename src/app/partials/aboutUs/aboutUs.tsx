"use client"
import { useTranslation } from 'next-i18next';
import '@/app/idiomas/i18n';
import { useState } from "react";

export default function AboutUs() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <h1>{t('bienvenida')}</h1>
      <div>At the Australian Securities Exchange (ASX), we are at the heart of Australia’s financial markets, providing a world-class platform for investors and companies alike. Founded in 1987, ASX has grown to become a key player in the global marketplace, offering a wide range of products and services that facilitate trading, capital raising, and risk management.

        We provide essential services such as central counterparty clearing and settlement for equities and derivatives, ensuring the stability and security of the financial market. With over 2,000 listed companies, ASX plays a critical role in supporting the Australian economy, helping businesses raise capital through Initial Public Offerings (IPOs) and secondary capital raising activities.

        Our commitment to technological innovation is exemplified by projects like the replacement of our clearing and settlement system, CHESS, with advanced distributed ledger technology (DLT). This project highlights our dedication to creating a more efficient, transparent, and resilient financial infrastructure that benefits all market participants.

        At ASX, we are driven by our core values of trust, integrity, and resilience, which have made us one of the most respected financial marketplaces globally. Our customer-focused, technology-driven approach ensures that we remain at the forefront of financial innovation, delivering reliable and efficient services for the future of Australia's financial markets.</div>

    </>
  );
}
