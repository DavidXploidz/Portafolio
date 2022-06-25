import React from 'react'
import usePortafolio from '../hooks/usePortafolio'
import avatar from '../images/myAvatar.png'
import {MdArrowForwardIos} from 'react-icons/md'
import {GiNotebook} from 'react-icons/gi'
import {BsFillStopwatchFill} from 'react-icons/bs'


const Acercade = () => {

    const {about} = usePortafolio()



  return (
    <section ref={about} className="contenedor md:h-screen">
        <h2 className='flex flex-col text-center text-4xl md:mt-20 '>Acerca de <span className='block mx-auto mt-1 text-center border-solid border-b-2 border-blue-500 w-1/3'></span></h2>
        <div className='flex flex-col my-10 md:flex-row md:gap-x-10'>
            <img className='rounded-full mx-auto h-52 w-52 md:h-96 md:w-96' src={avatar} alt="imagen de un avatar"  />
            <div className='text-center text-xl md:text-left'>
                <h3 className='text-2xl text-blue-500 my-5'>Desarrollador Web</h3>
                <p>
                    Mi nombre es David Adame Soto, soy egresado del Instituto Tecnológico de Durango.
                </p>
                <div className='text-xl my-10'>
                    <div className='flex items-center gap-2'>
                        <MdArrowForwardIos className='text-blue-500' />
                        <p className='font-semibold'>Correo: <span className='font-normal'>david.adame.itd@gmail.com</span></p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <MdArrowForwardIos className='text-blue-500' />
                        <p className='font-semibold'>Teléfono: <span className='font-normal'>6182562148</span></p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <MdArrowForwardIos className='text-blue-500' />
                        <p className='font-semibold'>Carrera: <span className='font-normal'>Ing.Informática </span></p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <MdArrowForwardIos className='text-blue-500' />
                        <p className='font-semibold'>Ciudad: <span className='font-normal'>Durango, Dgo.</span></p>
                    </div>
                </div>
                <p>
                    Como Ing. Informático formado para el análisis y la toma de decisiones tengo experiencia en desarrollo de software, buenas prácticas, uso de metodologías ágiles, redacción y capacidad de adaptación.
                </p>
                <p className='my-5'>
                    De fácil trato, actitud franca y respetuosa, establezco nexos laborales cordiales, proclives a crear un ambiente de trabajo productivo y comprometido con los objetivos de la empresa.
                </p>
                        
                <div className='text-center flex flex-col my-10 md:flex-row md:gap-x-10 '>
                    <div className='mx-auto  text-blue-400 md:mx-0'>
                        <div className='flex flex-row items-center'>
                            <GiNotebook size={100} className="" />
                            <p className='text-6xl'>+32</p>
                        </div>
                        <p className='text-2xl mt-2'>Proyectos</p>
                    </div>
                    <div className='mx-auto my-10  text-blue-400 md:mx-0 md:my-0'>
                        <div className='flex flex-row items-center'>
                            <BsFillStopwatchFill size={90} className="" />
                            <p className='text-6xl'>+500</p>
                        </div>
                        <p className='text-2xl mt-2'>Horas de trabajo</p>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Acercade