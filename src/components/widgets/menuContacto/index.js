import React, {useState} from 'react'
import {Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone, faEnvelope, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
function MenuContacto(props){
    let iconStyle = {
        "color":"#1c8e96",
    }
 return (
     
         <Row className="menuContacto justify-content-md-center" >
             <Col md={4} ><FontAwesomeIcon icon={faPhone} style={iconStyle}/> 3214040067</Col>
             <Col  md={4}><FontAwesomeIcon icon={faEnvelope} style={iconStyle}/> consultorioesencialmente@gmail.com</Col>
             <Col  md={4}><FontAwesomeIcon icon={faMapMarkerAlt} style={iconStyle}/> Carrera 21A No 45A- 70</Col>
         </Row>
 )
}
export default MenuContacto;