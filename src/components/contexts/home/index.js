import React, {useState} from 'react'
import MenuContacto from './../../widgets/menuContacto'
import Menu from './../../widgets/menu'
import Portada from './../../widgets/portada'
import {Container} from 'react-bootstrap'
import Nuestros from './../../widgets/nuestros'
import Agenda from './../../widgets/agendamiento'
import Footer from './../../widgets/footer'
import Cafe from './../../widgets/cafe'
import  { useHistory } from 'react-router-dom'
function Home(props){
    let history = useHistory()
    const irServicios = (id, titulo) =>{
        let nTitulo = titulo.replaceAll(" ","-").replaceAll(",","-").replaceAll(".","-").replaceAll("","");
        history.push(`/${id}/${nTitulo}`);
    }
    return(
        <Container fluid className="main-container">
        <MenuContacto />
        <Menu irServicios={irServicios}/>
        <Portada />
        <Nuestros irServicios={irServicios}/>
        <Cafe />
        <Agenda />
        <Footer />
        </Container>
        
    )
}
export default Home;
