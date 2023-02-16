import React, {Component} from 'react';

class Projects extends Component {
    constructor(){
        super();
        this.state = {
            cards: [
                {
                    title: 'WorkOS Postman Public Workspace',
                    p1: 'Postman workspace for the WorkOS API',
                    img: require('../images/wolf-logo.png'),
                    alt: 'Roxy Encinitas',
                    href: 'https://workos.com/changelog/postman-public-workspace/',
                    key: 0,
                    class: 'right-50'
                },
                {
                    title: 'WorkOS Bubble.io Plugin',
                    p1: 'Bubble.io plugin for WorkOS SSO',
                    img: require('../images/wolf-logo.png'),
                    alt: 'WorkOS Bubble.io Plugin',
                    href: 'https://bubble.io/plugin/workos-sso-1666727595127x530956156372516860/',
                    key: 1,
                    class: 'right-50'
                },
                {
                    title: 'WorkOS SAML Sessions Dashboard',
                    p1: 'WorkOS Dashboard tool',
                    img: require('../images/wolf-logo.png'),
                    alt: 'WorkOS SAML sessions in the dashboard',
                    href: 'https://workos.com/changelog/debug-saml-sessions/',
                    key: 2,
                    class: 'right-50'
                },
                {
                    title: 'WorkOS Cloudflare SAML Integration',
                    p1: 'SAML integration for WorkOS',
                    img: require('../images/wolf-logo.png'),
                    alt: 'WorkOS SAML integration with Cloudflare',
                    href: 'https://workos.com/changelog/new-integration-cloudflare-saml/',
                    key: 3,
                    class: 'right-50'
                },
                {
                    title: 'WorkOS Oracle SAML Integration',
                    p1: 'SAML integration for WorkOS',
                    img: require('../images/wolf-logo.png'),
                    alt: 'WorkOS SAML integration with Oracle',
                    href: 'https://workos.com/changelog/new-integration-oracle-saml',
                    key: 4,
                    class: 'right-50'
                },
                {
                    title: 'WorkOS PingFederate SCIM Integration',
                    p1: 'SCIM integration for WorkOS',
                    img: require('../images/wolf-logo.png'),
                    alt: 'WorkOS SCIM integration with PingFederate',
                    href: 'https://workos.com/changelog/extending-the-onelogin-and-pingfederate-integrations',
                    key: 5,
                    class: 'right-50'
                },
                {
                    title: 'Test Webhooks with Ngrok',
                    p1: 'Blog post written for WorkOS',
                    img: require('../images/wolf-logo.png'),
                    alt: 'Blog post about testing webhooks with Ngrok',
                    href: 'https://segment.com/blog/qa-segment-events/',
                    key: 6,
                    class: 'right-50'
                },
                {
                    title: 'How to QA Twilio Segment Events',
                    p1: 'Blog post written for Twilio Segment',
                    img: require('../images/wolf-logo.png'),
                    alt: 'Blog post about testing webhooks with Ngrok',
                    href: 'https://workos.com/blog/test-workos-webhooks-locally-ngrok',
                    key: 7,
                    class: 'right-50'
                },
                {
                    title: 'Roxy Encinitas',
                    p1: 'Landing page for bar-restaurant',
                    p2: 'JAM Stack with React, ',
                    p3: 'Serverless shop, GCal CMS, & Instagram',
                    img: require('../images/roxy_logo.png'),
                    alt: 'Roxy Encinitas',
                    href: 'http://roxyencinitas.com/',
                    key: 8,
                    class: 'needs-padding'
                },
                {
                    title: 'Syndrome Island',
                    p1: 'Incredibles Themed Shooter Game',
                    p2: 'Used Javascript, jQuery, and Timers',
                    p3: 'Arcade Style Reloading',
                    img: require('../images/Syndrome.png'),                    
                    alt: 'Syndrome Island game',
                    href: 'https://awolfden.github.io/escape_from_syndrome_island/',
                    key: 9
                },
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
                {/* <div className='image'><img className={card.class} src={card.img} alt={card.alt}/></div> */}
                <div className='description'>
                    <h4>{card.title}</h4>
                    <p>{card.p1}</p>
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