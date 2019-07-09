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
                        <a target="_blank" rel="noopener noreferrer" href={Pdf}>download resume</a><br/><br/>
                        <a target="_blank" rel="noopener noreferrer" href='https://github.com/awolfden'>github.com/awolfden</a><br/>
                        <a target="_blank" rel="noopener noreferrer" href='https://linkedin.com/in/adamwolfman'>linkedin.com/in/adamwolfman</a><br/>
                        <a target="_blank" rel="noopener noreferrer" href='https://twitter.com/adam_wolfman'>twitter.com/adam_wolfman</a><br/>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/adamwolfman'>facebook.com/adamwolfman</a>
                    </div>
                    {/* <div className='websites'>
                        <a target="_blank" rel="noopener noreferrer" href='https://github.com/awolfden'>github.com/awolfden</a><br/>
                        <a target="_blank" rel="noopener noreferrer" href='https://linkedin.com/in/adamwolfman'>linkedin.com/in/adamwolfman</a><br/>
                        <a target="_blank" rel="noopener noreferrer" href='https://twitter.com/adam_wolfman'>twitter.com/adam_wolfman</a><br/>
                        <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/adamwolfman'>facebook.com/adamwolfman</a>
                    </div> */}
                
                <iframe id="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196281.88171470945!2d-104.99519622419898!3d39.764254751197605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b80aa231f17cf%3A0x118ef4f8278a36d6!2sDenver%2C+CO!5e0!3m2!1sen!2sus!4v1562635746483!5m2!1sen!2sus" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen></iframe>
                
                </div>
                
            </div>
        )
    }

}




export default Contact;