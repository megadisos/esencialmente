import React, {useState} from 'react'
import MenuContacto from './../../widgets/menuContacto'
import Menu from './../../widgets/menu'
import {Container} from 'react-bootstrap'
import Serviciou from './../../widgets/uServicios'
import Footer from './../../widgets/footer'
function Servicios(props){
    return(
        <Container fluid className="main-container">
        <MenuContacto />
        <Menu />
        <Serviciou />
        <Footer />
        </Container>
        
    )
}
export default Servicios;
