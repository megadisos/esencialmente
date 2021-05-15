import React, {useState} from 'react'
import MenuContacto from './../../widgets/menuContacto'
import Menu from './../../widgets/menu'
import Portada from './../../widgets/portada'
import {Container} from 'react-bootstrap'
import Nuestros from './../../widgets/nuestros'
import Agenda from './../../widgets/agendamiento'
import Footer from './../../widgets/footer'
import Cafe from './../../widgets/cafe'
function Home(props){
    return(
        <Container fluid className="main-container">
        <MenuContacto />
        <Menu />
        <Portada />
        <Nuestros />
        <Cafe />
        <Agenda />
        <Footer />
        </Container>
        
    )
}
export default Home;
