import React from 'react'
import {Modal} from "react-bootstrap";

const ZoomImage = ({image,show, handleClose}) => {
  return (
    <Modal show={show} onHide={handleClose} size={"lg"}>
      <Modal.Header closeButton />
      <div style={{padding:"0.6rem"}}>
        <img src={image} alt={"question-image"} style={{width:"100%"}}/>
      </div>
    </Modal>
  )
}

export default ZoomImage

