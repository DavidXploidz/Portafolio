import { createContext } from "react";
import { useState, useRef } from "react";

const PortafolioContext = createContext()

const PortafolioProvider = ({children}) => {

    const inicio = useRef(null);
    const about = useRef(null);
    const proyectos = useRef(null);
    const experiencia = useRef(null);
    const contacto = useRef(null);

    const [mostrarMenu, setMostrarMenu] = useState(false)
    const [mostrarSpinner, setMostrarSpinner] = useState(false)

    const scrollToSection = (elementRef) =>{
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth"
            })
        }

    return(
        <PortafolioContext.Provider 
            value={{
                mostrarMenu,
                setMostrarMenu,
                scrollToSection,
                inicio,
                about,
                proyectos,
                experiencia,
                contacto,
                mostrarSpinner,
                setMostrarSpinner
            }} 
        >
            {children}
        </PortafolioContext.Provider>
    )
}



export {
    PortafolioProvider
}

export default PortafolioContext