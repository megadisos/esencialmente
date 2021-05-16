import React, {useState} from 'react'
import {Image} from 'react-bootstrap'
import logo from './../../../images/Logo.png'
import {mycontext} from './../../../App'
function Logo(props){
    const {informacion} = useContext(mycontext);
    const [info] = informacion;
    return(
        <Image src={info[0] && info[0].get_path} width={props.width} height={props.height} fluid />
    )
}
export default Logo;
