import PROYECTOS from './dataProyectos'
import usePortafolio from '../hooks/usePortafolio'


const Proyectos = () => {

const { proyectos} = usePortafolio()

  return (
    <section ref={proyectos} className="contenedor md:h-screen">
       <h2 className='flex flex-col text-center text-4xl mb-10  '>Proyectos<span className='block mx-auto mt-1 text-center border-solid border-b-2 border-blue-500 w-1/3'></span></h2>
       <div className='grid grid-cols-1 md:grid-cols-3 md:gap-x-10'>
        {PROYECTOS.map(proyecto => (
                <article className='text-center' key={proyecto.id}>
                    <p className='text-2xl font-semibold mb-3 capitalize'>{proyecto.titulo}</p>
                    <img  src={proyecto.imagen} alt={`Imagen de ${proyecto.titulo}`} className=" mx-auto h-40 w-72 md:w-full md:h-60" />
                    <p className='text-xl my-5'>({proyecto.descripcion})</p>
                    <button className='mx-auto p-2 mb-5 bg-blue-500 text-white cursor-pointer hover:bg-blue-600'><a href={proyecto.enlace} target="_blank">Ver Proyecto </a></button>
                </article>
        ))}
       </div>
       
    </section>
  )
}

export default Proyectos