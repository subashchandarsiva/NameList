import './Modal.css'
import React from 'react'
import ReactDOM from 'react-dom'

const Modal =(props)=>{

    const Backdrop = props =>{
       return <div className="backdrop" onClick={props.onConfirm}/>
    }

    const Modal = props =>{
    return    <div className="modal">
        <header className="header">
            <h2>{props.title}</h2>
        </header>
        <div className="content">
            <p>{props.message}</p>
        </div>
        <footer className="actions">
            <button onClick={props.onConfirm}>Okay</button>
        </footer>
    </div>
    }
return(
    <>
    {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById("backdrop-root"))}
    {ReactDOM.createPortal(<Modal onConfirm={props.onConfirm} title={props.title} message={props.message} />, document.getElementById("overlay-modal-root"))}
    </>
)
}

export default Modal