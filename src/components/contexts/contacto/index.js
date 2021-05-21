import React, {useState} from 'react'
import MenuContacto from './../../widgets/menuContacto'
import Menu from './../../widgets/menu'
import {Container} from 'react-bootstrap'
import Serviciou from './../../widgets/producto'
import Footer from './../../widgets/footer'
import Contact from './../../widgets/contact'
function Contacto(props){
    const id = props.match.params.id;
    return(
        <Container fluid className="main-container">
        <MenuContacto />
        <Menu />
        <Contact />
        <Footer />
        </Container>
        
    )
}
export default Contacto;