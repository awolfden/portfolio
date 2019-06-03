import React, {Component} from 'react';

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
                        <a href='www.adamwolfman.com' target="_blank">adamwolfman.com</a><br/>
                        <a href='awolfmil@gmail.com' target="_blank">awolfmil@gmail.com</a><br/>
                        <a href='www.github.com/awolfden' target="_blank">github.com/awolfden</a><br/>
                        <a href='www.linkedin.com/in/adamwolfman' target="_blank">linkedin.com/in/adamwolfman</a><br/>
                        <a href='https://twitter.com/adam_wolfman' target="_blank">twitter.com/adam_wolfman</a><br/>
                        <a href='https://www.facebook.com/adamwolfman' target="_blank">facebook.com/adamwolfman</a>
                    </div>
                
                    <img src={require('../images/denver_map.png')} alt="map"/>
                
                </div>
                
            </div>
        )
    }

}




export default Contact;