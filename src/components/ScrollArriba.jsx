import React, {useState, useEffect} from 'react'
import {BsFillArrowUpCircleFill} from 'react-icons/bs'


const ScrollArriba = () => {

  
   const [mostrarTopBoton , setMostrarTopBoton] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 300){
                setMostrarTopBoton(true);
            }else{
                setMostrarTopBoton(false);
               
            }
        });
       
    }, []);

    const scrollTop = () =>{
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
      }

  return (
      <div>
          {mostrarTopBoton && (
                <BsFillArrowUpCircleFill 
                    onClick={scrollTop} 
                    size={35}
                    className='md:fixed bottom-3 right-10 text-blue-600 cursor-pointer bg-white rounded-full'
                   
                />
              
            )
           }
     </div>

  )
}

export default ScrollArriba