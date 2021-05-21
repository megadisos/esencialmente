import React, {useState,useContext} from 'react'
import {Image, Row, Container,Col} from 'react-bootstrap'
import {mycontext} from './../../../App'
import mision from './../../../images/goal.png'
import vision from './../../../images/increase.png'
import logo from './../../../images/Logo.png'
import mapa from './../../../images/mapa.png'
import comunicar from './../../../images/comunicar.png'
import redes from './../../../images/red.png'
import face from './../../../images/facebook.png'
import insta from './../../../images/instagram.png'
import twit from './../../../images/gorjeo.png'
function Contact(props){
    const {informacion,servicios} = useContext(mycontext);
    const [info] = informacion;
    const mystyle = {
        "font-size":"20px",
        "text-align":"center"
    }
    const sizeEmbed = {
        "width":"50%"
        
    }
    const {invitacion} = useContext(mycontext);
    const [inv] = invitacion;
    return(
        <Container className="mb-5" fluid>
       <Row className="mt-5"> 
      <Col><h1><Image src={comunicar} width="80" height="80" fluid/> Contactanos</h1></Col>
    </Row>
      <Row className="mt-5"> 
      <Col><h2><Image src={mapa} width="40" height="40" fluid/> Donde encontrarnos</h2></Col>
    </Row>
    <Row className="mt-5"> 
      <Col>
      <center><div style={sizeEmbed}><iframe scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Carrera%2021A%20No%2045A-%2070+(Esencialmente)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="600" frameborder="0"></iframe></div></center>
      </Col>
    </Row>
    <Row className="mt-5"> 
      <Col><h2><Image src={redes} width="40" height="40" fluid/> Redes</h2></Col>
    </Row>
    <Row> 
      <Col><p><a href={info[0] && info[0].facebook}><Image src={face} width="40" height="40" fluid/>  {info[0] && info[0].facebook}</a></p>
                 <p><a href={info[0] && info[0].instagram}><Image src={insta} width="40" height="40" fluid/>  {info[0] && info[0].instagram}</a></p>
                 <p><a href={info[0] && info[0].twitter}><Image src={twit} width="40" height="40" fluid/>  {info[0] && info[0].twitter}</a></p></Col>
    </Row >

   
    </Container>
    )
}
export default Contact;