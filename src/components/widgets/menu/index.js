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
      <Nav.Link href="https://master.d2p0wcikpkc50a.amplifyapp.com" style={menuSelected} >Inicio</Nav.Link>
      <NavDropdown style={menuStyle} title="Nuestros Servicios" id="collasible-nav-dropdown" >
        <NavDropdown.Item href="https://master.d2p0wcikpkc50a.amplifyapp.com/servicio" style={menuStyle}>Servicio 1</NavDropdown.Item>
        <NavDropdown.Item href="https://master.d2p0wcikpkc50a.amplifyapp.com/servicio" style={menuStyle}>Servicio 2</NavDropdown.Item>
        <NavDropdown.Item href="https://master.d2p0wcikpkc50a.amplifyapp.com/servicio" style={menuStyle}>Servicio 3</NavDropdown.Item>
        <NavDropdown.Item href="https://master.d2p0wcikpkc50a.amplifyapp.com/servicio" style={menuStyle}>Servicio 4</NavDropdown.Item>
        <NavDropdown.Item href="https://master.d2p0wcikpkc50a.amplifyapp.com/servicio" style={menuStyle}>Servicio 5</NavDropdown.Item>
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