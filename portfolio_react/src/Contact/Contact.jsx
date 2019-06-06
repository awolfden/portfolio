import React, {Component} from 'react';
import Pdf from '../images/resume.pdf';

class Contact extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div id='contact' className='contact'>
                <div>
                    <h1>How to Find Me</h1>
                </div>
                <div className='contact_div'>
                    <div className='contact_info'>
                        <h3>Adam Wolfman</h3>
                        <p>920.470.3484</p>
                        <p>865 S Shoshone Street</p>
                        <p>Denver, Co 80223</p>
                    </div>
                    <div className='websites'>
                        <a href='mailto:awolfmil@gmail.com'>awolfmil@gmail.com</a><br/>
                        <a target="_blank" rel="noopener noreferrer" href='https://github.com/awolfden'>github.com/awolfden</a><br/>
                        <a target="_blank" rel="noopener noreferrer" href={Pdf}>download resume</a><br/>
                        <a target="_blank" rel="noopener noreferrer" href='https://linkedin.com/in/adamwolfman'>linkedin.com/in/adamwolfman</a><br/>
                        <a target="_blank" rel="noopener noreferrer" href='https://twitter.com/adam_wolfman'>twitter.com/adam_wolfman</a><br/>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/adamwolfman'>facebook.com/adamwolfman</a>
                    </div>
                
                    <img src={require('../images/denver_map.png')} alt="map"/>
                
                </div>
                
            </div>
        )
    }

}




export default Contact;