import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en: {
        translation: {
            "ABOUT_CONTENT": "This is the about page",
            "ABOUT_HEADER": "About page",
            "ABOUT_LINK": "About",
            "HOME_CONTENT": "This is the home page",
            "HOME_HEADER": "Home page",
            "HOME_LINK": "Home",
            "NEWS_CONTENT": "This is the news page",
            "NEWS_HEADER": "News page",
            "NEWS_LINK": "News",
            "TITLE": "Multilingual Progressive Web App created with React and TypeScript"
        }
    },
    nl: {
        translation: {
            "ABOUT_CONTENT": "Dit is de over pagina",
            "ABOUT_HEADER": "Over pagina",
            "ABOUT_LINK": "Over",
            "HOME_LINK": "Thuis",
            "HOME_HEADER": "Thuis pagina",
            "HOME_CONTENT": "Dit is de thuis pagina",
            "NEWS_CONTENT": "Dit is de nieuws pagina",
            "NEWS_HEADER": "Nieuws pagina",
            "NEWS_LINK": "Nieuws",
            "TITLE": "Meertalige Progressieve Web App gemaakt met React en TypeScript"
        }
    }
};

const locale = window.location.hostname === '127.0.0.1' ? 'nl' : 'en';

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: locale,

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });