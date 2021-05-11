import React, {useState} from 'react'
import {Image, Row, Container,Col} from 'react-bootstrap'
import Servicio from './../servicio'
function Nuestros(props){
    return(
        <Container>
      <Row className="mt-4 titulo">
          <Col><h1>Nuestros Servicios</h1></Col>
      </Row>
      <hr />
      
      <Row className="mt-2 nuestros"> 
      <Col md={4} className="mt-3"><Servicio width="300" height="300"/></Col>
      <Col md={4} className="mt-3"><Servicio width="300" height="300"/></Col>
      <Col md={4} className="mt-3"><Servicio width="300" height="300"/></Col>
      
    </Row>
   
    </Container>
    )
}
export default Nuestros;