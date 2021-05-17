import React, {useState,useContext} from 'react'
import {Container, Image, Row, Col, Button} from 'react-bootstrap'
import servicio from './../../../images/servicio.jpg'
import {mycontext} from './../../../App'
function Serviciou(props){
    const {servicios} = useContext(mycontext);
    const [serv] = servicios;
    const id = props.pid;
    let size = props.width 
    let sizeText = {
        "width" : "500",
    }
    return(
        <Container className="uservicio">
            {serv && serv.filter(sr => sr.id === id).map(ser => {
                 <Row className="mb-3 mt-2">
                 <Col md={12}><h1>{ser.titulo}</h1></Col>
           
         <hr></hr>
                 </Row>
            })}
            {serv && serv.filter(sr => sr.id === id).map(ser => {
                <Row>
                <Col md={4}><Image src={ser.get_path} width="400" height="400"/></Col>
                <Col md={8}>
                    <Row className="mt-2">
                        <Col><h3>Descripcion</h3></Col>
                    </Row>
                    <Row>
                        <Col><p>{ser.descripcion}</p></Col>
                    </Row>
                    <Row className="mt-2">
                        <Col><Button id="modalButton">Solicitar cita</Button></Col>
                    </Row>
                </Col>
            </Row>
            })}
          
        </Container>
    )
}
export default Serviciou;