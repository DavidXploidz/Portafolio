import PROYECTOS from './dataProyectos'
import usePortafolio from '../hooks/usePortafolio'
import { useState, useEffect } from 'react'
import {FaReact} from 'react-icons/fa'
import {SiTailwindcss, SiCss3, SiJavascript, SiHtml5} from 'react-icons/si'

const Proyectos = () => {

const { proyectos} = usePortafolio()

const [value, setValue] = useState(0)
const [x, setX] = useState(0)
const [y, setY] = useState(6)
let [solo, setSolo] = useState([])
let botones = ['1','3']
const [mostrar, setMostrar] = useState(true)
const [mostrar2, setMostrar2] = useState(false)


const cambiarContenido = (index) => {
  if(index === 0){
    console.log('traenme los primeros 6');
    setMostrar(true)
    setMostrar2(false)
  
    return 
  }else if(index === 1){
    setMostrar(false)
    setMostrar2(true)
    console.log('traeme los siguientes 6');

    return
  }
}



  return (
    <section ref={proyectos} className="contenedor md:h-screen">
      <h2 className='flex flex-col text-center text-4xl mb-10  '>Proyectos<span className='block mx-auto mt-1 text-center border-solid border-b-2 border-blue-500 w-1/3'></span></h2>
      <div className='flex flex-col justify-center items-center'>

      {mostrar && (
      <div className='grid grid-cols-1 md:grid-cols-3 md:gap-x-10 md:gap-y-5'>
      {solo = PROYECTOS.slice(0,6).map(proyecto => {
          return(
            <article className='text-center shadow-lg rounded-lg mb-5 md:mb-0' key={proyecto.id}>
              <p className='text-2xl font-semibold mb-3 capitalize'>{proyecto.titulo}</p>
              <img  src={proyecto.imagen} alt={`Imagen de ${proyecto.titulo}`} className=" mx-auto h-40 w-72 md:w-full md:h-60" />
              <div className='flex justify-between items-center '>
                <div className='flex gap-x-5 text-blue-500 ml-10'>
                  {proyecto.react && <FaReact size={30} /> }
                  {proyecto.tailwind && <SiTailwindcss size={30} />}
                  {proyecto.css && <SiCss3 size={30}/>}
                  {proyecto.js && <SiJavascript size={30} />}
                  {proyecto.html && <SiHtml5 size={30} />}
                </div>
                
                <button className='mr-10 p-2 my-5 bg-blue-500 text-white cursor-pointer hover:bg-blue-700'><a href={proyecto.enlace} target="_blank">Ver Proyecto </a></button>
              </div>
              
            </article>
          )
      })}
      </div>
      )}
      {mostrar2 && (
      <div className='grid grid-cols-1 md:grid-cols-3 md:gap-x-10 md:gap-y-5'>
      {solo = PROYECTOS.slice(6,9).map(proyecto => {
          return(
            <article className='text-center shadow-lg rounded-lg mb-5 md:mb-0' key={proyecto.id}>
            <p className='text-2xl font-semibold mb-3 capitalize'>{proyecto.titulo}</p>
            <img  src={proyecto.imagen} alt={`Imagen de ${proyecto.titulo}`} className=" mx-auto h-40 w-72 md:w-full md:h-60" />
              <div className='flex justify-between items-center '>
                <div className='flex gap-x-5 text-blue-500 ml-10'>
                  {proyecto.react && <FaReact size={30} /> }
                  {proyecto.tailwind && <SiTailwindcss size={30} />}
                  {proyecto.css && <SiCss3 size={30}/>}
                  {proyecto.js && <SiJavascript size={30} />}
                  {proyecto.html && <SiHtml5 size={30} />}
                </div>
              
                <button className='mr-10 p-2 my-5 bg-blue-500 text-white cursor-pointer hover:bg-blue-700'><a href={proyecto.enlace} target="_blank">Ver Proyecto </a></button>
                
            </div>
            
          </article>
          )
      })}
      </div>
      )}



{/**Botones de paginas */}
      <div className='flex gap-x-5 mt-10 z-10'>
        {botones.map((boton, index) => (
          <button key={index} onClick={e => {setValue(index), cambiarContenido(index)  }} 
            className={`rounded-full h-4 w-4   hover:bg-gray-400 ${index === value ? 'bg-blue-500': 'bg-gray-600 '}`}>
          </button>
        ))}
      </div>


      </div>


    </section>
  )
}

export default Proyectos