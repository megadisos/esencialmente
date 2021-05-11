import React, {useState} from 'react'
import MenuContacto from './../../widgets/menuContacto'
import Menu from './../../widgets/menu'
import Portada from './../../widgets/portada'
import {Container} from 'react-bootstrap'
import Nuestros from './../../widgets/nServicios'
import Agenda from './../../widgets/agendamiento'
import Footer from './../../widgets/footer'
function Home(props){
    return(
        <Container fluid className="main-container">
        <MenuContacto />
        <Menu />
        <Portada />
        <Nuestros />
        <Agenda />
        <Footer />
        </Container>
        
    )
}
export default Home;
