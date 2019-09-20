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
                    <p>I am a Web Developer, Marketing major, and graduate of General Assembly Software 
                        Engineering Immersive program. I've designed and built full-stack apps, but specialize in front end development
                        using Javascript frameworks such as React and Angular. Recently I've been excited about serverless tech,
                        releasing a JAM stack with an ecommerce integration. If you have a project idea or need a website refresh
                        please reach out for a free consultation! 
                    </p>
                </div>
            </div>
        )
    }

}




export default About;