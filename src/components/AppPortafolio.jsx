import React from 'react'
import Acercade from './Acercade'
import Contacto from './Contacto'
import Experiencia from './Experiencia'
import Header from './Header'
import Proyectos from './Proyectos'
import ScrollArriba from './ScrollArriba'
const AppPortafolio = () => {
  return (
    <main>
        <ScrollArriba />
        <Header />
        <Acercade />
        <Proyectos />
        <Experiencia />
        <Contacto />
    </main>
  )
}

export default AppPortafolio