import React, {useState} from 'react'
import {Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone, faEnvelope, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
function Footer(props){
    let iconStyle = {
        "color":"#1c8e96",
    }
 return (
     
         <Row className="footer mt-5" >
             <Col md={4} className="mt-2"><h6>Nuestros servicios</h6></Col>
             <Col  md={4} className="mt-2"><h6>Contactanos</h6></Col>
             <Col  md={4} className="mt-2"><h6>Siguenos en redes</h6></Col>
         </Row>
 )
}
export default Footer;