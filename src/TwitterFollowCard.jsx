//TwitterFollowCard se encarga de su propia lógica y diseño!!

// Un COMPONENTE es la función (la receta). El ELEMENTO es lo que React renderiza (el resultado).

export function TwitterFollowCard({ children, userName = 'unknown', isFollowing }) {
    console.log(isFollowing)

    // 1. Las PROPS son inmutables: vienen del padre y no las modificamos aquí directamente.
    // 2. Desestructuración: Recibimos un único OBJETO de propiedades, no parámetros sueltos.
    // 3. Children: Propiedad especial que recupera lo que hay envuelto en las etiquetas del componente.

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

        {/* Se renderiza el children (el nombre) aquí // */}

          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button className ='tw-followCard-button'>
            Seguir
        </button>
      </aside>
    </article>
  )
}