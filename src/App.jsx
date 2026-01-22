//App.jsx se encarga de la estructura de la página! COMPONENTE PADRE


import './App.css'
// ¿Qué hace? Trae los estilos CSS para este componente
// ¿Por qué se importa sin guardar en variable? Porque CSS no se "usa"
// en el código, simplemente se "activa" globalmente


import { TwitterFollowCard } from './TwitterFollowCard.jsx'
// ¿Qué hace? Trae la "receta" del componente hijo
// Las { } son para "desestructurar" - significa que solo se quiere
// esa función específica del archivo (porque podría exportar varias)
// Es como decir: "del archivo TwitterFollowCard.jsx, dame la función
// que se llama TwitterFollowCard"

export function App () {
// export = otros archivos pueden importar esta función
// function App = el nombre del componente (SIEMPRE en PascalCase)
// () = no recibe props porque es el componente raíz (el padre de todos)


const users = [
  // const = variable que NO cambiará (constante)
  // users = nombre que se le da
  // [ ] = array (lista) de objetos

  {
    // { } = objeto (como una ficha con información)
    userName: 'too0oori',
    name: 'Sofía Lagos',
    isFollowing: true
  },
  {
    userName: 'cicatepit',
    name: 'Camilo',
    isFollowing: false
  },
]

  return (
    /* 3. CONTENEDOR RAÍZ: React requiere devolver un único elemento. 
       Aquí se usa una <section> con la clase 'App' definida en index.css. */

        // Todo componente DEBE retornar algo visible (JSX)
    // Los ( ) son para escribir JSX en múltiples líneas

    <section className='App'>

    {/*COMPOSICIÓN Y CHILDREN:
    /* 
        <section> = contenedor HTML semántico
        className = en React se usa className en vez de "class"
        (porque "class" es palabra reservada en JavaScript)
        'App' = el nombre de la clase CSS (definida en index.css)
      */
    
        //En lugar de pasar el nombre como una prop (name="..."), lo pasamos "literal".
        //Todo lo que esté entre la apertura y el cierre del componente es el CHILDREN.
    }
    {users.map(({userName, name, isFollowing}) => (
        /* users.map()
         ¿Qué es .map()? Un método de arrays que RECORRE cada elemento
         y TRANSFORMA cada uno en otra cosa 

         ({userName, name, isFollowing}) =>
         Esto se llama "Arrow Function" (función flecha)

         Por CADA objeto del array, JavaScript:
         - Toma el objeto completo: { userName: 'too0oori', ... }
         - DESESTRUCTURA sus propiedades en variables separadas
         - Es decir: crea 3 variables userName, name, isFollowing
         
         ¿Por qué los { }? Para sacar las propiedades del objeto
         Sin { }: se tendría que escribir user.userName, user.name...
         Con { }: se puede usar directamente userName, name...
      
        => (...)
         La flecha => significa "por cada elemento, haz esto:"
         Los ( ) contienen lo que se RETORNA (el componente a crear)
      */

        <TwitterFollowCard  // Elemento del componente TwitterFollowCard
            key={userName} // // key = identificador ÚNICO para cada elemento de la lista. React lo necesita para saber qué cambió si actualizas la lista
            userName={userName}
            // Se pasa la prop userName con el valor de la variable userName
            // La primera es el NOMBRE de la prop, la segunda (en { }) es el VALOR que se saca del objeto
            initialIsFollowing={isFollowing}
            // prop initialIsFollowing recibe el valor isFollowing
            // Se llama "initial" porque es el valor INICIAL
            // El hijo puede tener su propio estado después
        >
            {name} 
            {/* Todo lo que va ENTRE las etiquetas <TwitterFollowCard>
              se llama CHILDREN (hijos/contenido)
              
              {name} = renderiza el valor de la variable name
              Las { } en JSX significan "ejecuta JavaScript aquí"
              
              Esto es equivalente a pasar una prop así:
              <TwitterFollowCard children={name} />
              Pero la sintaxis entre etiquetas es más legible*/}
        </TwitterFollowCard>
    ))}
    </section>
  )
}

// Resumen:
/* 1. App.jsx tiene un array con 2 usuarios
  2. .map() recorre ese array
  3. Por cada usuario, crea un <TwitterFollowCard>
  4. Le pasa props (userName, initialIsFollowing) y children (name)
  5. React renderiza todas las tarjetas en la pantalla*/
