import React, {Component} from 'react';

class Projects extends Component {
    constructor(){
        super();
        this.state = {
            cards: [
                {
                    title: 'Roxy Encinitas',
                    p1: 'Landing page for bar-restaurant',
                    p2: 'JAM Stack with React, ',
                    p3: 'Serverless shop, GCal CMS, & Instagram',
                    img: require('../images/roxy_logo.png'),
                    alt: 'Roxy Encinitas',
                    href: 'http://roxyencinitas.com/',
                    key: 0,
                    class: 'needs-padding'
                },
                {
                    title: 'inHIIT',
                    p1: 'Workout Interval Timer App',
                    p2: 'MERN Stack, API Calls and User Auth',
                    p3: 'Theme Changes With Current Weather',
                    img: require('../images/inHiit.png'),
                    alt: 'inHIIT',
                    href: 'https://inhiit.herokuapp.com/',
                    key: 1
                },
                {
                    title: 'SAVR',
                    p1: 'Social Collaborative Recipe App',
                    p2: '3 Model CRUD, User Authentication',
                    p3: 'Leave Comments on the Recipes',
                    img: require('../images/SAVR.png'),                    
                    alt: 'SAVR',
                    href: 'https://savrapp.herokuapp.com/auth/login', 
                    key: 2
                },
                {
                    title: 'Syndrome Island',
                    p1: 'Incredibles Themed Shooter Game',
                    p2: 'Used Javascript, jQuery, and Timers',
                    p3: 'Arcade Style Reloading',
                    img: require('../images/Syndrome.png'),                    
                    alt: 'SAVR',
                    href: 'https://awolfden.github.io/escape_from_syndrome_island/',
                    key: 3
                },
                {
                    title: 'WKRBee',
                    p1: 'Employee Management System',
                    p2: 'MERN stack using Redux',
                    p3: 'Utilized Material UI Theming',
                    img: require('../images/wkrbee_tile.png'),
                    alt: 'inHIIT Java',
                    href: 'https://awolfden.github.io/WKRBee/',
                    key: 4
                },
                {
                    title: 'Tommy-Gachi',
                    p1: 'Tom Haverford Tomagachi Game',
                    p2: 'Javascript and jQuery Animated',
                    p3: 'Themed audio enhances gameplay',
                    img: require('../images/tommy_logo.png'),
                    alt: 'Tom-agachi',
                    href: 'https://awolfden.github.io/Tom-agachi/',
                    key: 5,
                    class: 'needs-padding'
                }
            ]

        }
    }

    grow = (e) => {
        e.currentTarget.classList.remove('normalize');
        e.currentTarget.classList.add('grow');
        
        this.state.cards.forEach((card) => {
            if(card.key.toString() !== e.currentTarget.id.toString()){
                document.getElementById(card.key).classList.add('fadeAway');
            }
        })
    }

    normalize = (e) => {
        e.currentTarget.classList.remove('grow');
        e.currentTarget.classList.add('normalize');
        this.state.cards.forEach((card) => {
            if(card.key.toString() !== e.currentTarget.id.toString()){
                document.getElementById(card.key).classList.remove('fadeAway');
            }
        })
    }

    render(){
        const makeCards = this.state.cards.map((card, index) => {
            
            return(
                <div id={index} key={index} className='card' onMouseEnter={this.grow} onMouseLeave={this.normalize}>
                <a target="_blank" rel="noopener noreferrer" href={card.href}>
                <div className='image'><img className={card.class} src={card.img} alt={card.alt}/></div>
                <div className='description'>
                    <h4>{card.title}</h4>
                    <p>{card.p1}</p>
                    <p>{card.p2}</p>
                    <p>{card.p3}</p>
                </div>
                </a>
            </div>
            )           
        });

        return(
            <div id='projects' className='projects'>
                <h1>Stuff I Made</h1>
                <div className='project_tiles'>
                    {makeCards}
                </div>
            </div>
        )
    }

}




export default Projects;