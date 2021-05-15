import React, {useContext, useState} from 'react'
import {Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone, faEnvelope, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import {mycontext} from './../../../App'
function MenuContacto(props){
    let iconStyle = {
        "color":"#1c8e96",
    }
    const {informacion} = useContext(mycontext);
    const [info] = informacion;
    console.log(info);
 return (
     
         <Row className="menuContacto justify-content-md-center" >
             <Col md={4} ><FontAwesomeIcon icon={faPhone} style={iconStyle}/> {info.id}</Col>
             <Col  md={4}><FontAwesomeIcon icon={faEnvelope} style={iconStyle}/>{info.correo}</Col>
             <Col  md={4}><FontAwesomeIcon icon={faMapMarkerAlt} style={iconStyle}/>{info.numero}</Col>
         </Row>
 )
}
export default MenuContacto;