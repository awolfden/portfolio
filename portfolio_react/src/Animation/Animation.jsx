import React, {Component} from 'react';



class Animation extends Component {
    constructor(){
        super();
        this.state = {
            hasDrawn: false,
            hasJiggled: false
        }
    }

    toggleDraw = () => {
        if(this.state.hasDrawn === false){
            const layers = ['layer2', 'layer5', 'layer6', 'layer7', 'layer8', 'layer9'];
            layers.forEach((layer)=>{
                document.getElementById(`${layer}`).classList.add('fadeIn');
                document.getElementById(`${layer}`).classList.remove('hidden');
            })
    
            let width = window.innerWidth;
            if(width <= 411){
                document.getElementById('layer3').classList.add('fadeIn');
            } else {
                document.getElementById('layer3').classList.add('draw');
            }

            
            document.getElementById('layer3').classList.remove('hidden');
            document.getElementById('svg').classList.remove('bigLogo');
            document.getElementById('svg').classList.add('shrink');

            const element = document.getElementById('animation');            
            element.classList.add('lightning');

            this.setState({
                hasDrawn: true
            });
        } 
        
    }

    sway = (e) => {
        if(!this.state.hasJiggled){
            e.currentTarget.classList.add('sway');
        }       
        setTimeout(() => {
            const layers = ['layer2', 'layer5', 'layer6', 'layer7', 'layer8', 'layer9'];
            layers.forEach((layer)=>{
            document.getElementById(`${layer}`).classList.remove('sway');
            document.getElementById(`${layer}`).classList.remove('fadeIn');
        })
        }, 2001);
        this.setState({
            hasJiggled: true
        })
    }

    resetJiggle = () => {
        this.setState({
            hasJiggled: false
        })
    }


    render(){
        
        return(
            <div id='animation' className='animation'>
                <div className='svg_container'>                    
                    <svg id="svg" className="bigLogo" xmlns="http://www.w3.org/2000/svg" viewBox="-15 0 1825 1412.7">
                        <g onMouseEnter={this.sway} onMouseLeave={this.resetJiggle} id="layer9" className="hidden" data-name="Layer 9">
                            <path d="M1121.82 1380.03c-3.64 9.12-11 14.26-19.52 18.09-19.68 8.87-40.57 11.37-61.87 11.35a157.44 157.44 0 0 1-45.34-6.27c-1.27-.38-2.54-.78-3.79-1.24-.23-.08-.36-.46-.47-.61 46 5.36 91.11 5.84 131-23.32zM1121.82 1311.03c-5.44 14.66-14.78 21.93-30.84 23.75 3.26-3 6.6-5.5 9.21-8.61 3.18-3.77 6.41-7.75 8.43-12.18 4-8.84-.48-15.89-10.16-17-.9-.1-1.8-.15-3.07-.25 10.67-7.47 21-4.08 26.43 8.24zM1086.71 1302.46a31.89 31.89 0 0 1-20 8.45q-26.65 1.62-53.31 3c-2.65.13-5.65 0-5.54 3.22 0 1.57 2.62 4.21 4.26 4.38 10 1 20.16 2.13 30.23 2 6.89-.09 13.74-2.28 20.65-3.22a11 11 0 0 1 6 1c3.07 1.53 5.84 3.66 9.47 6a103.89 103.89 0 0 1-33.9 7.63c-7.3.46-14.65 0-22 .21-1.62 0-3.21 1.23-4.82 1.89 1.3 1.6 2.48 4.45 3.92 4.59 7.41.75 14.93 1.42 22.33.91 6.4-.44 12.65-2.7 19-3.71a11.12 11.12 0 0 1 6.24 1.41 98.49 98.49 0 0 1 8.7 5.43l.13 1.82c-7.35 2.22-14.6 4.9-22.07 6.58a99 99 0 0 1-37.23 1 30.05 30.05 0 0 1-5.35-1.2c-4-1.44-9.09-2.54-9.19-7.82s4.22-7.93 8.73-9.79c1-.4 2-.72 3.34-1.21-6-1.76-11.64-3-16.93-5.13-2.31-.92-5.3-3.5-5.45-5.51s2.46-4.76 4.46-6.46 4.82-2.59 8.12-4.25c-4-.66-7.25-1.07-10.41-1.74-2.59-.55-5.39-1-7.59-2.28s-5.52-3.87-5.34-5.56c.24-2.28 3-5 5.32-6.2a38.82 38.82 0 0 1 11.43-3.28 114.47 114.47 0 0 1 19.61-1.31l-14 6.32.21 2.11c3.74.74 7.45 1.82 11.23 2.14a313 313 0 0 0 66.82-1.14c.72-.08 1.36-.13 2.93-.28z"/>
                            <path d="M1093.5 1358.39c7.91 4.19 8.69 10.51 2.13 15.91-7.3 6-16.23 8.37-25.26 10-29.65 5.48-59.3 5.94-88.7-1.51a48.15 48.15 0 0 1-15.66-7.32c-6.76-4.79-5.74-12.43 1.49-16.58s19.17-3.44 24.13 1.55c-2.86.48-5.91.52-8.53 1.61-1.91.79-4.39 2.85-4.54 4.53s2.1 4.47 3.83 5c7.6 2.29 15.3 4.67 23.14 5.67 22.44 2.86 44.88 2.52 67.09-2.31a65.34 65.34 0 0 0 11.81-3.89c5.39-2.28 9.95-5.52 9.07-12.66zM1063.46 1199.72c5.11 6.9 5.94 14.43 1.42 21.45-4 6.23-9.17 11.77-14.19 17.27s-10.55 10.17-15.5 15.57c-4.58 5-5.73 10.6-1.83 16.87s7.51 13.09 11 19.91c-10.53-6.64-20.69-13.74-27.06-24.88-4.09-7.15-3.64-13.33 2.16-19.21 5-5.06 10.86-9.26 16.44-13.72 7-5.6 14.38-10.79 21.14-16.69 4.78-4.18 7.41-9.77 6.42-16.57z"/>
                            <path d="M1063.29 1291.59c6.91-9 6.94-11.37.22-20.64-9.55-13.17-7.19-25.09 6.79-33.52 8.41-5.07 17.73-7.34 27.79-7.74-2 1.3-4.05 2.48-5.94 3.9-5.58 4.2-11.38 8.17-16.56 12.82-5.49 4.91-5.75 8-2.7 14.69 1.33 2.86 3 5.61 4.12 8.53 4.1 10.23-2.46 20.66-13.72 21.96z"/>
                        </g>
                        <g onMouseEnter={this.sway} onMouseLeave={this.resetJiggle} id="layer8" className="hidden" data-name="Layer 8">
                            <path d="M782.82 1354.03c-2.25 6.34-6.91 10.22-12.61 13.56q-35.14 20.64-70 41.84c-7.15 4.33-13.79 4.45-20.82-.17s-14.4-8.9-21.59-13.36c-1.33-.82-2.56-1.8-4.2-3 5-2.53 9.2-4.89 13.63-6.84 1-.45 2.81.19 4 .84 5.31 3 10.44 6.28 15.83 9.09 1.49.78 4.1 1 5.46.18q36.13-21.15 72-42.78a7.22 7.22 0 0 0 2.89-5.28q.27-43.08 0-86.15a7.27 7.27 0 0 0-3-5.21q-35.6-22.05-71.49-43.64a6.86 6.86 0 0 0-5.92 0q-35.89 21.58-71.49 43.66a7.31 7.31 0 0 0-3 5.25q-.28 43.07 0 86.15a7.5 7.5 0 0 0 3 5.23c5.4 3.65 11.1 6.88 16.75 10.17a24.33 24.33 0 0 0 4.89 2.09c8.44 2.65 14.21-1.52 14.25-10.33.06-12.5 0-25 0-37.5 0-15.77.08-31.54-.07-47.32 0-3.4.88-4.78 4.47-4.7 13.09.26 10.84-1.33 10.89 10.86q.15 39.72-.06 79.45a35.89 35.89 0 0 1-2.09 12.18c-4.27 11.26-18.09 17.15-30.74 11.83-10.72-4.51-20.68-10.92-30.65-17-4.57-2.8-6.05-8-6.06-13.27q-.07-45.3 0-90.61a17 17 0 0 1 8.82-15.47c25-14.88 49.94-29.9 75-44.78a56.37 56.37 0 0 1 7.27-3.07h3.53a107.48 107.48 0 0 1 10 4.66c23.06 13.68 46 27.6 69.1 41.17 5.77 3.39 10.28 7.39 12 14z"/>
                            <path d="M712.35 1352.2c-8.11-2.09-16.52-3.43-24.26-6.47-9.09-3.58-13.84-11.27-15-21-.39-3.18.6-4.91 4.07-4.59a11.35 11.35 0 0 0 2.67 0c4.71-.67 7.7.34 8.58 5.94.74 4.67 4.56 7.67 9.07 9 9.89 2.89 20 3.39 29.81 0a16 16 0 0 0 8.06-6.91c3.21-5.8 1.13-10.86-5.26-12.53-7.85-2.06-16-2.91-24-4.41a152 152 0 0 1-15.6-3.42c-8.63-2.59-13.94-8.4-14.7-17.59-.82-9.85 2.55-17.89 11.45-22.88 9.46-5.29 19.86-6.12 30.3-4.88a72.83 72.83 0 0 1 18.37 4.57c7.78 3.13 11.56 9.86 12.73 18.06.38 2.61-.43 4-3.27 3.88a30.82 30.82 0 0 0-5.35 0c-3.49.45-4.94-1.07-6.62-4.17a15.54 15.54 0 0 0-8-7 48.91 48.91 0 0 0-26.83-.43 13.66 13.66 0 0 0-4.35 2.17 7.7 7.7 0 0 0-3.11 9.06 8.89 8.89 0 0 0 5.37 5.08c8.65 2 17.48 3.27 26.23 4.91 4.22.8 8.47 1.61 12.58 2.8 8.19 2.38 14.77 6.79 16.09 15.94 1.42 9.81-.65 18.72-8.82 25.25-8.74 7-19.16 8.23-29.86 8.29z"/>
                        </g>
                        <g onMouseEnter={this.sway} onMouseLeave={this.resetJiggle} id="layer7" className="hidden" data-name="Layer 7">
                            <path d="M1558.84 838.87a112.06 112.06 0 1 1 111.94 112.16 112.07 112.07 0 0 1-111.94-112.16zm219.28.13c.06-58.93-48-107.09-107-107.26s-107.32 47.92-107.41 107.06 48 107.28 107.12 107.4c58.88.13 107.24-48.17 107.29-107.17z"/>
                            <path d="M1693.81 852.53h-66.31c-3.71 0-4.1-.42-4.44-4.18q-2.71-29.94-5.48-59.88c-.26-2.87.53-3.73 3.71-3.74h99.87c4.07 0 4.53.45 4.2 4.58-.46 5.77-1 11.52-1.57 17.28-.33 3.41-.73 3.73-4.13 3.73h-74.32c.5 5.62 1 11 1.46 16.56h70.81c3.62 0 4.26.59 3.94 4.15-1.3 14.44-2.66 28.87-4 43.3-.54 5.76-1.14 11.52-1.6 17.28a3.17 3.17 0 0 1-2.58 3.2c-13.4 3.79-26.79 7.63-40.2 11.36a7.26 7.26 0 0 1-3.7-.1c-13.18-3.69-26.33-7.47-39.51-11.18-1.71-.48-2.79-1.28-3-3.18l-3-33.38c-.29-3.34.31-3.9 3.66-3.91h18.31c2.78 0 3.44.66 3.69 3.44.45 5 .86 9.95 1.43 14.91a2.66 2.66 0 0 0 1.52 1.86c5.91 1.78 11.85 3.45 17.81 5.06a5.45 5.45 0 0 0 2.74-.14c5.57-1.52 11.12-3.14 16.68-4.7 1.2-.34 2.06-.73 2.18-2.29.57-6.53 1.21-13.09 1.83-20.03zm22.74-20.8h-70.35c-3.48 0-3.82-.32-4.14-3.66q-.87-9.12-1.73-18.22c-.34-3.67.3-4.37 4-4.37h74.7c.48-5.39.94-10.47 1.4-15.65h-97.78c1.75 19.33 3.49 38.47 5.25 57.85h66.48c4.47 0 4.76.24 4.38 4.8-.62 7.5-1.42 15-2 22.49-.19 2.36-1.26 3.44-3.5 4-6.66 1.76-13.25 3.76-19.89 5.54a7.4 7.4 0 0 1-3.68 0c-6.8-1.83-13.54-3.86-20.34-5.69a3.52 3.52 0 0 1-3-3.65c-.38-5.26-1-10.51-1.46-15.82h-15.7v1.72c.81 9 1.68 18 2.39 27 .14 1.69.62 2.46 2.3 2.92 12 3.32 23.9 6.76 35.87 10.08a7.21 7.21 0 0 0 3.66 0c11.36-3.15 22.69-6.39 34-9.6 3.85-1.09 3.77-1.11 4.14-5.23 1.18-13.17 2.43-26.34 3.64-39.52.52-4.91.9-9.79 1.36-14.99z"/>
                        </g>
                        <g onMouseEnter={this.sway} onMouseLeave={this.resetJiggle} id="layer6" className="hidden" data-name="Layer 6">
                            <path d="M1377.87 900.7c-1.82 6.89-5.41 12.48-11.9 15.84a19 19 0 0 1-4.84 1.76c-2.28.46-4.35-.58-4.72-2.8-.24-1.48.65-3.38 1.55-4.75.73-1.11 2.27-1.67 3.37-2.57 4.7-3.86 5.85-9 3.21-14.5-2.82-5.86-7.64-9.49-13.62-11.54a55 55 0 0 0-31-1.4 9.23 9.23 0 0 0-1.67.59c0 4.71.62 9-.13 13.11-1.51 8.08-7.28 13.22-14 17.27a47 47 0 0 1-8.58 3.89c-8.68 3.07-13 1.07-16.33-7.61-4.93 10.49-13.92 15.11-24.39 17.38a29.9 29.9 0 0 1-9.67.41c-6.09-.72-8.89-6.56-5.67-11.82a102.69 102.69 0 0 1 7.39-9.71c3.29-4.15 6.59-8.29 10-12.35a3.32 3.32 0 0 0 .53-4.12c-1.74-3.55-3.26-7.2-5-11.08-.37.64-.78 1.23-1.09 1.87-6.68 13.48-13.17 27.06-20.13 40.4a29 29 0 0 1-7.57 8.64c-5.92 4.79-12.68 2.62-15.4-4.53-.39-1-.71-2.1-1.16-3.43-1.6 2.72-2.92 5.32-4.55 7.7-6.31 9.2-17.23 9-23-.52-6.53-10.84-7.52-22.59-5.09-34.8.12-.6.2-1.2.28-1.8 0-.09-.06-.19-.26-.7l-5.61 3.19c.6 6.45 1.71 12.48 1.64 18.49a48.45 48.45 0 0 1-41.18 47.83 43.14 43.14 0 0 1-12.17.12c-10.48-1.3-17.13-9.2-17.5-20.43a33.59 33.59 0 0 1 9.81-25.18c8.26-8.65 18.18-15 28.49-20.86 1.6-.9 3.22-1.74 5.16-2.79-1.53-1.16-2.85-2.22-4.23-3.21-7.77-5.59-15.73-10.94-23.28-16.81-11.67-9.08-21.54-19.62-25.18-34.61v-7.34a67.94 67.94 0 0 1 12.55-26.48c9.25-12 20.71-21.6 33.46-29.64 19.24-12.12 39.59-21.84 61.94-26.66 16.23-3.51 32.63-4.07 48.54 1.58a53.63 53.63 0 0 1 15.39 8.46c11.87 9.52 13.75 22.47 9.92 36.28-6.38 23-22 37.91-43.56 46.75-16.16 6.63-33.09 9.42-50.56 6.24a30.8 30.8 0 0 1-19.67-11.89 17.83 17.83 0 0 1-3-7.48c-.21-1.25 1.12-3.45 2.34-4.08s3.79-.4 4.67.51c8.34 8.67 18.75 9.57 29.71 8.14 18-2.34 33.9-9.22 47-22 5-4.87 9.32-10.31 11.67-17a30.11 30.11 0 0 0 1.64-8.62c.25-5.64-2.46-9.75-7.51-12.24-7.94-3.92-16.47-4.28-25.07-3.87-14.76.71-28.66 4.87-42 11-16.07 7.37-31.43 15.94-44.54 28-5.12 4.73-9.62 10-12.6 16.37-5 10.65-4.16 20.8 4 29.43 5.36 5.67 11.58 10.54 17.52 15.65 5.17 4.45 10.53 8.68 15.68 13.15a2.53 2.53 0 0 0 3.46.34c7.2-4 14.47-7.91 21.66-11.94a12.89 12.89 0 0 0 3.16-2.79c5.7-6.55 12.14-12.12 20.55-14.83 9.17-3 16.13 1.76 17 11.31.13 1.31.23 2.62.34 3.92 1 .25 1.89.43 2.76.69 4.92 1.49 6.83 4.81 5.57 9.81-1.31 5.2-2.71 10.39-3.6 15.75a11.56 11.56 0 0 0 .88-1.42c5.2-11.72 10.45-23.41 15.52-35.19 1.43-3.34 2.1-7 3.53-10.37a8 8 0 0 1 3.58-4.11 23.21 23.21 0 0 1 15-1.11c4.24 1.13 5.75 4 4.26 8.13-2.32 6.43-3.64 12.93-2.09 19.76.11.49.16 1 .3 1.49s.36.95.69 1.81a14.7 14.7 0 0 0 1.48-1.92c3.49-6.44 7.21-12.78 10.31-19.4 1.93-4.11 2.64-8.77 4.42-13 .78-1.84 2.66-4.11 4.38-4.46a54 54 0 0 1 13.55-.93c3.89.23 6.87 3.66 4.94 8.42-2.44 6-3.8 12.33-2.14 18.82.9 3.49 2.36 6.84 3.45 9.93 6.32-1.43 12-3.25 17.76-3.91 14.86-1.69 28.64 1 39.91 11.75 4.93 4.72 7.47 10.76 9.25 17.2zm-76.57-18.06l-.68.75c-5 2.59-8.16 7-10.86 11.63a37.24 37.24 0 0 0-4 10.45c-.94 4.18 1.67 6.39 5.7 5a44.29 44.29 0 0 0 10.28-4.54c9.31-6.16 13.5-11.86 8.93-24.18-1-2.59-.17-4.24 2.47-5.25a54.69 54.69 0 0 1 24.64-3.19c14 1.25 26.54 5.21 33.21 19.3a6.57 6.57 0 0 0-.36-2.08 25.63 25.63 0 0 0-1.69-3.91c-5.53-9.35-14.07-14.19-24.51-15.89a53.41 53.41 0 0 0-31.6 4.28c-1.86.86-3.87 1.6-5.17-.55-5.07-8.37-8.35-17.25-6.49-27.26.63-3.35 1.65-6.63 2.64-10.54-3.08.17-5.88.31-8.68.5a3.41 3.41 0 0 0-3.35 3c-.7 2.87-1.13 5.91-2.45 8.48-5.18 10.14-10.59 20.17-16.07 30.16-1.57 2.85-4.29 2.59-5.9-.29a34.78 34.78 0 0 1-3.07-27.73c.49-1.71 1-3.42 1.73-5.85-3.66.32-6.78.45-9.84 1-.77.13-1.6 1.38-2 2.29-1.12 2.94-1.79 6.07-3.06 8.94q-10.86 24.56-22 49a21.54 21.54 0 0 1-3.26 5.45c-.86 1-2.72 1.93-3.79 1.64s-2.31-2-2.5-3.3a19.21 19.21 0 0 1 .15-7q3.09-13.85 6.64-27.59c.67-2.6-.16-3.2-2.55-3.37a45.75 45.75 0 0 1-6.09-1.24c0-2.76.09-5.09 0-7.41-.31-6.95-3.49-9.19-10-6.92-7.18 2.48-12.49 7.47-17.22 13.22a12.29 12.29 0 0 1-3.31 3c-8.61 4.83-17.31 9.5-25.93 14.32-2.15 1.2-3.68.81-5.43-.81-3.72-3.47-7.58-6.8-11.46-10.09-7.45-6.32-15.44-12.09-22.34-19-12.32-12.29-13.93-26.87-4.88-41.76a61.71 61.71 0 0 1 11.94-14.56c24.47-21.26 52.3-35.88 84.75-40.44 10.67-1.5 21.36-1 31.54 3.25 10.47 4.4 14.49 11.65 12.66 22.85a40.35 40.35 0 0 1-6.64 15.94 69.4 69.4 0 0 1-28.34 24c-17.61 8.42-35.79 13.51-55.49 7.12 3.5 1.84 7 4.09 10.86 4.69 24.65 3.89 47.2-1.5 66.91-16.92 10.75-8.41 18.39-19.31 21.44-32.9 3.53-15.71-2.17-27.17-16.68-34a62.26 62.26 0 0 0-22.13-5.35c-17.21-1.28-33.6 2.16-49.54 8.43-21.19 8.33-41.12 18.8-58.13 34.16-9.62 8.68-17.69 18.53-22.15 31a23.59 23.59 0 0 0 2.13 21.37c2.67 4.29 5.5 8.76 9.22 12.07 7.73 6.89 16 13.15 24.24 19.51 5.23 4.06 10.75 7.73 16 11.75 2.89 2.21 2.64 4.39-.5 6.17-2.84 1.6-5.77 3-8.6 4.64-10.3 5.85-20.4 12-28.21 21.15a26.93 26.93 0 0 0-6.72 19.8c.48 7.91 4.71 13 11.77 14.11a38.89 38.89 0 0 0 7.31.4c27.81-1.1 47.92-31.91 36.93-59.24-1-2.59-.59-4.22 1.81-5.56 4.63-2.57 9.14-5.36 13.84-7.79 1.23-.64 3.49-.94 4.34-.24s1 2.9.77 4.33c-.62 3.69-1.82 7.3-2.45 11-1.63 9.62-.47 18.79 4.4 27.46 3.37 6 10.49 5.56 13.39 0 2-3.78 3.93-7.59 5.77-11.45 1.31-2.75 2.42-5.59 3.59-8.41.76-1.83 2.14-3.18 4-2.21 1.09.58 1.57 2.44 2.14 3.8.2.47-.26 1.18-.25 1.78.1 4.45-.23 9 .53 13.33.69 4 4.22 4.85 7.08 1.95a40.81 40.81 0 0 0 6.18-8.24 395.29 395.29 0 0 0 23.18-48.09 5.37 5.37 0 0 1 3.49-3c.9-.11 2.81 1.82 3 3a69.63 69.63 0 0 0 7.65 21.78 4.38 4.38 0 0 1-.55 5.33q-8.4 10.3-16.66 20.71c-1.17 1.48-2.07 3.16-3.51 5.37 2 .4 3.35.93 4.67.89a34.31 34.31 0 0 0 20-7.26c4.4-3.39 6.83-7.95 6.28-13.53-.36-3.69-1.73-7.27-2.36-11a7.81 7.81 0 0 1 .5-4.78q7.58-13.42 15.57-26.59c.72-1.18 2.54-2.6 3.59-2.42s2.38 2 2.87 3.35q3.39 9.43 6.3 19c.56 1.89.31 3.92.42 5.83zm-20.59 14.66c4.45-6 9.21-12.33 14.06-18.83-1.42-3.5-3-7.52-4.71-11.65-3.09 5.1-6 10.32-9.34 15.26-1.94 2.89-3 5.44-1.42 8.91.96 2.16 1.06 4.72 1.41 6.31z"/>
                            <path d="M1301.3 882.64c3.39-.6 4.44.1 5.06 3.35 1.83 9.56-2.28 17.52-11.19 21.23-1.31.55-3.65.77-4.39 0a6.23 6.23 0 0 1-1.51-4.83 33.53 33.53 0 0 1 8.74-16.49c.82-.89 1.74-1.69 2.61-2.53zM1159.84 904.69c-.11 17.16-10 31.69-24.48 37.44a24.93 24.93 0 0 1-6.49 1.52c-8.21.87-12.59-3.52-11.83-11.74.67-7.22 4.09-13.2 9-18.23 7.91-8 17.36-14.08 27-19.74 2.85-1.67 5-.64 5.62 2.59s.95 6.44 1.18 8.16zm-6.71-3.64c-8.73 5.39-17 10.76-23.76 18.09a25 25 0 0 0-6.25 12.7c-.84 4.72 1 6.62 5.63 5.84 15.48-2.65 27.79-20.82 24.38-36.65zM1187.17 901.73a58.24 58.24 0 0 1 13.24-34.57 22.12 22.12 0 0 1 7.67-5.81c5.4-2.56 9.36.58 8.11 6.43a125.82 125.82 0 0 1-4.76 16.68c-3 8.2-6.35 16.26-9.66 24.34a30.53 30.53 0 0 1-2.87 5c-1.3 2-3.21 3.76-5.52 2.88a7.93 7.93 0 0 1-4.24-4.26c-1.12-3.39-1.37-7.1-1.97-10.69zm7.69 7.57c6.25-13.84 11.73-27.43 15.42-42.14-10.64 5.08-20.05 30.73-15.42 42.14zM1269.77 898.94c-1.59 3.39-2.44 6.87-4.53 9.24a58.7 58.7 0 0 1-10.4 8.66 3.56 3.56 0 0 1-5.13-.81c-1.35-2-.45-3.59.93-5.17 4.07-4.67 8-9.47 12.16-14 .94-1 2.93-2.13 3.94-1.77 1.19.35 1.89 2.28 3.03 3.85z"/>
                        </g>
                        <g onMouseEnter={this.sway} onMouseLeave={this.resetJiggle} id="layer5" className="hidden" data-name="Layer 5">
                            <path d="M593.88 964.69h-3.39a24.61 24.61 0 0 0-2.78-1.14q-35.34-10.14-70.71-20.19c-3.23-.91-4.67-2.72-4.93-5.93-.73-8.91-1.57-17.81-2.35-26.71-1.57-17.81-3.1-35.62-4.69-53.43-1.42-15.93-2.91-31.86-4.34-47.79-1.64-18.27-3.23-36.55-4.89-54.82-.42-4.52 1.23-6.54 5.78-6.56H682.1c5.82 0 7.14 1.28 6.7 6.93-.66 8.53-1.49 17.06-2.24 25.58q-2.08 23.91-4.18 47.81c-1.6 17.89-3.25 35.79-4.85 53.69q-2.51 27.82-4.94 55.66c-.27 3.07-1.7 4.7-4.64 5.53q-26.57 7.47-53.06 15.13c-7.02 2.02-14.01 4.15-21.01 6.24zm-88.27-207.1c.44 5.49.83 10.8 1.31 16.11q3.57 39.63 7.17 79.26t6.92 79c.18 2 .86 3.06 3 3.66 22.06 6.21 44.08 12.58 66.14 18.82a8.4 8.4 0 0 0 4.34 0c22.3-6.31 44.57-12.72 66.86-19a2.55 2.55 0 0 0 2.24-2.64c.88-10.5 1.83-21 2.78-31.48q2.73-30.07 5.48-60.14 3.12-34.73 6.15-69.44c.41-4.66.79-9.32 1.19-14.15z"/>
                            <path d="M625.56 813.94v27.57c8.74-1.25 17.29-2.41 25.82-3.7 5.13-.78 7.41 1.1 7 6.19-1.53 18.47-3.12 36.93-4.66 55.4a5.53 5.53 0 0 1-4.52 5.37c-15 4.1-30.05 8.27-45.07 12.38-4.42 1.21-6.94-.69-7-5.3-.07-6.59 0-13.18 0-19.77 0-3.48 1-4.68 4.34-5.62 8.14-2.28 16.26-4.6 24.45-6.68 2.4-.61 3.62-1.58 3.44-4.12-.11-1.58 0-3.16 0-5.09L613 873.33c-3.24.55-6.48 1.12-9.73 1.63-3.82.6-6-1.15-6.12-5-.07-2.16 0-4.33 0-6.49v-71.13c0-5.23 1.45-6.65 6.74-6.65h52.53c5.24 0 6.76 1.55 6.41 6.8s-.79 10.7-1.33 16c-.42 4.11-1.9 5.39-6 5.4h-26.55zm27.64-18.6h-46.49v69.26a12.7 12.7 0 0 0 1.87 0c8-1.39 16.11-2.77 24.15-4.21 4.55-.82 7 1.44 6.7 6-.37 5-.63 10-1 14.93-.25 3.73-1.21 4.94-4.83 5.95-8.23 2.3-16.48 4.52-24.69 6.87-.9.26-2.27 1.13-2.32 1.79-.23 3.43-.11 6.89-.11 10.26.52.11.72.23.87.18 11.87-3.23 23.75-6.43 35.58-9.8a3.57 3.57 0 0 0 1.74-2.65c1-10.58 1.9-21.17 2.8-31.77.4-4.75.76-9.5 1.16-14.46-8.78 1.26-17.33 2.45-25.87 3.72-4.59.68-6.83-1.11-6.83-5.73v-35c0-4.54 1.52-6 6.13-6.06h24.29c5.87 0 5.86 0 6.44-5.72.12-1.11.26-2.23.41-3.56zM559.41 878.08V792.3c0-5.06 1.52-6.59 6.53-6.61h15.53c4.5 0 6.19 1.67 6.19 6.09v119.76c0 4.78-2.47 6.81-7 5.57q-24.84-6.81-49.65-13.78c-3.63-1-4.49-2.25-4.51-6.09v-20.62c0-5.15 2.46-6.91 7.46-5.52l22.52 6.23c.88.26 1.79.46 2.93.75zm9.45-82.78V882.73c0 5.36-2.32 7.09-7.54 5.68-3.26-.88-6.51-1.81-9.77-2.7l-15.72-4.23c0 3.84.13 7.31 0 10.77-.1 2 .58 2.93 2.59 3.46 9.61 2.56 19.17 5.29 28.76 7.94 3.58 1 7.16 1.94 10.93 3V795.3z"/>
                        </g>
                        <g onMouseEnter={this.sway} onMouseLeave={this.resetJiggle} id="layer2" className="hidden" data-name="Layer 2">
                            <path d="M38.71 814.16c-.38-12.16-1.53-23.36-.86-34.45.74-12.35 7.82-20.22 18.61-21.16a30.38 30.38 0 0 1 16.19 3.12c9.52 5.11 18.28 11.64 28 18 2.67-2.27 6-5.72 10-8.34 6-4 12-8.26 18.58-10.89 17.59-7 31.62 1.61 32.86 20.53.7 10.6-.7 21.33-1.16 32l-1.52.52a55.74 55.74 0 0 1 6.51 2.43c7.93 4.12 16.48 7.47 23.52 12.8 13.71 10.37 13.8 24.93 1.15 36.56-8.34 7.68-18.68 11.66-29.21 15.22-.74.26-1.49.48-2.18.69 1.16 8.54 2.7 16.86 3.29 25.24a54.86 54.86 0 0 1-1.27 15.74c-3.38 14.84-14.46 21.07-29 16.72-10.73-3.2-19.4-9.81-27.65-17.06-1.44-1.27-2.82-2.61-4.38-4-4.66 3.8-8.94 7.93-13.84 11.12-5.6 3.65-11.46 7.26-17.71 9.47-15.88 5.6-28-2.18-30.91-18.8-2-11.7 0-23 2.43-34.34.26-1.23.46-2.47.61-3.26-8-3.7-15.84-6.95-23.29-10.89a42.8 42.8 0 0 1-10.19-8c-9.43-9.64-9.47-21.41-.23-31.33 6.72-7.23 15.38-11.45 24.42-15 2.64-1.09 5.52-2.05 7.23-2.64zm61.11.12c-4.81.22-9.64.23-14.41.76a6.67 6.67 0 0 0-4.53 2.55q-8.77 14.33-17 29a6.34 6.34 0 0 0 0 5.22c4.56 8.44 9.32 16.79 14.32 25a6.87 6.87 0 0 0 4.91 2.74q16.57.38 33.14 0a6.9 6.9 0 0 0 4.93-2.76q7.51-12.28 14.32-25a7 7 0 0 0 0-5.6c-3.57-7-7.88-13.59-11.27-20.65-3.86-8-9.33-12.47-18.63-11.07a30.14 30.14 0 0 1-5.83-.19zm50.43 69.65c-8.28 1.22-16 2.32-23.77 3.55a4.73 4.73 0 0 0-2.77 1.55c-5.85 7.4-11.59 14.88-17.36 22.34 6.14 7.33 17.89 15.68 26.35 18.75 11.52 4.16 18.64-.07 20.74-12.25 1.94-11.55-.53-22.62-3.24-33.94zm-56.94 27.54c-5.91-7.62-11.57-15-17.32-22.24a4.8 4.8 0 0 0-2.66-1.74c-7.85-1.27-15.72-2.38-23.83-3.58-.57 2.19-1.23 4.33-1.66 6.51-2.08 10.58-4 21.2-.46 31.84 2.51 7.58 8 10.61 15.77 8.65 12.23-3.12 21.35-11.13 30.11-19.44zm.14-124.79c-8.59-8-17.27-15.57-28.64-19-9.39-2.85-15.82.78-18.12 10.28-2.7 11.2-.82 22.17 1.93 33 9.41-1.36 18.42-2.59 27.41-4a5.66 5.66 0 0 0 2.95-2.14c4.73-5.79 9.34-11.79 14.42-18.14zm57.44 24.18c.43-1.74.84-3.11 1.1-4.51 1.88-10 3.37-20 .36-30-2.27-7.5-7.67-11-15-9.39-12.82 2.91-22.29 11.18-31.29 19.91 5 6.3 9.7 12.2 14.44 18a5 5 0 0 0 2.53 1.93c9.11 1.49 18.27 2.73 27.81 4.06zm6.54 11.38c-3.53 8.84-6.87 17.14-10.13 25.48a4.06 4.06 0 0 0-.14 2.7c2.94 7.41 6 14.77 9.1 22.35 1.29-.35 2.53-.62 3.72-1 9.36-3.07 18.4-6.84 25.65-13.76 6.85-6.52 7.36-13.32 1.26-19.85-8.08-8.62-18.67-12.61-29.51-15.92zM43.25 872.79c2.41-6.17 4.35-12.29 7.15-18 2-4.12 2-7.43.06-11.58-3.13-6.74-5.45-13.86-8.09-20.75-9.42 2.1-20.58 7.55-26.94 13-8.89 7.67-9 15.88-.15 23.56 8.03 7.01 17.66 10.76 27.97 13.77zm56.46 32.42l13.21-16.08H86.29zm49-85.55l-20.31-3.63 13.31 22.72zm-91.15 19.16l13.27-22.79-20.12 3.74zm31.74-33.2h21l-10.59-12.46zm41.59 72.74l16.8-3.14-6-15.83zm-79.08-3.13l16.65 3-10.7-18.82z"/>
                            <path d="M99.8 827.47a21.68 21.68 0 1 1-21.63 21.83 21.87 21.87 0 0 1 21.63-21.83z"/>
                        </g>
                        <g id="layer3" className="hidden" data-name="Layer 3" stroke="#000" strokeMiterlimit="10" strokeWidth="2">
                            <path fill="#fff" d="M877.09 563.91v71.06"/>
                            <path fill="none" d="M1670.82 730.97v-96h-1565v149M592.74 634.97l.08 104M1203.54 634.97l.28 104M689.82 1197.97l185.44-350 184.56 352M874.82 847.97l2.27-213"/>
                        </g>
                            <circle className="layer4" onMouseEnter={this.toggleDraw} onClick={this.toggleDraw} cx="879.29" cy="282.46" r="280.46" fill="#fff" stroke="#000" strokeMiterlimit="10" strokeWidth="4" data-name="Layer 4"/>                        
                        <g data-name="Layer 1">
                            <path d="M822.53 382.29a6.56 6.56 0 0 1-6.4-5.35l-11.32-61-37.27 10.64a6.51 6.51 0 0 1-8.1-7.8l10.89-44.55-32.52-10.78a6.48 6.48 0 0 1-4.46-5.85l-2.08-44.06c0-26.36 5.84-47.57 17.86-65V74.73a6.56 6.56 0 0 1 3.29-5.66 6.45 6.45 0 0 1 6.56.09l58 34.79c18.1-6.53 42.35-10.56 64.24-10.56 21 0 43.25 3.81 61.6 10.55l56.41-34.74a6.5 6.5 0 0 1 6.6-.17 6.61 6.61 0 0 1 3.33 5.69v73.85c12.55 18.15 18.92 39.91 18.92 64.81l-2.55 44.65a6.49 6.49 0 0 1-4.36 5.77l-31.82 11 10.84 43.56a6.64 6.64 0 0 1-7.52 9.54l-37.23-9.6-11.24 58.73a6.51 6.51 0 0 1-3.44 4.59 6.62 6.62 0 0 1-5.7.11l-54.83-25.58-54.95 25.58a6.41 6.41 0 0 1-2.75.61zm56.63-39.36h2.08a6.53 6.53 0 0 1 2.75.61l49 22.83 11-57.33a6.35 6.35 0 0 1 2.92-4.27 6.5 6.5 0 0 1 5.11-.82l33.37 8.61-10.08-40.4a6.53 6.53 0 0 1 4.19-7.75l33.32-11.5 2.34-39.87c0-22.5-6-42.34-17.72-58.55a6.59 6.59 0 0 1-1.22-3.81v-64.3l-49.25 30.31a6.48 6.48 0 0 1-5.79.52c-17.45-6.84-39.26-10.79-59.9-10.79-21.28 0-45.83 4.24-62.51 10.79a6.45 6.45 0 0 1-5.72-.49l-50.93-30.49v64.43a6.49 6.49 0 0 1-1.23 3.81c-11.18 15.45-16.63 34.68-16.63 58.78l1.86 39.28 34 11.2a6.47 6.47 0 0 1 4.28 7.69l-9.69 39.51 33.37-9.51a6.35 6.35 0 0 1 5.2.73 6.43 6.43 0 0 1 3 4.34l11.1 59.84 49-22.8a6.81 6.81 0 0 1 2.77-.6z"/>
                            <path d="M879.16 307.9c-19 0-39.51-6-39.51-19.09s20.48-19.1 39.51-19.1 39.53 6 39.53 19.1-20.49 19.09-39.53 19.09zm0-25.17c-16.47 0-25.57 4.66-26.6 6.65 1 .86 10.13 5.54 26.6 5.54s25.55-4.66 26.55-6.61c-1-.92-10-5.58-26.55-5.58z"/>
                            <path d="M846.65 297.43a6.5 6.5 0 0 1-6.51-6.51V190.46l-27.35-17.59a6.49 6.49 0 1 1 7-10.91l30.34 19.5a6.53 6.53 0 0 1 3 5.46v104a6.47 6.47 0 0 1-6.48 6.51zM911.65 297.43a6.51 6.51 0 0 1-6.5-6.51v-104a6.48 6.48 0 0 1 3-5.46l30.35-19.5a6.49 6.49 0 1 1 7 10.91l-27.36 17.6v100.45a6.5 6.5 0 0 1-6.49 6.51z"/>
                            <text transform="matrix(.97 0 0 1 731.7 489.09)" fontSize="97.51" fontFamily="STHeitiTC-Light, Heiti TC" fontWeight="300">
                            ADAM
                            </text>
                            <circle cx="878.87" cy="282.94" r="268.97" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="4"/>
                            <circle cx="878.29" cy="282.46" r="280.46" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="4"/>
                        </g>
                    </svg>

                </div>
            </div>
        )
    }

}




export default Animation;