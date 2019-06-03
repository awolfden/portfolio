import React, {Component} from 'react';

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
                        <a target="_blank" rel="noopener noreferrer" href="https://inhiit.herokuapp.com/">
                        <div className='image'><img src={require('../images/inHiit.png')} alt="inHiit"/></div>
                        <div className='description'>
                            <h4>inHIIT</h4>
                            <p>Workout Interval Timer App</p>
                            <p>MERN Stack, API Calls and User Auth</p>
                            <p>Theme Changes With Current Weather</p>
                        </div>
                        </a>
                    </div>
                    <div className='card'>
                        <a target="_blank" rel="noopener noreferrer" href="https://savrapp.herokuapp.com/auth/login">
                        <div className='image'><img src={require('../images/SAVR.png')} alt="SAVR"/></div>
                        <div className='description'>
                        <h4>SAVR</h4>
                            <p>Social Collaborative Recipe App</p>
                            <p>3 Model CRUD, User Authentication</p>
                            <p>Leave Comments on the Recipes You Like</p>
                        </div>
                        </a>
                    </div>
                    <div className='card'>
                        <a target="_blank" rel="noopener noreferrer" href="https://awolfden.github.io/escape_from_syndrome_island/">
                        <div className='image'><img src={require('../images/Syndrome.png')} alt="SAVR"/></div>
                        <div className='description'>
                        <h4>Syndrome Island</h4>
                            <p>Incredibles Themed Shooter Game</p>
                            <p>Used Javascript, jQuery, and Timers</p>
                            <p>Arcade Style Reloading</p>
                        </div>
                        </a>
                    </div>
                    <div className='card'>
                        <a target="_blank" rel="noopener noreferrer" href="https://inhiitfrontend.herokuapp.com/">
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