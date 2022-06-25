import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import usePortafolio from '../hooks/usePortafolio'
import {VscChromeClose} from 'react-icons/vsc'
import {BsFillArrowDownCircleFill} from 'react-icons/bs'


const Header = () => {

const {mostrarMenu, setMostrarMenu, scrollToSection, inicio, about, proyectos, experiencia, contacto} = usePortafolio()


  return (
    <header  ref={inicio} className='header text-white'>
        <div className='contenedor flex items-center justify-between pt-10'>
            <h3 className='text-4xl' >DevSpace</h3>
            <div>  
                <GiHamburgerMenu size={40} onClick={e => setMostrarMenu(!mostrarMenu)} id="menu-ham" /> 
            </div>
            {/*Solo cuando es pantalla desktop*/}
            <ul className='hidden text-2xl mt-10 md:flex flex-row gap-x-5'>
                <li onClick={()=> scrollToSection(inicio)} className="hover:text-blue-500 duration-300 cursor-pointer" >Inicio</li>
                <li onClick={()=> scrollToSection(about)}  className="hover:text-blue-500 duration-300 cursor-pointer">Acerca de</li>
                <li onClick={()=> scrollToSection(proyectos)}  className="hover:text-blue-500 duration-300 cursor-pointer">Proyectos</li>
                <li onClick={()=> scrollToSection(experiencia)}  className="hover:text-blue-500 duration-300 cursor-pointer">Experiencia</li>
                <li onClick={()=> scrollToSection(contacto)} className="hover:text-blue-500 duration-300 cursor-pointer">Contacto</li>
            </ul>
        </div>
        {/**Menu Slider Oculto solo en version mobile */}
        <nav className={mostrarMenu ? 'menu-slider activo' : 'menu-slider'}>
            <VscChromeClose size={50} className="text-white absolute top-10 right-6" onClick={e => setMostrarMenu(!mostrarMenu)} /> 
            <ul className='text-3xl mt-10'>
                <li className='mb-2' onClick={()=> scrollToSection(inicio)} >Inicio</li>
                <li className='mb-2' onClick={()=> scrollToSection(about)}>Acerca de</li>
                <li className='mb-2' onClick={()=> scrollToSection(proyectos)}>Proyectos</li>
                <li className='mb-2' onClick={()=> scrollToSection(experiencia)}>Experiencia</li>
                <li onClick={()=> scrollToSection(contacto)}>Contacto</li>
            </ul>
        </nav>
        {/**Contenido central del header */}
        <div className='contenedor text-center sticky top-1/4 md:top-2/4'>
            <h2 className='font-semibold text-3xl'>Ing. David Adame Soto</h2>
            <p className='text-xl my-5'>
                Soy un apasionado desarrollador web,
                autodidacta y en continuo aprendizaje.
            </p>
            <svg className="flex mx-auto mt-10 animate-bounce w-9 h-10 ">
                <BsFillArrowDownCircleFill size={35} />
            </svg>
            <button className='bg-blue-500 rounded-3xl py-2 px-5 cursor-pointer duration-300 my-5' onClick={()=> scrollToSection(contacto)}>Sigamos en contacto</button>
        </div>
        
    
    </header>
  )
}

export default Header