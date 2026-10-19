import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import Aside from './components/Aside'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)
  const menus = 
  [
    {nombre:"Inicio"},
    {nombre:"Nosotros"},
    {nombre:"Contactos"},
    {nombre:"Nosotros"},
  ]

  

  return (
    <>
      <Header/>
      <Nav menu={menus} />
      <Main titulo="Crea tu propia página web"
        descripcion="Crear una página web es una buena forma de aprender sobre diseño y programación. Actualmente, los sitios web se utilizan para compartir información, presentar negocios, mostrar proyectos y comunicarse con otras personas. Por eso, aprender a crear una página web puede ser muy útil para los estudios y el trabajo. Una página web sencilla permite comenzar desde cero, incluso si todavía no tienes experiencia en programación. Con herramientas básicas y un poco de práctica, puedes diseñar tu propio sitio web y personalizarlo según tus gustos y necesidades."/>
      <Aside/>
      <Footer/>
    </>
  )
}

export default App