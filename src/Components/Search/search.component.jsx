import { Component, React, useState, state } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal/modal.component';
import Create from '../Crud/Site/create-site.component';

class Search extends Component{
  constructor(){
    super();

    this.state = {
      modal: false
    }
  }

  toggleModal = (props) => {
    this.setState({modal: !this.state.modal});
  }

  render(){
      return(
        <>
          <ul className='search-grid grid grid-header'>
          <li>Info</li>
          <li>
              <input
                className={this.props.className}
                type='search'
                placeholder={this.props.placeholder}
                onChange={this.props.onSearchSitesProp}
              />
          </li>
          <li>
            <button onClick={this.toggleModal} className="greenBtn">
              Create +
            </button>          
          </li>
      
        </ul>
            
        {this.state.modal && (
          <div className="modal">
              <div onClick={this.toggleModal} className="overlay"></div>
              <div className="modal-content">
                  <p className='modal-title'>Create Site</p>           
                    <Create />               
                  <button onClick = {this.toggleModal} className="close-modal">x</button>
              </div>
          </div>
          )}

      </>
      )
  }
}

export default Search;
























  //<Link to = {'/create-site'} className='greenBtn'>Create +</Link>