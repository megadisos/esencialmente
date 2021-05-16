import React, {useState} from 'react'
import {Image} from 'react-bootstrap'
import servicio from './../../../images/servicio.jpg'
function Servicio(props){
    let size = props.width 
    let sizeText = {
        "width" : "500",
    }
    return(
        <div className="container" >
      <Image src={props.src} className="servicio" width={props.width} height={props.height}/>
      <div class="centered" style={sizeText}>{props.title}</div>
      </div>
    )
}
export default Servicio;