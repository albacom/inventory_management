import { React, Component, useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './site-list.styles.css';
import { nanoid } from 'nanoid';

class SiteList extends Component{
    constructor (props){
        super(props);

        this.state = {
            id: null,
            name: '',
            cattegory: '',//[],
            status: ''
        };
    }

    styleStatus = (status) => {
        console.log('function run hi');
        if(status == 'Completed'){
            console.log('completed hi');
            status = 'completed';

        }
        else 
        if(status == 'In Progress'){
            console.log(' in progress hi');
            status = 'in-progress';
        }
        else if(status == 'On Hold'){
            console.log('on hold hi');
            status = 'on-hold';
        }
        return status;
    }

    render() {
        
        return (
            <div>
               
                <ul className='grid grid-header'>
                    <li></li>
                    <li>Jobsite Name</li>
                    <li>Status</li>
                </ul>

                <ul className='grid'>
                    <li>
                        {
                            this.props.filterSites.map((site, i) => {               
                                if(i%2-1===0){
                                    return <p className={this.props.classNameOdd}></p>
                                }
                                else{
                                    return <p className={this.props.classNameEven}></p>
                                }
                            })
                        }
                    </li>
                    <li>
                        {
                            this.props.filterSites.map((site, i) => {                         
                                if(i%2-1===0){
                                    return <Link to = {'/site-dashboard'} 
                                    state={{pid: site.id, pname: site.name, pcattegory: site.cattegory, pstatus: site.status}} className='greenBtn'><p className={this.props.classNameOdd} key={i}>{site.name}</p></Link>
                                }
                                else{
                                    return <Link to = {'/site-dashboard'}
                                    state={{pid: site.id, pname: site.name, pcattegory: site.cattegory, pstatus: site.status}} className='greenBtn'><p className={this.props.classNameEven} key={i}>{site.name}</p></Link>
                                }
                            })              
                        }
                    </li>
                    <li>              
                        {
                            this.props.filterSites.map((site, i) => {
                                if(i%2-1===0){
                                    return <Link to = {'/update-site'} style={{textDecoration:'none'}}
                                    state={{pid: site.id, pname: site.name, pcattegory: site.cattegory, pstatus: site.status}} className='greenBtn'> <p  className={this.styleStatus(site.status)}>{site.status}</p></Link>
                                }
                                else{
                                    return <Link to = {'/update-site'} style={{textDecoration:'none'}}
                                    state={{pid: site.id, pname: site.name, pcattegory: site.cattegory, pstatus: site.status}} className='greenBtn'><p className={this.styleStatus(site.status)}>{site.status}</p></Link>
                                }
                            })
                        }
                    </li>
                </ul>
            </div>
        )
    }
}

export default SiteList;
