// Este es el archivo que "arranca" toda la app React

import React from 'react'

import ReactDOM from 'react-dom/client'
// ReactDOM = la parte de React que se conecta con el navegador
// Es el "puente" entre React y el DOM (Document Object Model)

import { App } from './App.jsx'
// Importa el componente raíz (App) desde el archivo App.jsx

import './index.css'
// Importa los estilos globales (se aplican a toda la app)

const Root = ReactDOM.createRoot(document.getElementById('root'))

     /* 1. document.getElementById('root')
      - document = el HTML completo de la página
      - .getElementById('root') = busca un elemento con id="root"
      
      En el archivo index.html (que no se ve, pero existe) hay algo así:
      <body>
        <div id="root"></div>  ← React se "monta" aquí
      </body> */

Root.render(
  <App />
)

/*    FLUJO COMPLETO:
   1. El navegador carga index.html
   2. index.html carga este archivo main.jsx
   3. main.jsx busca el div con id="root"
   4. React "monta" <App /> dentro de ese div
   5. App.jsx renderiza múltiples <TwitterFollowCard />
   6. Todo se muestra en pantalla */