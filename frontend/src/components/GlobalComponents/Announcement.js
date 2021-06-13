import React from 'react'
import {Modal, Button} from 'react-bootstrap'

const Announcement = ({header, body, btns}) => {

  return (
    <Modal.Dialog
          id="announcement-box"
      style={{position: "absolute", top: "-150px", right: "2%", zIndex: "10000", width: "20rem", backgroundColor: "white"}}>
      <Modal.Header>
        {header}
      </Modal.Header>
      <Modal.Body>
        {body}
      </Modal.Body>
      <Modal.Footer>
        {btns.map(b => (
          <Button onClick={b.onClick}>{b.text}</Button>
        ))}
      </Modal.Footer>
    </Modal.Dialog>
  )
}

export default Announcement

