import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next
.use(initReactI18next)
.init({
    fallbackLng: "EN",
    resources: {
        EN: {
            translation: {
                bienvenida: "Welcome",
                cambiar: "EN",
            },
        },
        ES: {
            translation: {
                bienvenida: "Bienvenido",
                cambiar: "ES"
            },
        }
    }
});