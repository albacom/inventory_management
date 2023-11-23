import { Component } from "react";
import {React, useState} from React;
import "./Modal.css";

class Modal extends Component{
    constructor(){
        super();

        const [modal, setModal] = useState(false);

        const toggleModal = () =>{
            setModal(!modal);
        };
    }

    componentDidMount(){
        if(modal)
        {
            document.body.classList.add('active-modal');
        }
        else
        {
            document.body.classList.remove('active-modal');
        }
    }

    render(){
        return (
            <div>

            </div>
        );
    }

}

export default Modal;