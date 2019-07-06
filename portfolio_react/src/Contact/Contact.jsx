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
                        <a href='mailto:awolfmil@gmail.com'>awolfmil@gmail.com</a><br/>
                        <a target="_blank" rel="noopener noreferrer" href={Pdf}>download resume</a><br/>
                        
                    </div>
                    <div className='websites'>
                        <a target="_blank" rel="noopener noreferrer" href='https://github.com/awolfden'>github.com/awolfden</a><br/>
                        <a target="_blank" rel="noopener noreferrer" href='https://linkedin.com/in/adamwolfman'>linkedin.com/in/adamwolfman</a><br/>
                        <a target="_blank" rel="noopener noreferrer" href='https://twitter.com/adam_wolfman'>twitter.com/adam_wolfman</a><br/>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/adamwolfman'>facebook.com/adamwolfman</a>
                    </div>
                
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24556.690763213086!2d-105.02619480965761!3d39.70400368505795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c7f72ea9ddb97%3A0x9ffda6584f0562c1!2sAthmar+Park%2C+Denver%2C+CO!5e0!3m2!1sen!2sus!4v1562449100490!5m2!1sen!2sus" title="map" width="600" height="450" frameBorder="0"  allowFullScreen></iframe>
                
                </div>
                
            </div>
        )
    }

}




export default Contact;