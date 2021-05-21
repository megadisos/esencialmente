import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalendarCheck} from '@fortawesome/free-solid-svg-icons'
import {Modal, Button, Form} from 'react-bootstrap'
import Logo from './../logo'
function Agenda(props){
    const [nombre,setNombre] = useState("");
    const [email,setEmail] = useState("");
    const [celular,setCelular] = useState(0);
    const [consulta,setConsulta] = useState("");
    const [mensaje,setMensaje] = useState("");
    let iconStyle = {
        "color":"black",
    }
    let marginText = {
        "margin-left":"2px",
    }
    const enviar =() =>{
      const dataToSend = {
        "nombre" : nombre,
        "email" : email,
        "celular" : celular,
        "consulta" : consulta,
        "mensaje" : mensaje
    }
      fetch("https://www.nabtastore.com.co/api-ese/Citas/",{
        method: 'POST',
        headers: {
          'Content-Type':'application/json',
          'Authorization': `Token 427bd7635e8f0a0cf4c5b8317e9615044e344e92`
        },
        body: JSON.stringify(dataToSend)
      })
      .then( resp => resp.json())
      .catch( error => console.log(error))
      .then( resp => console.log(resp))
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div>
        <div className="agenda" onClick={handleShow}>
            <FontAwesomeIcon icon={faCalendarCheck} style={iconStyle}/> <label className="mt-2" style={marginText}> Agenda tu cita!</label>
        </div>
        <Modal show={show} onHide={handleClose} className="modal">
        <Modal.Header closeButton>
          <Modal.Title><Logo  width="60" height="60" /> Solicita tu cita</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group controlId="formBasicName" className="mb-3">
                <Form.Label>Nombres</Form.Label>
    <Form.Control type="text" placeholder="Digita tu nombre" onChange={e=> setNombre(e.target.value)}/>
  </Form.Group>
  <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Digita tu email" onChange={e=> setEmail(e.target.value)}/>
  </Form.Group>
  <Form.Group controlId="formBasicNumber" className="mb-3">
                <Form.Label>Celular</Form.Label>
    <Form.Control type="number" placeholder="Digita tu celuar" onChange={e=> setCelular(e.target.value)}/>
  </Form.Group>
  <Form.Group controlId="Form.ControlConsulta" className="mb-3">
    <Form.Label>Consulta</Form.Label>
    <Form.Control as="select" onChange={e=> setConsulta(e.target.value)}>
      <option>Terapia de Pareja y Familiar</option>
      <option>Terapia Psicológica de Niños, Niñas, y Adolescentes.</option>
      <option>Atención Integral para la Vejez</option>
      <option>Terapia Sexual</option>
      <option>Apoyo en el Proceso de Elaboración de duelo</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="Form.ControlComnetarios" className="mb-3">
    <Form.Label>Mensaje</Form.Label>
    <Form.Control as="textarea" rows={3} onChange={e=> setMensaje(e.target.value)}/>
  </Form.Group>
  <Button variant="primary" type="submit" id="modalButton" onClick={e=>enviar()}>
    Solicitar
  </Button>
</Form>
        </Modal.Body>
        <Modal.Footer>
      
        </Modal.Footer>
      </Modal>
        </div>

    )
}
export default Agenda;