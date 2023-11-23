import { React, Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../../generic.styles.css';
import '../Site/sites.styles.css';

const  CreateSite = () => {
    const [id, setId]              = useState('');
    const [name, setName]          = useState('');
    const [cattegory, setCattegory]  = useState([]);
    const [status, setStatus]      = useState(''); 
    const createSite = (e) => {
        const newSite = {id, name, cattegory, status};

        fetch('http://localhost:8000/sites', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newSite)
        })
        .then( res => { //console.log('');
        })
        .catch(error => console.log(error))
    }

    return (
        <>
            <form onSubmit={createSite} >
            <div className="form create-form">
                    <p className="form-info"><span>&#9432;</span>Informative piece of text that can be used regarding this modal</p>
                    
                    <div className="element-wrapper">
                        <label>Name</label>
                        <input
                            type="text"
                            required
                            value = {name}
                            onChange = {(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className="elements-wrapper">
                        <div className="element-wrapper">
                            <label>Cattegory Included</label>
                            <select 
                                placeholder = "Select"
                                value={cattegory}
                                onChange={(event) => setCattegory(event.target.value)}
                            >   
                                <option value="Select">Select</option>                      
                                <option value="Sidewalk Shed">Sidewalk Shed</option>
                                <option value="Scaffold">Scaffold</option>
                                <option value="Shoring">Shoring</option>
                            </select>
                        </div>
                        <div className="element-wrapper">
                            <label>Status</label>
                            <select 
                                value={status}
                                onChange={(event) => setStatus(event.target.value)}
                            >
                                <option value = "Select one">Select one</option>
                                <option value = "Completed">Completed</option>
                                <option value = "In Progress">In Progress</option>
                                <option value = "On Hold">On Hold</option>
                            </select>
                        </div>
                    </div>
                    <div className="element-wrapper">
                        <button className="save-form-btn">Save Changes <span></span>&#10004;</button>
                        <button className="cancel-form-btn">Cancel Changes <span></span>X</button>           
                    </div>
                </div>
            </form>
        </>
    )
}
export default CreateSite;


