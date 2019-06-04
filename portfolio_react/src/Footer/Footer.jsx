import React, {Component} from 'react';

class Footer extends Component {
    constructor(){
        super();

    }
    render(){
        return(
            <div className="footer">
                <div className='right'><img src={require('../images/logo.png')} alt="logo"/></div>
            </div>
        )
    }
}


export default Footer;