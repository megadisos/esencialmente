import React, {useState} from 'react'
import {Image, Jumbotron, Container, Button} from 'react-bootstrap'
import portada from './../../../images/portada.jpg'
function Portada(props){
    return(
      <Image src={portada} className="portada" />
    )
}
export default Portada;
