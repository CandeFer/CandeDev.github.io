import Navbar from './Componentes/navbar/navbar'
import Estudio from './Componentes/estudios/estudios'
import Portada from './Componentes/portada/portada'
import SobreMi from './Componentes/sobremi/sobremi'
import Habilidades from './Componentes/habilidades/habilidades'
import Proyectos from './Componentes/proyectos/proyectos'
import Servicios from './Componentes/Servicios/servicios'
import Contacto from './Componentes/contacto/contacto'
import { ContextoProvider } from '../src/Context/context'
import Experiencia from './Componentes/Experiencia/experiencia'

function App() {

 
 
  return (
    <>
      <ContextoProvider>
        <header>
          <Navbar />
        </header>
          <Portada />
          <SobreMi />
          <Estudio />
          <Habilidades />
          <Proyectos />
          <Experiencia />
          <Servicios />
          <Contacto />
      </ContextoProvider>

    </>
  )
}

export default App
