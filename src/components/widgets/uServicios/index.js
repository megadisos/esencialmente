import React, {useState} from 'react'
import {Container, Image, Row, Col, Button} from 'react-bootstrap'
import servicio from './../../../images/servicio.jpg'
function Serviciou(props){
    let size = props.width 
    let sizeText = {
        "width" : "500",
    }
    return(
        <Container className="uservicio">
            <Row className="mb-3 mt-2">
                <Col md={12}><h1>Terapia de Pareja y Familiar</h1></Col>
                <hr></hr>
            </Row>
            <Row>
                <Col md={4}><Image src={servicio} width="400" height="400"/></Col>
                <Col md={8}>
                    <Row className="mt-2">
                        <Col><h3>Descripcion</h3></Col>
                    </Row>
                    <Row>
                        <Col><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mauris nisl, ullamcorper a eros quis, convallis facilisis risus. Praesent in semper lorem, non pretium augue. Nullam iaculis nulla risus, feugiat finibus diam bibendum vel. Aenean facilisis sem tellus. Pellentesque sagittis, quam non pretium varius, diam neque pellentesque ipsum, porttitor pretium leo ipsum sed quam. Quisque in congue risus, vitae lobortis lacus. Morbi ultrices odio finibus libero elementum, at dictum elit tristique.</p></Col>
                    </Row>
                    <Row className="mt-2">
                        <Col><Button id="modalButton">Solicitar cita</Button></Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
export default Serviciou;