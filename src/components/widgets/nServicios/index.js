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
      <Col md={4} className="mt-3"><a href="https://master.d2p0wcikpkc50a.amplifyapp.com/servicio"><Servicio width="300" height="300"/></a></Col>
      <Col md={4} className="mt-3"><a href="https://master.d2p0wcikpkc50a.amplifyapp.com/servicio"><Servicio width="300" height="300"/></a></Col>
      <Col md={4} className="mt-3"><a href="https://master.d2p0wcikpkc50a.amplifyapp.com/servicio"><Servicio width="300" height="300"/></a></Col>
      
    </Row>
   
    </Container>
    )
}
export default Nuestros;