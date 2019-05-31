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
            <div id='projects' className='projects'>
                <h1>Stuff I Made</h1>
                <div className='project_tiles'>
                    <div className='card'>
                        <a href="#">
                        <div className='image'><img src={require('../images/inHiit.png')} alt="inHiit"/></div>
                        <div className='description'>
                            <h4>inHIIT</h4>
                            <p>Workout Interval Timer App</p>
                            <p>MERN Stack With 2 API Calls</p>
                            <p>Theme Changes With Current Weather</p>
                        </div>
                        </a>
                    </div>
                    <div className='card'>
                        <a href="#">
                        <div className='image'><img src={require('../images/SAVR.png')} alt="SAVR"/></div>
                        <div className='description'>
                        <h4>SAVR</h4>
                            <p>Social Collaborative Recipe App</p>
                            <p>3 Model CRUD, User Authentication</p>
                            <p>Theme Changes With Current Weather</p>
                        </div>
                        </a>
                    </div>
                    <div className='card'>
                        <a href="#">
                        <div className='image'><img src={require('../images/Syndrome.png')} alt="SAVR"/></div>
                        <div className='description'>
                        <h4>Escape from Syndrome Island</h4>
                            <p>Incredibles Shooter Game</p>
                            <p>jQuery Browser Point and Click Shooter</p>
                            <p>Must Shoot Down All Incredibles To Win</p>
                        </div>
                        </a>
                    </div>
                    <div className='card'>
                        <a href="#">
                        <div className='image'><img src={require('../images/inHiit.png')} alt="inHiit"/></div>
                        <div className='description'>
                        <h4>inHIIT Java</h4>
                            <p>Workout Interval Timer App</p>
                            <p>Rebuilt Backend With Java and SQL</p>
                            <p>Theme Changes With Current Weather</p>
                        </div>
                        </a>
                    </div>
                    
                </div>


            </div>
        )
    }

}




export default Projects;