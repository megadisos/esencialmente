import React, {useState} from 'react'
import MenuContacto from './../../widgets/menuContacto'
import Menu from './../../widgets/menu'
import {Container} from 'react-bootstrap'
import Serviciou from './../../widgets/producto'
import Footer from './../../widgets/footer'
import  { useHistory } from 'react-router-dom'
function Servicios(props){
    let history = useHistory()
    const id = props.match.params.id;
    const irServicios = (id, titulo) =>{
        let nTitulo = titulo.replaceAll(" ","-").replaceAll(",","-").replaceAll(".","-").replaceAll("","");
        history.push(`/${id}/${nTitulo}`);
    }
    return(
        <Container fluid className="main-container">
        <MenuContacto />
        <Menu irServicios={irServicios}/>
        <Serviciou pid={id}/>
        <Footer />
        </Container>
        
    )
}
export default Servicios;
