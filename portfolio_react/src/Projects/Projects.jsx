import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class Projects extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div className='projects'>
                <h1>Stuff I Made</h1>
                <div className='project_tiles'>
                    <div className='card'>
                        <a href="#">
                        <div className='image'><img src={require('../images/inHiit.png')} alt="inHiit"/></div>
                        <div className='description'></div>
                        </a>
                    </div>
                    <div className='card'>
                        <a href="#">
                        <div className='image'></div>
                        <div className='description'></div>
                        </a>
                    </div>
                    <div className='card'>
                        <a href="#">
                        <div className='image'></div>
                        <div className='description'></div>
                        </a>
                    </div>
                    <div className='card'>
                        <a href="#">
                        <div className='image'><img src={require('../images/inHiit.png')} alt="inHiit"/></div>
                        <div className='description'></div>
                        </a>
                    </div>
                    
                </div>


            </div>
        )
    }

}




export default Projects;