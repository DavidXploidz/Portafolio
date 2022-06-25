import {useState} from 'react'
import usePortafolio from '../hooks/usePortafolio'
import expIMG from '../images/experiencia.jpg'
import escuela from '../images/educacion.jpg'
import paisaje from '../images/paisaje.jpg'

const Experiencia = () => {

    const {experiencia} = usePortafolio()

    const [resumen, setResumen] = useState(false)
    const [exp, setExp] = useState(true)
    const [educacion, setEducacion] = useState(false)
   
    const cambiarContenido = (e) => {
        e.preventDefault()
        if(e.target.value === 'exp'){
         setResumen(false)
         setEducacion(false)
         setExp(true)
         return
        }
        if(e.target.value === 'educacion'){
         setExp(false)
         setResumen(false)
         setEducacion(true)
         return
       }else{
         setExp(false)
         setEducacion(false)
         setResumen(true)
       }
    }
    


  return (
    <section ref={experiencia} className='contenedor md:h-screen'>
        <h2 className='flex flex-col text-center text-4xl md:mt-20'>Experiencia<span className='block mx-auto mt-1 text-center border-solid border-b-2 border-blue-500 w-1/3'></span></h2>
        <div className='grid grid-cols-1 md:grid-cols-2 mt-20 rounded-lg md:shadow-2xl '>
            <div >
                {resumen && <img src={paisaje} alt="Imagen de experiencia" className='w-full h-full rounded-lg opacity-75 ' /> }
                {exp && <img src={expIMG} alt="Imagen de experiencia" className='w-full h-full rounded-lg opacity-75' />}
                {educacion && <img src={escuela} alt="Imagen de experiencia" className='w-full h-full rounded-lg opacity-75' />}
            </div>
            <div className='flex flex-col'>
              <div className='flex gap-x-10 pt-5 mx-auto'>
                <button className={resumen ? 'text-2xl text-blue-500 font-semibold ' : 'text-2xl hover:text-blue-400'} value='resumen' onClick={cambiarContenido}>Resumen</button>
                <button className={exp ? 'text-2xl text-blue-500 font-semibold' : 'text-2xl hover:text-blue-400'}  value='exp' onClick={cambiarContenido}>Experiencia</button>
                <button className={educacion ? 'text-2xl text-blue-500 font-semibold' : 'text-2xl hover:text-blue-400'}  value='educacion' onClick={cambiarContenido}>Educación</button>
              </div>
              {resumen && (
                <p className='text-xl text-center p-10'>
                    Titulado de la carrera de Ing. Informática (Sep.) 2021, con experiencia en maquetación de páginas web, programación y manejo de bases de datos. Actualmente buscando trabajo como desarrollador web para expandir conocimientos y ganar experiencia dentro la industria.
                </p>
               )}
               {exp && (
                <div className='mt-5 text-lg text-center'>
                    <p className='bg-blue-400 inline p-2 '><span className='text-white'>agosto 2020 – enero 2021</span></p>
                    <p className='my-2 font-semibold'>Vendedor en Refaccionaria Gallegos, SJD</p>
                    <p className='mb-5'>Estaba frente a mostrador brindando Atención al cliente. Realizaba los cobros y Ventas de mostrador. Era el Encargado de almacén, tenía que ir por lo que me pedían y buscarlo en las estanterías.</p>
                    <p className='bg-blue-400 inline p-2 '><span className='text-white'>enero 2021 – septiembre 2021</span></p>
                    <p className='my-2 font-semibold'>Encargado de Café Internet en Café Internet SJD, SJD</p>
                    <p className='mb-5'>Era encargado de una sala de cómputo. Cobraba el tiempo de uso de los equipos. Sacaba copias. Redactaba documentos por otros usuarios. Descargaba archivos que me pedían. Instalaba programas en equipos. Di mantenimiento a equipos (preventivos y correctivos). Limpiaba los lugares que se usaban.</p>
                    <p className='bg-blue-400 inline p-2 '><span className='text-white'>septiembre 2021 – Presente</span></p>
                    <p className='my-2 font-semibold'>Desarrollador web Freelance, Durango</p>
                    <p className='mb-2'>Experiencia desarrollando sitios web de manera práctica, cuento con portafolio de proyectos que he realizado , algunas tecnologías que se manejar son HTML, CSS, JavaScript, MySQL, librerías como REACT, TaildWind.</p>
                </div>
                )}
                 
                {educacion && (
                <div className='text-xl text-center mt-5'>
                    <p className='bg-blue-400 inline p-2 '><span className='text-white'>2015 - 2020</span></p>
                    <p className='my-2'>Ing. Informática</p>
                    <p className='mb-2'>Especialidad: Desarrollo de apps moviles/web</p>
                    <p className='my-2'>Instituto Tecnológico de Durango</p>
                    <p className='mb-4'>Graduado con promedio de 88.43</p>
                    <p className='bg-blue-400 inline p-2 '><span className='text-white'>2020-2022</span></p>
                    <ul className='list-disc my-2 p-10'>
                    <li>Udemy Desarrollo web completo <span className='block'>con HTML, CSS, JS, PHP</span> </li>
                    <li>Udemy JavaScript Moderno</li>
                    <li>Udemy React y Redux</li>
                    </ul>
                </div>
                )}
            </div>
            
        </div>
    </section>
  )
}

export default Experiencia