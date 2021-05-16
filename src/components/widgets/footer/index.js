import React, {useState,useContext} from 'react'
import {Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone, faEnvelope, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import {mycontext} from './../../../App'
function Footer(props){
    let iconStyle = {
        "color":"#1c8e96",
    }
const {informacion,servicios} = useContext(mycontext);
const [info] = informacion;
const [serv] = servicios;
 return (
     
         <Row className="footer mt-5" >
             <Col md={4} className="mt-2">
                 <h6>Nuestros servicios</h6>
                 {serv && serv.map(sr=>{
                     return(
                        <p>{sr.titulo}</p>
                     )
                 })}
                 </Col>
             <Col  md={4} className="mt-2">
                 <h6>Contactanos</h6>
                 <p>{info[0] && info[0].numero}</p>
                 <p>{info[0] && info[0].correo}</p>
                 <p>{info[0] && info[0].direccion}</p>
                 </Col>
             <Col  md={4} className="mt-2">
                 <h6>Siguenos en redes</h6>
                 <p><a href={info[0] && info[0].facebook}>facebook</a></p>
                 <p><a href={info[0] && info[0].instagram}>instagram</a></p>
                 <p><a href={info[0] && info[0].twitter}>twitter</a></p>
                 </Col>
         </Row>
 )
}
export default Footer;