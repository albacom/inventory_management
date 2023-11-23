import {React, useState } from "react";
import "./modal.styles.css";

export default function Modal(){

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    if(modal)
    {
        document.body.classList.add('active-modal');
    }
    else
    {
        document.body.classList.remove('active-modal');
    }

    return(
        <>
            <button onClick={toggleModal} className="btn-modal">
                Open
            </button>  

            {modal && (
            <div className="modal">
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content">
                    <h3>Modal Heading</h3>
                    <p>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit 
                        esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </p>
                    <button onClick = {toggleModal} className="close-modal">
                        Close
                    </button>
                </div>
            </div>
            )}
        </>
    );
}