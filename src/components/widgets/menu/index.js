import React, {useState,useContext} from 'react'
import {Row, Navbar,Nav,Col,NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Logo from './../logo'
import {mycontext} from './../../../App'
function Menu(props){
    let menuStyle = {
        "color":"#1c8e96",
        "font-size": "20px",
        "font-weight": "bold",
        "margin-right": "10px",
        "background-color":"white",
        "text-decoration":"none"
    }
    let menuSelected = {
        "color":"#dadada",
        "font-size": "20px",
        "font-weight": "bold",
        "margin-right": "10px",
        "background-color": "#13b6cb",
        "text-decoration":"none"
    }
    let linkStyle = {
        "color": "#1c8e96",
        "text-decoration":"none"

    }
    const {servicios} = useContext(mycontext);
    const [serv] = servicios;
    return(
        <Row className="menu mt-4">
            <Col>
            <Navbar  className="nav-menu"  expand="lg">
  <Navbar.Brand href="#home" className="mr-3"><Logo width="150" height="50"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link  style={menuSelected}><Link to="/" style={linkStyle}>Inicio</Link></Nav.Link>
      <NavDropdown className="drop" style={menuStyle} title="Nuestros Servicios" id="collasible-nav-dropdown" >
      {serv && serv.map(sr=>{
                     return(
                      <NavDropdown.Item onClick={e => props.irServicios(sr.id,sr.titulo)}  style={menuStyle}>{sr.titulo}</NavDropdown.Item>
                     )
                 })}
      </NavDropdown>
      <Nav.Link style={menuStyle} ><Link to="/acerca" style={linkStyle}>Quienes Somos</Link></Nav.Link>
      <Nav.Link  style={menuStyle} ><Link to="/contacto" style={linkStyle}>Contacto</Link></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
            </Col>
        </Row>
    )
}
export default Menu;