import React, {useState} from 'react'
import MenuContacto from './../../widgets/menuContacto'
import Menu from './../../widgets/menu'
import {Container} from 'react-bootstrap'
import Serviciou from './../../widgets/producto'
import Footer from './../../widgets/footer'
import Quienes from './../../widgets/acerca'
function Acerca(props){
    const id = props.match.params.id;
    return(
        <Container fluid className="main-container">
        <MenuContacto />
        <Menu />
        <Quienes />
        <Footer />
        </Container>
        
    )
}
export default Acerca;