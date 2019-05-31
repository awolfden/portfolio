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
                    <p>I am a software engineer who just graduated from 
                    the General Assembly 12 week immersive program with 
                    8 years experience in mortgage finance as an analyst. </p>

                    <p>In my last role I worked as the point of contact across 
                    agencies. I would analyze customer data and come up with 
                    solutions that fit within product regulations to approve deals 
                    before their closing deadlines. While I enjoyed breaking down 
                    big problems in to smaller pieces to come up with solutions, 
                    I felt I was missing out on actually creating things, which is what 
                    led me to pivot and pursue a change in to coding.</p>

                    <p>I am really excited to take the skills I have started to build at GA 
                    and rocket them to the next level going forward. I am interested 
                    most in clean design, both in code and user experience.</p>
                </div>
            </div>
        )
    }

}




export default About;