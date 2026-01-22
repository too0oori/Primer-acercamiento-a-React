//TwitterFollowCard se encarga de su propia lógica y diseño!!
import { useState } from 'react'
// useState = un "hook" (gancho) de React para manejar ESTADO
// ¿Qué es un hook? Funciones especiales de React que empiezan con "use"
// Permiten usar características de React en los componentes
// Los hooks SOLO se pueden usar dentro de componentes
// No se puede usar useState fuera de una función de componente


// Un COMPONENTE es la función (la receta). El ELEMENTO es lo que React renderiza (el resultado).

export function TwitterFollowCard({ children, userName, initialIsFollowing }) {
  
    // export = otros archivos pueden importar este componente
  // function TwitterFollowCard = nombre del componente
  
  // ({ children, userName, initialIsFollowing })
  // ↑ DESESTRUCTURACIÓN de las props que llegan desde App.jsx
  
  /* ¿Qué llega realmente?
     Cuando App.jsx hace:
     <TwitterFollowCard userName="too0oori" initialIsFollowing={true}>
       Sofía Lagos
     </TwitterFollowCard>
     
     React empaqueta todo en UN OBJETO:
     {
       children: "Sofía Lagos",
       userName: "too0oori", 
       initialIsFollowing: true
     }
     
     Y se DESESTRUCTURA para tener 3 variables separadas
     en vez de tener que escribir props.children, props.userName...
  */
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing) 

    /* useState(initialIsFollowing)
       - Se llama a la función useState
       - Se le pasa el valor INICIAL que se quiere recordar
       - initialIsFollowing viene de las props (true o false)
       
    useState retorna un ARRAY con 2 elementos:
       [valorActual, funciónParaCambiarlo]
       
    const [isFollowing, setIsFollowing] = ...
       Esto es DESESTRUCTURACIÓN de arrays
       Significa: "del array que retorna useState, llama al primer
       elemento 'isFollowing' y al segundo 'setIsFollowing'"
       
    Analogía: useState es como una caja fuerte con 2 cosas:
    - El CONTENIDO actual (isFollowing)
    - La LLAVE para cambiar el contenido (setIsFollowing)
    
    - isFollowing = SOLO LECTURA (no se puede hacer isFollowing = true)
    - setIsFollowing = la ÚNICA forma de cambiar isFollowing
      Porque cuando se usa setIsFollowing, React:
       Cambia el valor
       RE-RENDERIZA el componente (lo vuelve a dibujar)
       Actualiza la pantalla

    Si se cambiara isFollowing directamente, React NO se enteraría
    */

    const text = isFollowing ? 'Siguiendo' : 'Seguir'

    const buttonClassName = isFollowing
     ? 'tw-followCard-button is-following' 
     : 'tw-followCard-button'

    /* Si isFollowing es true:
      buttonClassName = 'tw-followCard-button is-following'
      (tiene 2 clases: la base + la de "siguiendo")
      
    - Si isFollowing es false:
      buttonClassName = 'tw-followCard-button'
      (solo tiene la clase base)*/
    
    const handleClick = () => {
      setIsFollowing(!isFollowing) 
      
      /*handleClick = nombre de la función
       Convención: usar "handle" + NombreDelEvento
       (handleClick, handleSubmit, handleChange, etc.)
    
    2. () => { }
       Arrow function (función flecha)
       No recibe parámetros (los () están vacíos)
    
    3. setIsFollowing(!isFollowing)
       
       !isFollowing = el operador ! significa NOT (negación)
       - Si isFollowing es true → !isFollowing es false
       - Si isFollowing es false → !isFollowing es true
       
       Es un TOGGLE (interruptor): alterna entre true y false*/
    }


  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'

          // Error previo corregido: se usan Backticks (``) para Template Literals. 
        // Si usáramos comillas simples (''), JS lo tomaría como cadena literal. //

          alt={`El avatar de ${children}`}
          src=  {`https://unavatar.io/github/${userName}`}
        />
        <div className='tw-followCard-info'>
            {/* Contenedor para el nombre y username */}

        {/* Se renderiza el children (el nombre) aquí // */}

          <strong>{children}</strong>
            {/*
            <strong> = texto en negrita (bold)
            {children} = renderiza lo que vino entre las etiquetas
            
            Recordatorio: children viene de App.jsx:
            <TwitterFollowCard>
              Sofía Lagos  ← esto es children
            </TwitterFollowCard>
          */}

          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className ={buttonClassName} onClick={handleClick}>
            <span className='tw-followCard-text'>{text}</span>
            {/*
              Muestra el texto calculado ('Seguir' o 'Siguiendo')
              
              Esta clase se OCULTA cuando el botón tiene hover
              y tiene la clase .is-following (ver App.css)
            */}

            <span className='tw-followCard-stopFollow'>Dejar de seguir</span>

            {/*              Este texto está OCULTO por defecto (display: none en CSS)
              
              Solo se MUESTRA cuando:
              1. El botón tiene la clase .is-following
              2. El usuario hace hover sobre el botón*/}
              
        </button>
      </aside>
    </article>
  )
}

            /*handleClick   = la REFERENCIA a la función
            handleClick() = EJECUTA la función inmediatamente
            
            React necesita la referencia para llamarla cuando
            ocurra el click. Si se ejecuta con (), se llamaría
            al cargar la página, no al hacer click.*/
