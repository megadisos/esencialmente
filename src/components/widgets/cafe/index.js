import React, {useState} from 'react'
import {Image, Row, Container,Col} from 'react-bootstrap'
import Servicio from '../servicio'
import Estacion from './../../../images/estacion.jpg'
function Cafe(props){
    return(
        <Container className="invitacion mt-5" fluid>
      
      <Row > 
      <Col md={6} className="mt-3"><Image src={Estacion}  className="mt-2 infoimg"/></Col>
      <Col md={6} className="mt-3">
          <h4 className="mt-3">Estacion Cafe</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed turpis ut libero rhoncus porta. Aenean nec ante libero. Praesent ornare ornare vestibulum. Nullam ac volutpat nunc. Integer tellus turpis, mollis ac leo at, vulputate convallis lorem. Cras accumsan, arcu id dapibus volutpat, sapien odio laoreet metus, eu tempus purus tellus et tortor. Suspendisse libero arcu, luctus id enim in, placerat vestibulum ex.</p>
      </Col>
      
      
    </Row>
   
    </Container>
    )
}
export default Cafe;