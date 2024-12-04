
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next
    .use(initReactI18next)
    .init({
        fallbackLng: "EN",
        ns: ["home", "banner", "footer", "aboutUs", "stockBanner", "stock", "pieChart", "indices"],
        resources: {
            EN: {
                home: {
                    news: "News",
                    check: "Check Global Stock Indexes",
                    check1: "Now you can check stock indexes all over the world with just a click!",
                    check2: "Explore Indices",
                    access: "New accessibility option!",
                    access1: "Discover the latest accessibility features for Spanish-speaking users.",
                    access2: "Learn More",
                    ab: "Want to Know More?",
                    ab1: "Get to know our mission, vision, and the team behind the project.",
                    ab2: "About Us",
                    stocks: "You can also check our stocks!",
                    change: "Change language",
                },
                banner: {
                    idioma: "ES",
                    aboutUs: "About us",
                    home: "Home",
                },
                footer: {
                    who: "Who are we",
                    ourCommitment: "Our commitment",
                    mission: "What is our mission",
                    news: "What´s new",
                    comunity: "Comunity",
                    language: "Language",
                    aboutUs: "About us",
                    trademark: "ASX® and all associated trademarks, logos, and brand names are the property of ASX Limited. Any use of these marks without prior consent is strictly prohibited. This website is not affiliated with, endorsed by, or sponsored by ASX Limited. 2006-2024©"
                },
                aboutUs: {
                    aboutUs: "About us",
                    slogan: "Investing in Innovation, Empowering Growth: Pioneering a Future of Financial Excellence and Prosperity.",
                    who: "Who are we?",
                    who1: "The Australian Securities Exchange (ASX) stands as a beacon of financial excellence and innovation. Established through the merger of the Australian Stock Exchange and the Sydney Futures Exchange in 2006, ASX is a global leader in securities trading, providing a transparent and robust marketplace for investors, companies, and financial institutions. Headquartered in Sydney, Australia, ASX is renowned for its commitment to technological advancement, market integrity, and comprehensive regulatory oversight.",
                    who2: "Our exchange offers a diverse range of services, including listings, trading, clearing, and settlement across multiple asset classes such as equities, derivatives, fixed income, and commodities. ASX is home to some of the world's leading corporations, underpinning their growth and ensuring the stability of financial markets.",
                    our: "Our commitment",
                    our1: "At ASX, we are dedicated to driving economic growth and fostering a secure, innovative financial environment. Our commitment to excellence is evident in our relentless pursuit of cutting-edge technology to enhance trading efficiencies, transparency, and market integrity. We take pride in our role as a central pillar of the Australian economy, supporting businesses of all sizes to access capital and achieve their growth ambitions.",
                    our2: "We believe in the power of innovation and sustainability, ensuring that our practices not only meet the needs of today but also pave the way for future generations. Our comprehensive risk management frameworks and regulatory oversight ensure a fair and equitable marketplace, safeguarding the interests of investors and companies alike. As we look to the future, we remain steadfast in our mission to be a global leader in financial markets, continuously evolving to meet the dynamic needs of the financial world.",
                    what: "What do we do?",
                    what1: "At ASX, we facilitate a dynamic market environment where companies and investors can grow and thrive. Our services include market listings that enable companies to raise capital, trading services providing access to a diverse range of financial instruments, and clearing and settlement operations that ensure secure transactions.",
                    what2: "We uphold market integrity through rigorous regulatory oversight and drive innovation by continuously enhancing our financial infrastructure. Through these efforts, ASX plays a crucial role in driving economic growth and maintaining a resilient financial market. Explore our platform to discover investment opportunities and see how we can help you achieve your financial goals.",
                    check: "Check our stocks!"
                },
                stockBanner: {
                    titulo: "Welcome to the Stocks and Stock Indexes Section",
                    sub: "Access the latest quotes and market analysis to make informed investment decisions",
                    stock: "View Stocks",
                    indices: "View Indexes",
                },
                stock: {
                    titulo: "Welcome to the Stocks Section",
                    explore: "Explore company quotes in real-time. (symbolized in $AUD)",
                    dia: "Show daily chart",
                    hora: "Show hourly chart",
                },
                pieChart: {
                    dia: "Company Participation in Quotes from Yesterday",
                    mes: "Company Participation in Quotes over the Last 30 Days",
                    mes1: "View Monthly Chart",
                    dia1: "View Daily Chart",
                },
                indices: {
                    index: "Global Stock Index",
                    index1: "Check ASX indexes and other stock quotes around the world compared to make informed decisions in your investments. (symbolized in $USD)"
                },
            },
            ES: {
                home: {
                    news: "Noticias",
                    check: "Ver índices bursátiles globales",
                    check1: "¡Ahora puedes consultar los índices bursátiles de todo el mundo con solo un clic!",
                    check2: "Explorar índices",
                    access: "¡Nueva opción de accesibilidad!",
                    access1: "Descubre las últimas características de accesibilidad para usuarios de habla hispana.",
                    access2: "Saber más",
                    ab: "¿Quieres saber más?",
                    ab1: "Conoce nuestra misión, visión y el equipo detrás del proyecto.",
                    ab2: "Sobre nosotros",
                    stocks: "¡Revisa nuestros stocks!",
                    change: "Cambiar el lenguaje",
                },
                banner: {
                    idioma: "EN",
                    aboutUs: "Sobre nosotros",
                    home: "Inicio",
                },
                footer: {
                    who: "Quienes somos",
                    ourCommitment: "Nuestra meta",
                    mission: "Nuestra misión",
                    news: "Noticias",
                    comunity: "Redes sociales",
                    language: "Idioma",
                    aboutUs: "Sobre nosotros",
                    trademark: "ASX® y todas las marcas registradas, logotipos y nombres comerciales asociados son propiedad de ASX Limited. Cualquier uso de estas marcas sin consentimiento previo está estrictamente prohibido. Este sitio web no está afiliado, respaldado ni patrocinado por ASX Limited. 2006-2024©"
                },
                aboutUs: {
                    aboutUs: "Sobre Nosotros",
                    slogan: "Invirtiendo en la Innovación, Impulsando el Crecimiento: Pioneros de un Futuro de Excelencia Financiera y Prosperidad.",
                    who: "Quienes somos",
                    who1: "La Bolsa de Valores de Australia (ASX) se erige como un faro de excelencia financiera e innovación. Establecida mediante la fusión de la Bolsa de Valores de Australia y la Bolsa de Futuros de Sídney en 2006, ASX es un líder global en el comercio de valores, ofreciendo un mercado transparente y robusto para inversores, empresas e instituciones financieras. Con sede en Sídney, Australia, ASX es reconocida por su compromiso con el avance tecnológico, la integridad del mercado y una supervisión regulatoria integral.",
                    who2: "Nuestra bolsa ofrece una amplia gama de servicios, que incluyen listados, operaciones, compensación y liquidación en múltiples clases de activos, como acciones, derivados, renta fija y productos básicos. ASX alberga a algunas de las principales corporaciones del mundo, apoyando su crecimiento y garantizando la estabilidad de los mercados financieros.",
                    our: "Nuestra Mision",
                    our1: "En ASX, estamos dedicados a impulsar el crecimiento económico y fomentar un entorno financiero seguro e innovador. Nuestro compromiso con la excelencia se refleja en nuestra constante búsqueda de tecnología de vanguardia para mejorar la eficiencia del comercio, la transparencia y la integridad del mercado. Nos enorgullece ser un pilar central de la economía australiana, apoyando a empresas de todos los tamaños para acceder al capital y alcanzar sus ambiciones de crecimiento.",
                    our2: "Creemos en el poder de la innovación y la sostenibilidad, asegurando que nuestras prácticas no solo satisfagan las necesidades del presente, sino que también abran el camino para las generaciones futuras. Nuestros completos marcos de gestión de riesgos y supervisión regulatoria garantizan un mercado justo y equitativo, protegiendo los intereses de inversores y empresas por igual. Al mirar hacia el futuro, seguimos firmes en nuestra misión de ser un líder global en los mercados financieros, evolucionando continuamente para satisfacer las necesidades dinámicas del mundo financiero.",
                    what: "¿Qué hacemos?",
                    what1: "En ASX, facilitamos un entorno de mercado dinámico donde las empresas e inversores pueden crecer y prosperar. Nuestros servicios incluyen listados en el mercado que permiten a las empresas recaudar capital, servicios de negociación que brindan acceso a una amplia gama de instrumentos financieros, y operaciones de compensación y liquidación que garantizan transacciones seguras.",
                    what2: "Mantenemos la integridad del mercado mediante una estricta supervisión regulatoria e impulsamos la innovación al mejorar continuamente nuestra infraestructura financiera. A través de estos esfuerzos, ASX juega un papel crucial en el impulso del crecimiento económico y en el mantenimiento de un mercado financiero resistente. Explora nuestra plataforma para descubrir oportunidades de inversión y ver cómo podemos ayudarte a alcanzar tus metas financieras.",
                    check: "¡Revisa nuestros stocks!"
                },
                stockBanner: {
                    titulo: "Bienvenido a la sección de Stocks e Índices Bursátiles",
                    sub: "Accede a las últimas cotizaciones y análisis del mercado para tomar decisiones informadas en tus inversiones",
                    stock: "Ver Stocks",
                    indices: "Ver Índices",
                },
                stock: {
                    titulo: "Bienvenido a la sección de Stocks",
                    explore: "Explora las cotizaciones de las empresas en tiempo real. (simbolizado $AUD)",
                    dia: "Mostrar gráfico por día",
                    hora: "Mostrar gráfico por hora",
                },
                pieChart: {
                    dia: "Participación de Empresas en Cotizaciones el día de ayer",
                    mes: "Participación de Empresas en Cotizaciones en los últimos 30 días",
                    mes1: "Ver gráfico mensual",
                    dia1: "Ver gráfico diario",
                },
                indices: {
                    index: "Índices Bursátiles globales",
                    index1: "Consulta los índices de ASX y otras cotizaciones de bolsa en el mundo comparadas para tomar decisiones informadas en tus inversiones. (simbolizado $USD)"
                },
            },
        },
    });