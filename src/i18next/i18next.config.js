// import React from "react";
// import { createRoot } from 'react-dom/client';
// import i18n from "i18next";
// import { useTranslation, initReactI18next } from "react-i18next";

// i18n
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .init({
//     // the translations
//     // (tip move them in a JSON file and import them,
//     // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
//     resources: {
//       en: {
//         translation: {
//           "welcome": "Welcome to React and react-i18next"
//         }
//       }
//     },
//     lng: "en", // if you're using a language detector, do not define the lng option
//     fallbackLng: "en",

//     interpolation: {
//       escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
//     }
//   });



import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { useTranslation, initReactI18next } from "react-i18next";
// import reportWebVitals from "./reportWebVitals";

// import './index.css';
// import App from './App';


i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(Backend)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    //WHEN USE STATIC JSON AND NOT USE BACKEND API
    // resources: {
    //   en: {
    //     translation: {
    //       "Welcome to React": "Welcome to React and react-i18next"
    //     }
    //   },
    //   fr:{
    //     translation:{
    //       "Welcome to React":"Welcom to React and react-i18next franch"
    //     }
    //   }
    // },
    //WHEN USE DYNAMIC JSON AND  USE BACKEND API
    // fallback default language
    lng:'en',
    fallbackLng: "en",
    // detection:{
    //     // order and from where user language should be detected
    //        order: ['htmlTag', 'cookie', 'localStorage', 'path', 'subdomain'],
    //        caches:['cookie']
    // },
    backend:{
      loadPath:"/assets/i18n/{{ns}}/{{lng}}.json",
    },
    react:{
    //   useSuspense:false,
      wait:true
    },
    debug:true,
    // can have multiple namespacing in  case youe want to divide a huge translation into smaliler pieces and load theme demand 
    ns:["dashboard"],
    interpolation:{
     espaceValue:false,
     formatSeparator:","   
    }
  });



  export  default i18n;