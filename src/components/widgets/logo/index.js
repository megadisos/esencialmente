import React, {useState} from 'react'
import {Image} from 'react-bootstrap'
import logo from './../../../images/Logo.png'
function Logo(props){
    return(
        <Image src={logo} width={props.width} height={props.height} fluid />
    )
}
export default Logo;
