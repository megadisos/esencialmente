import React, {useState,useContext} from 'react'
import {Image, Row, Container,Col} from 'react-bootstrap'
import {mycontext} from './../../../App'
import mision from './../../../images/goal.png'
import vision from './../../../images/increase.png'
import logo from './../../../images/Logo.png'
import ofi1 from './../../../images/ofi1.jpg'
import ofi2 from './../../../images/ofi2.jpg'
import ofi3 from './../../../images/ofi3.jpg'
import ofi5 from './../../../images/ofi5.jpg'
import ofi6 from './../../../images/ofi6.jpg'
import ofi7 from './../../../images/ofi7.jpg'
import ofi8 from './../../../images/ofi8.jpg'
import sofa from './../../../images/sofa.png'
function Quienes(props){
    const mystyle = {
        "font-size":"20px",
        "text-align":"center"
    }
    const {invitacion} = useContext(mycontext);
    const [inv] = invitacion;
    return(
        <Container className="mb-5" fluid>
       <Row className="mt-5"> 
      <Col><h1><Image src={logo} width="80" height="80" fluid/> Quienes somos</h1></Col>
    </Row>
      <Row className="mt-5"> 
      <Col><h2><Image src={vision} width="40" height="40" fluid/> Vision</h2></Col>
    </Row>
    <Row> 
      <Col><p style={mystyle}>Nuestra visión es ser un centro de atención psicosocial alternativo, con una gran calidez
humana, que sea reconocido por la sociedad y ser líderes en el desarrollo integral de las
personas, familias y organizaciones, ya que creemos que trabajar desde el amor y la confianza
son herramientas primordiales para el fortalecimiento de un tejido social en armonía.</p></Col>
    </Row>
    <Row className="mt-5"> 
      <Col><h2><Image src={mision} width="40" height="40" fluid/> Mision</h2></Col>
    </Row>
    <Row> 
      <Col><p style={mystyle}>Nuestro Consultorio Psicosocial Esencialmente es un centro de atención que
brinda un servicio profesional de calidad y oportuno. Tiene como finalidad
favorecer el bienestar de tu salud mental. Somos un equipo interdisciplinar
conformado por profesionales de las áreas de Psicología y Trabajo social, los
cuales brindan un apoyo humano y tienen una gran vocación social y amor por
su profesión. Estamos disponibles para ayudar y atender a las necesidades
que constituyen cualquier aspecto de la vida de una persona en su ámbito
psicológico, personal, familiar, laboral y/o social.</p></Col>
    </Row >
    <Row className="mt-5"> 
      <Col><h2><Image src={sofa} width="40" height="40" fluid/> Nuestra oficina</h2></Col>
    </Row>
    <Row className="mt-2"> 
    <Col md={4} className="mt-2"><Image src={ofi2}  fluid/></Col>
      <Col md={4} className="mt-2"><Image src={ofi6}  fluid/></Col>
      <Col md={4} className="mt-2"><Image src={ofi7}  fluid/></Col>
    </Row>
    <Row className="mt-2 "> 
      <Col md={3} className="mt-2"><Image src={ofi1}    fluid/></Col>
      <Col md={3} className="mt-2"><Image src={ofi8}     fluid/></Col>
      <Col md={3} className="mt-2"><Image src={ofi3}    fluid/></Col>
      <Col md={3} className="mt-2"><Image src={ofi5}    fluid/></Col>
    </Row>
   
    </Container>
    )
}
export default Quienes;