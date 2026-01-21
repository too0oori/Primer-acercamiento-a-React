# Proyecto React - Twitter Follow Card

**Curso:** midudev  
**Estado:** En desarrollo  
**Objetivo:** Aprender los fundamentos de React mediante la creación de componentes reutilizables.

👉 El proyecto sigue **en desarrollo** y este README documenta **mi proceso de aprendizaje paso a paso**, desde crear el proyecto hasta comprender componentes, props, JSX y estilos.


---

## Instalación y configuración inicial

### 1. Crear proyecto con Vite
```bash
npm create vite@latest
# Seleccionar: React
# Seleccionar: JavaScript
cd nombre-del-proyecto
npm install
npm run dev
```

### 2. Estructura de archivos base
```
proyecto/
├── src/
│   ├── main.jsx          # Punto de entrada
│   ├── App.jsx           # Componente raíz
│   ├── TwitterFollowCard.jsx  # Componente hijo
│   ├── index.css         # Estilos globales
│   └── App.css          # Estilos del componente
└── index.html
```

---

## Conceptos fundamentales

### 1. Componentes vs Elementos

**Componente:** La función que define la interfaz
```javascript
export function TwitterFollowCard() {
  return <article>...</article>
}
```

**Elemento:** Lo que React renderiza en el DOM (el resultado de ejecutar el componente)
```javascript
<TwitterFollowCard userName="too0oori" />
```

### 2. Props (Propiedades)

#### Características clave:
- Los componentes reciben **un solo objeto** de propiedades
- Las props son **inmutables** (solo lectura)
- Se usa desestructuración para acceder a ellas

```javascript
// Recibimos un objeto, lo desestructuramos
export function TwitterFollowCard({ children, userName, isFollowing }) {
  // NO hacer: isFollowing = true (son inmutables)
  return <article>...</article>
}
```

#### Uso en el componente padre:
```javascript
<TwitterFollowCard 
  isFollowing={false} 
  userName="too0oori">
  Sofía Lagos (Tori)
</TwitterFollowCard>
```

### 3. Children (prop especial)

Todo lo que se coloca entre las etiquetas de apertura y cierre se convierte en la prop `children`:

```javascript
<TwitterFollowCard userName="too0oori">
  Sofía Lagos (Tori)  {/* Esto es children */}
</TwitterFollowCard>
```

Se renderiza así:
```javascript
export function TwitterFollowCard({ children, userName }) {
  return (
    <article>
      <strong>{children}</strong>  {/* Renderiza: Sofía Lagos (Tori) */}
    </article>
  )
}
```

### 4. Template Literals (backticks)

**IMPORTANTE:** Para inyectar variables en cadenas de texto usar backticks ` `` `, NO comillas simples `''`.

```javascript
// CORRECTO
src={`https://unavatar.io/github/${userName}`}
alt={`El avatar de ${children}`}

// INCORRECTO (se interpreta como texto literal)
src={'https://unavatar.io/github/${userName}'}
```

### 5. Valores booleanos en props

Cuando una prop no tiene valor, React la evalúa como `true`:

```javascript
// Estas dos líneas son equivalentes:
<TwitterFollowCard isFollowing />
<TwitterFollowCard isFollowing={true} />
```

---

## Estructura del proyecto

### main.jsx - Punto de entrada
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'

const Root = ReactDOM.createRoot(document.getElementById('root'))
Root.render(<App />)
```

### App.jsx - Componente raíz
- Importa los estilos globales y del componente
- Compone la aplicación usando componentes hijos
- Pasa diferentes props para reutilizar componentes

```javascript
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
  return (
    <section className='App'>
      <TwitterFollowCard isFollowing={false} userName="too0oori">
        Sofía Lagos (Tori)
      </TwitterFollowCard>
      
      <TwitterFollowCard isFollowing userName="cicatepit">
        Camilo
      </TwitterFollowCard>
    </section>
  )
}
```

### TwitterFollowCard.jsx - Componente hijo
- Define su propia lógica y diseño
- Recibe props del padre (inmutables)
- Es reutilizable con diferentes datos

---

## Estilos CSS en React

### className vs class
En React se usa `className` porque `class` es palabra reservada de JavaScript:

```javascript
// CORRECTO
<article className='tw-followCard'>

// INCORRECTO
<article class='tw-followCard'>
```

### Organización de estilos

**index.css:** Estilos globales, reset, y del body
```css
body {
  margin: 0;
  background: #222;
  font-family: system-ui;
}
```

**App.css:** Estilos específicos de los componentes
```css
.tw-followCard {
  display: flex;
  align-items: center;
  color: #fff;
}
```

---

## Checklist de estudio

### Conceptos básicos
- [ ] Diferenciar componente vs elemento
- [ ] Entender que las props son un objeto único
- [ ] Las props son inmutables
- [ ] Qué es y cómo funciona `children`

### Sintaxis
- [ ] Usar backticks para template literals
- [ ] Usar `className` en lugar de `class`
- [ ] Desestructurar props correctamente

### Estructura
- [ ] Crear proyecto con Vite
- [ ] Organizar archivos (main.jsx, App.jsx, componentes)
- [ ] Separar estilos globales vs específicos

### Práctica
- [ ] Crear un componente desde cero
- [ ] Pasar props y renderizarlas
- [ ] Reutilizar componente con diferentes datos
- [ ] Usar la prop `children`

---

## Notas importantes

1. **React requiere un único elemento raíz:** Siempre devolver un solo elemento padre (puede ser `<div>`, `<section>`, o `<>...</>`).

2. **Reutilización:** Un componente bien hecho se puede usar múltiples veces con diferentes props.

3. **Flujo de datos unidireccional:** Los datos van del padre al hijo a través de props, nunca al revés.

4. **Console.log para debugging:** Usar `console.log(props)` dentro del componente para ver qué está recibiendo.

---

## Próximos pasos

- [ ] Implementar estado con `useState`
- [ ] Manejar eventos (onClick, onChange)
- [ ] Renderizado condicional
- [ ] Listas y keys