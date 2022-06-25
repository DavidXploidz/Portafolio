import React, { useState } from 'react'
import Spinner from './Spinner'
import usePortafolio from '../hooks/usePortafolio'
import {MdLocationPin, MdEmail, MdOutlinePhoneIphone} from 'react-icons/md'
import {BsShareFill, BsGithub, BsLinkedin, BsInstagram} from 'react-icons/bs'

const Contacto = () => {

    const { contacto, mostrarSpinner, setMostrarSpinner} = usePortafolio()

    const [datos, setDatos] = useState({nombre: '',correo: '', asunto: '', mensaje: ''})
    const [alerta, setAlerta] = useState('')
   

    const handleSubmit = (e) => {
        e.preventDefault()
        if(Object.values(datos).includes('')){
            setAlerta('Todos los campos son obligatorios')
            setTimeout(() => {
                setAlerta('')
            },3000)
            return
        }
        setMostrarSpinner(true)
        setTimeout(() => {
            setMostrarSpinner(false)
            setDatos({nombre: '',correo: '', asunto: '', mensaje: ''})
            e.target.reset()
        },2000)
        
       
    }



  return (
    <section ref={contacto} className="contenedor">
          <h2 className='flex flex-col text-center text-4xl  '>Contacto <span className='block mx-auto mt-1 text-center border-solid border-b-2 border-blue-500 w-1/3'></span></h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 text-2xl text-center my-5 '>
              <div className='flex flex-col justify-center items-center p-5 bg-blue-200 ' >
                  <MdLocationPin size={40} className="text-blue-900"/>
                  <p className='text-blue-700 '>Ciudad: <span className='block text-black'>Durango, Dgo. Mexico</span></p>
              </div>
              <div className='flex flex-col justify-center items-center p-5 bg-blue-200 ' >
                  <BsShareFill size={40} className="text-blue-900"/>
                  <div className='text-blue-700 '>Redes Sociales: 
                      <p className='block text-black'>
                          <span className='flex gap-x-5 mt-2'>
                              <a href="https://github.com/DavidXploidz" target='_blank'><BsGithub /></a>
                              <a href="https://www.linkedin.com/in/david-adame-soto-46ab9a207/" target='_blank'><BsLinkedin /></a>
                              <a href="https://www.instagram.com/david.adame.ksk/" target='_blank'><BsInstagram /></a>
                          </span>
                          
                      </p>
                  </div>
              </div>
              <div className='flex flex-col justify-center items-center p-5 bg-blue-200 ' >
                  <MdEmail size={40} className="text-blue-900"/>
                  <p className='text-blue-700 '>Correo: <span className='block text-black'>david.adame.itd@gmail.com</span></p>
              </div>
              <div className='flex flex-col justify-center items-center p-5 bg-blue-200 ' >
                  <MdOutlinePhoneIphone size={40} className="text-blue-900"/>
                  <p className='text-blue-700 '>Teléfono: <span className='block text-black'>6182562148</span></p>
              </div>
          </div>{/**Fin div de grid icons */}
          <form className='grid grid-cols-1 p-5 gap-2 bg-blue-200 text-2xl mb-10' onSubmit={handleSubmit}>
              {alerta && <p className='text-center text-white bg-red-600 p-2'>{alerta}</p>}
              {mostrarSpinner && (
                <Spinner />
              ) }

                <input type="text" name='nombre' value={datos.nombre} placeholder='Tu Nombre' className='p-2' 
                onChange={e => setDatos({
                        ...datos,
                        [e.target.name] : e.target.value
                })} />

                <input type="email" name='correo' value={datos.correo}  placeholder='Tu Correo electrónico' className='p-2'
                onChange={e => setDatos({
                    ...datos,
                    [e.target.name] : e.target.value
                })} />
                <input type="text" name='asunto' value={datos.asunto} placeholder='Asunto' className='p-2'
                 onChange={e => setDatos({
                    ...datos,
                    [e.target.name] : e.target.value
                })} />
                <textarea placeholder='Mensaje' className='p-2' name='mensaje' value={datos.mensaje}
                 onChange={e => setDatos({
                    ...datos,
                    [e.target.name] : e.target.value
                })} >

                </textarea>
                <input type="submit" value="Enviar" className='w-full md:w-72 p-2 bg-blue-500 cursor-pointer text-white hover:bg-blue-600 duration-300' />
          </form>
    </section>
  )
}

export default Contacto