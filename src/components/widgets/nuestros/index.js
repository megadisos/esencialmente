import React, {useState,useContext} from 'react'
import {Image, Row, Container,Col} from 'react-bootstrap'
import Servicio from '../servicio'
import {mycontext} from './../../../App'
function Nuestros(props){
    const {servicios} = useContext(mycontext);
    const [serv] = servicios;
    return(
        <Container>
      <Row className="mt-4 titulo">
          <Col><h1>Nuestros Servicios</h1></Col>
      </Row>
      <hr />
      
      <Row className="mt-2 nuestros"> 
      {serv && serv.map(sr=>{
          return (
            <Col md={4} className="mt-3"><a href=""><Servicio width="300" height="300" src={sr.get_path} title={sr.titulo}/></a></Col>
          )
      })}

    </Row>
   
    </Container>
    )
}
export default Nuestros;