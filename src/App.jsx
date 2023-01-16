import {useState, useEffect} from 'react'
import Header from "./components/Header"; 
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
          
     //useState del listado de pacientes
    const [pacientes, setPacientes] = useState([]);

    //useState del paciente
    const [paciente, setPaciente] = useState({});


    //guardar el localStorage  
      useEffect(() => {
        const obtenerLS = () => {
                      //JSON.parce() conversor de un arreglo a string     //?? [] agrega un arreglo vacio
          const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
          setPacientes(pacientesLS)
        }
        obtenerLS();
      }, []);  // el arreglo va vacio para que se ejecute una sola vez   



      useEffect(() => {
        localStorage.setItem('pacientes', JSON.stringify( pacientes ));
      }, [pacientes]);

    

    //eliminar paciente
    const eliminarPaciente = (id) => { //.filter no modifica el arreglo original
      const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
      setPacientes(pacientesActualizados)

    }

    

  
  return (

     <div className="container mx-auto mt-20">

         <Header                 
         />

         <div className="mt-12 md:flex">
         <Formulario

              pacientes= {pacientes}
              setPacientes= {setPacientes} 
              paciente= {paciente} 
              setPaciente= {setPaciente}        
         /> 

         <ListadoPacientes
              pacientes= {pacientes}
              setPaciente={setPaciente}
              eliminarPaciente = {eliminarPaciente}
         />

         </div>
                 
     </div>
   )
}

export default App;
