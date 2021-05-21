import React, {useState} from 'react'
import MenuContacto from './../../widgets/menuContacto'
import Menu from './../../widgets/menu'
import {Container} from 'react-bootstrap'
import Serviciou from './../../widgets/producto'
import Footer from './../../widgets/footer'
import Contact from './../../widgets/contact'
import  { useHistory } from 'react-router-dom'
function Contacto(props){
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
        <Contact />
        <Footer />
        </Container>
        
    )
}
export default Contacto;