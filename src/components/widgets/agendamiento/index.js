import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalendarCheck} from '@fortawesome/free-solid-svg-icons'
import {Modal, Button, Form} from 'react-bootstrap'
import Logo from './../logo'
function Agenda(props){
    let iconStyle = {
        "color":"black",
    }
    let marginText = {
        "margin-left":"2px",
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
    <Form.Control type="text" placeholder="Digita tu nombre" />
  </Form.Group>

  <Form.Group controlId="formBasicNumber" className="mb-3">
                <Form.Label>Celular</Form.Label>
    <Form.Control type="number" placeholder="Digita tu celuar" />
  </Form.Group>
  <Form.Group controlId="Form.ControlConsulta" className="mb-3">
    <Form.Label>Consulta</Form.Label>
    <Form.Control as="select">
      <option>Terapia de Pareja y Familiar</option>
      <option>Terapia Psicológica de Niños, Niñas, y Adolescentes.</option>
      <option>Atención Integral para la Vejez</option>
      <option>Terapia Sexual</option>
      <option>Apoyo en el Proceso de Elaboración de duelo</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="Form.ControlComnetarios" className="mb-3">
    <Form.Label>Mensaje</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Button variant="primary" type="submit" id="modalButton">
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