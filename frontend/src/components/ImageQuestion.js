import React, {useState} from 'react'
import ZoomImage from "./ZoomImage";

const ImageQuestion = ({question}) => {
    const [show, setShow] = useState(false);
    return (
    <div className={"img-question"} style={{width:"350px", position:"relative"}}>
        <ZoomImage show={show} image={question} handleClose={() => setShow(false)}/>
        <button className={"expand-image-btn"} onClick={() => setShow(true)}>
            <i className="fas fa-expand-arrows-alt"/>
        </button>
      <img src={question} alt={"image-question"} style={{width:"100%"}}/>
    </div>
  )
}

export default ImageQuestion

