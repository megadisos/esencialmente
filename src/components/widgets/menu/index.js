import React, {useState} from 'react'
import {Row, Navbar,Nav,Col,NavDropdown} from 'react-bootstrap'
import Logo from './../logo'
function Menu(props){
    let menuStyle = {
        "color":"#1c8e96",
        "font-size": "20px",
        "font-weight": "bold",
        "margin-right": "10px",
        "background-color":"#dadada"
    }
    let menuSelected = {
        "color":"#dadada",
        "font-size": "20px",
        "font-weight": "bold",
        "margin-right": "10px",
        "background-color": "#13b6cb",
    }

    return(
        <Row className="menu mt-4">
            <Col>
            <Navbar  className="nav-menu"  expand="lg">
  <Navbar.Brand href="#home" className="mr-3"><Logo width="150" height="50"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home" style={menuSelected} >Inicio</Nav.Link>
      <NavDropdown style={menuStyle} title="Nuestros Servicios" id="collasible-nav-dropdown" >
        <NavDropdown.Item href="#" style={menuStyle}>Terapia de Pareja y Familiar</NavDropdown.Item>
        <NavDropdown.Item href="#" style={menuStyle}>Terapia Psicológica de Niños, Niñas, y Adolescentes.</NavDropdown.Item>
        <NavDropdown.Item href="#" style={menuStyle}>Atención Integral para la Vejez</NavDropdown.Item>
        <NavDropdown.Item href="#" style={menuStyle}>Terapia Sexual</NavDropdown.Item>
        <NavDropdown.Item href="#" style={menuStyle}>Apoyo en el Proceso de Elaboración de duelo</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#link" style={menuStyle} >Quienes Somos</Nav.Link>
      <Nav.Link href="#link" style={menuStyle} >Contacto</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
            </Col>
        </Row>
    )
}
export default Menu;