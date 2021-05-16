import React, {useState,useContext} from 'react'
import {Image, Jumbotron, Container, Button} from 'react-bootstrap'
import portada from './../../../images/portada.jpg'
import {mycontext} from './../../../App'
function Portada(props){
  const {portada} = useContext(mycontext);
  const [port] = portada;
  return(
    <a href={port[0] && port[0].link} >
      <Image src={port[0] && port[0].get_path} className="portada" />
      </a>
    )
}
export default Portada;
