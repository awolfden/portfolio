import React, {Component} from 'react';

class Contact extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div className='contact'>
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
                        <a href='#'>adamwolfman.com</a><br/>
                        <a href='#'>awolfmil@gmail.com</a><br/>
                        <a href='#'>github.com/awolfden</a><br/>
                        <a href='#'>linkedin.com/in/adamwolfman</a>
                    </div>
                
                    <img src={require('../images/denver_map.png')} alt="map"/>
                
                </div>
                
            </div>
        )
    }

}




export default Contact;