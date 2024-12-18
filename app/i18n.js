"use client"
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    load: "languageOnly",
    fallbackLng: "en",
    saveMissing:true,
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage', 'cookie'],
      checkWhitelist: true, // ensure the detected language is in the whitelist
    },
    whitelist: ['en', 'ar'], // add all supported languages here
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    
  });

// Log the detected language
i18n.on('languageChanged', (lng) => {
  console.log('Detected language:', lng);
});

export default i18n;
