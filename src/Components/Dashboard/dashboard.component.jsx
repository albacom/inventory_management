import { Component, React, useState } from "react";
import EditSite from "../Crud/Site/edit-site.component";
import ShowSite from '../Crud/Site/show.component';
import EditShed from '../Crud/Shed/edit-shed.component';
import './dashboard.styles.css';

class Dashboard extends Component{
    constructor(props){
        super(props);

        this.state = {
            modal: false,
            sheds: null,
            selectedCategory: 'Sidewalk Shed',
            filterShed: []
        }  
    }

    componentDidMount(){
        fetch('http://localhost:8001/sheds')
        .then((response) => response.json())
        .then((sheds) => {
            this.setState({sheds: sheds});
         } 
        );  
    }

    toggleModal = (id) => {
        this.setState({modal: !this.state.modal});
        let selectedIdCollection = this.state.sheds.filter(shed => shed.id == id);
        this.setState({filterShed: selectedIdCollection});   
    }

    render(){
        return(
            <>
                <div className="dashboard-wrapper">
                <div className="left-container">                
                    <ShowSite />
                </div>
                
                <div className="right-container"> 
                <p className="heading">{this.state.selectedCategory}</p>
                    <table>
                        <tr>
                            <th>Nr.</th>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Description</th>
                            <th>Notes</th>
                        </tr>
                        {             
                            this.state.sheds && this.state.sheds.map((shed, i) => {                                                         
                                return <tr>
                                            <td onDoubleClick={(e) => this.toggleModal(shed.id)}>{shed.id}</td>
                                            <td onDoubleClick={(e) => this.toggleModal(shed.id)}>{shed.item}</td>
                                            <td onDoubleClick={(e) => this.toggleModal(shed.id)}>{shed.quantity}</td>
                                            <td onDoubleClick={(e) => this.toggleModal(shed.id)}>{shed.description}</td>
                                            <td onDoubleClick={(e) => this.toggleModal(shed.id)}>{shed.notes}</td>
                                        </tr>
                            })
                        }
                        </table>
                    </div> 

                    {this.state.modal && (
                        <div className="modal">
                        <div onClick={this.toggleModal} className="overlay"></div>
                        <div className="modal-content">
                        <p className='modal-title'>Update Item</p>           
                            <EditShed filterShed ={this.state.filterShed} />                
                        <button onClick = {this.toggleModal} className="close-modal">x</button>
                        </div>
                        </div>
                    )}
                </div>
            </>
        )
    }
}

export default Dashboard;