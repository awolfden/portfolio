import React, {Component} from 'react';

class About extends Component {
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div id='about' className='about'>
                <h1>Stuff I Am</h1>
                <div>
                    <p>I'm a software engineer working as a developer success engineer. In my current role I leverage problem solving, cross-functional communication, and drive to identify, debug, and solve customer issues.
                    </p>
                </div>
            </div>
        )
    }

}




export default About;