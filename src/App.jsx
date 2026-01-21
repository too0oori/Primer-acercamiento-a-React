//App.jsx se encarga de la estructura de la página!

// IMPORTACIÓN DE ESTILOS: El CSS se importa globalmente en el componente raíz.
import './App.css'
// IMPORTACIÓN DE COMPONENTES: se trae la "receta" del componente hijo para usarlo aquí.
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {

  return (
    /* 3. CONTENEDOR RAÍZ: React requiere devolver un único elemento. 
       Aquí se usa una <section> con la clase 'App' definida en index.css. */

    <section className='App'>

    {/*COMPOSICIÓN Y CHILDREN:
          En lugar de pasar el nombre como una prop (name="..."), lo pasamos "literal".
          Todo lo que esté entre la apertura y el cierre del componente es el CHILDREN.
    */}
    <TwitterFollowCard 
    isFollowing={false} 
    userName="too0oori">
    Sofía Lagos (Tori) {/* <-- Esto es el CHILDREN */}
    </TwitterFollowCard>

{/* REUTILIZACIÓN: 
          Se puede usar el mismo componente con diferentes datos (PROPS).
          Las PROPS (isFollowing, userName) son inmutables para el hijo.
        */}
    <TwitterFollowCard 
    isFollowing         //En React, pasar una prop sin valor se evalúa automáticamente como true.
    userName="cicatepit">
    Camilo {/* <-- Otro CHILDREN */}
    </TwitterFollowCard>


    </section>
  )
}
