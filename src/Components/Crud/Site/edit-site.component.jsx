import { render } from "@testing-library/react";
import { React, Component, useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const  EditSite = () => {

    const location = useLocation();
    const { pid, pname, pcattegory, pstatus } = location.state;
    
    let [id, setId]              = useState(pid);
    let [name, setName]          = useState(pname);
    let [cattegory, setCattegory]  = useState(pcattegory);
    let [status, setStatus]      = useState(pstatus);

    const cancelSiteUpdate = () => {
        console.log('update cancelled');
    }

    function updateSite(){ 

        let newSite = {id: id, name: name, cattegory: cattegory, status: status};
 
        fetch(`http://localhost:8000/sites/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newSite)
        })
        .then( res => {
            console.log(newSite);
        })
        .catch(error => console.log(error))
    }
            
    return (
        <div className="create">
            <h1>Update Site</h1>
            <p>Informative piece of text that can be used regarding this modal</p>
            <label>Name</label>
            <input
                type="text"
                defaultValue = {pname}
                onChange = {(event) => setName(event.target.value)}
            />
            <div>
                <div>
                    <label>Cattegory Included</label>
                    <select 
                        placeholder = "Select"
                        defaultValue={pcattegory}
                        onChange={(event) => setCattegory(event.target.value)}
                    >   
                        <option value="Select">Select</option>                      
                        <option value="Sidewalk Shed">Sidewalk Shed</option>
                        <option value="Scaffold">Scaffold</option>
                        <option value="Shoring">Shoring</option>

                    </select>
                </div>
                <div>
                    <label>Status</label>
                    <select 
                        defaultValue={pstatus}
                        onChange={(event) => setStatus(event.target.value)                            
                    }                  
                    >
                        <option value = "Select one">Select one</option>
                        <option value = "Completed">Completed</option>
                        <option value = "In Progress">In Progress</option>
                        <option value = "On Hold">On Hold</option>
                    </select>
                    
                </div>
            </div>
            
            <button onClick={cancelSiteUpdate}>Cancel Changes X</button>
            <button onClick={updateSite}>Save Changes</button>           
        </div>
    )
}
export default EditSite;


