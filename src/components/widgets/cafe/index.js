import React, {useState,useContext} from 'react'
import {Image, Row, Container,Col} from 'react-bootstrap'
import Servicio from '../servicio'
import Estacion from './../../../images/estacion.jpg'
import {mycontext} from './../../../App'
function Cafe(props){
    const {invitacion} = useContext(mycontext);
    const [inv] = invitacion;
    return(
        <Container className="invitacion mt-5" fluid>
      
      <Row > 
      <Col md={6} className="mt-3"><Image src={inv[0] && inv[0].get_path}  className="mt-2 infoimg"/></Col>
      <Col md={6} className="mt-3">
          <h4 className="mt-3">{inv[0] && inv[0].titulo} </h4>
            <p>{inv[0] && inv[0].descripcion}</p>
      </Col>
      
      
    </Row>
   
    </Container>
    )
}
export default Cafe;