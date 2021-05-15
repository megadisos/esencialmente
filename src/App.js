import logo from './logo.svg';
import './App.css';
import Routing from './components/routing';
import React, {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
export const mycontext = React.createContext();
function App() {
  const [servicios, setServicios] = useState([]);
  const [informacion, setInformacion] = useState([]);
  const [invitacion, setInvitacion] = useState([]);
  const [portada, setPortada] = useState([]);
  useEffect(() => {
    fetch("https://www.nabtastore.com.co/api-ese/Servicios/",{
      method: 'GET',
      headers: {
        'Content-Type':'application/json',
        'Authorization': `Token 427bd7635e8f0a0cf4c5b8317e9615044e344e92`
      }
    })
    .then( resp => resp.json())
    .then( resp => setServicios(resp))
    .catch( error => console.log(error))
    .then( resp => console.log(resp))
 fetch("https://www.nabtastore.com.co/api-ese/Informacion/",{
           method: 'GET',
           headers: {
             'Content-Type':'application/json',
             'Authorization': `Token 427bd7635e8f0a0cf4c5b8317e9615044e344e92`
           }
         })
         .then( resp => resp.json())
         .then( resp => setInformacion(resp))
         .catch( error => console.log(error))
         .then( resp => console.log(resp))
 fetch("https://www.nabtastore.com.co/api-ese/Invitacion/",{
                     method: 'GET',
                     headers: {
                       'Content-Type':'application/json',
                       'Authorization': `Token 427bd7635e8f0a0cf4c5b8317e9615044e344e92`
                     }
                   })
                   .then( resp => resp.json())
                   .then( resp => setInvitacion(resp))
                   .catch( error => console.log(error))
                   .then( resp => console.log("ESTA ES LA RESPUESTA DEL CATI" + resp))
 fetch("https://www.nabtastore.com.co/api-ese/Portada/",{
                     method: 'GET',
                     headers: {
                       'Content-Type':'application/json',
                       'Authorization': `Token 427bd7635e8f0a0cf4c5b8317e9615044e344e92`
                     }
                   })
                   .then( resp => resp.json())
                   .then( resp => setPortada(resp))
                   .catch( error => console.log(error))
                   .then( resp => console.log(resp))                 
  }, [])
  return (
    <mycontext.Provider value={{servicios: [servicios,setServicios],informacion: [informacion,setInformacion],invitacion:[invitacion, setInvitacion],portada: [portada,setPortada]}}>
    <div className="App">
      <Routing />
    </div>
    </mycontext.Provider>
  );
}

export default App;
