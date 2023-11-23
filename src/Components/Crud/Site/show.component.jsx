import { render } from "@testing-library/react";
import { React, Component, useState, useRef, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

const  ShowSite = () => {
    const location = useLocation();
    const { pid, pname, pcattegory, pstatus } = location.state;

    let [id, setId]              = useState(pid);
    let [name, setName]          = useState(pname);
    let [cattegory, setCattegory]  = useState(pcattegory);
    let [status, setStatus]      = useState(pstatus);

    function showSite(){ 
        let newSite = {id: id, name: name, cattegory: cattegory, status: status};
        let siteInfo = JSON.stringify(newSite)
    }
    
    return (
        <div className="show-site">
                <p className="heading">{pname}</p>  
            <ul className="site-categories">
                <li className="site-category" onClick={(event) => alert('Show category items on the grid for the selected address')}>Sidewalk Shed</li>
                <li className="site-category" onClick={(event) => alert('Show category items on the grid for the selected address')}>{pcattegory}</li>
            </ul>

            <button className="back-button"><Link to = "/" className="_link">Go Back &nbsp; &#8592;</Link></button>          
        </div>
    )
}
export default ShowSite;

