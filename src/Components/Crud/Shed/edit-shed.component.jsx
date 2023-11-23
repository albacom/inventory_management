import { Component, useState } from "react";
import './sheds.styles.css';

class EditShed extends Component{
    constructor(props){
        super(props)     
      
        this.state = {
            id: this.props.filterShed[0].id,
            item: this.props.filterShed[0].item,
            quantity: this.props.filterShed[0].quantity,
            description: this.props.filterShed[0].description,
            notes: this.props.filterShed[0].notes
        }  

        console.log('--'+JSON.stringify(this.state));
    }

    updateShed = (e) => { 
        e.preventDefault();
        /*const {
            id, 
            item, 
            quantity,
            description,
            notes
        } = this.state;*/

        let updateShed = {
            id:          this.state.id, 
            item:        this.state.item, 
            quantity:    this.state.quantity,
            description: this.state.description,
            notes:       this.state.notes
        }

        console.log('okok ' + JSON.stringify(updateShed));

        fetch(`http://localhost:8001/sheds/${this.state.id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateShed)
        })
        .then( res => {
            //console.log(updateShed);
        })
        .catch(error => console.log(error))
       
    }

    componentDidMount() {
        //console.log("--");
    }

    render(){
        const {id, item, quantity, description, notes} = this.props.filterShed[0];
        return(
            <>
                <form onSubmit={this.updateShed} >
                    <div className="form update-shed-form">
                        <p className="form-info"><span>&#9432;</span>Informative piece of text that can be used regarding this modal</p>
                        
                        <div className="elements-wrapper">
                            <div className="element-wrapper">
                                <label>Item</label>
                                <input
                                    type="text"
                                    required
                                    defaultValue = {item}
                                    onChange = {(e) => this.setState({item: e.target.value})}                             
                                />
                            </div>
                            <div className="element-wrapper">
                                <label>Quantity</label>
                                <input
                                    type="text"
                                    required
                                    defaultValue = {quantity}
                                    onChange = {(e) => this.setState({quantity: e.target.value})} 
                                />
                            </div>
                        </div>
                        <div className="element-wrapper">
                            <label>Description</label>
                            <input
                                type="text"
                                required
                                defaultValue = {description}
                                onChange = {(e) => this.setState({description: e.target.value})} 
                            />
                        </div>
                        <div className="element-wrapper">
                            <label>Notes</label>
                            <input
                                type="text"
                                required
                                defaultValue = {notes}
                                onChange = {(e) => this.setState({notes: e.target.value})}                                
                            />
                        </div>
                        <div className="element-wrapper">
                            <button className="save-form-btn">Save Changes <span></span>&#10004;</button>                                     
                        </div>
                    </div>
                </form>
            </>
        )
    }
}

export default EditShed;

//onChange = {(e) => setName(e.target.value)}
//onSubmit={createSite}