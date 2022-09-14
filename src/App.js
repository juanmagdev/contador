import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import logo from './images/logo.png';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);  //0 val inicial numClics

  const manejarClic = () => {
    setNumClics(numClics+1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={logo}
          alt='Logo freecodecamp'/>
      </div>
      <div className='contenedor-principal'>

        <Contador numeroClics={ numClics }>
        </Contador>
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}>
        </Boton>

        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}>
        </Boton>
      </div>  
    </div>
  );
}

export default App;
