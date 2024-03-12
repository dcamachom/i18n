import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';

import JobsList from "./components/jobslist";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";


const App = () => {
    // Determinar el idioma del navegador
    const userLanguage = navigator.language || navigator.userLanguage;
    const defaultLocale = userLanguage.split('-')[0]; // Obtener la parte principal del código de idioma (ej. 'en' de 'en-US')
  
    // Cargar los mensajes según el idioma del navegador
    const messages = defaultLocale === 'es' ? localeEsMessages : localeEnMessages;
  
    return (
      <IntlProvider locale={defaultLocale} messages={messages}>
        <JobsList />
      </IntlProvider>
    );
  };
  
  ReactDOM.render(<App />, document.getElementById('root'));
