import React, {Component} from 'react';
import './App.css';
import Navigation from './Navigation/Navigation';
import Animation from './Animation/Animation';
import Projects from './Projects/Projects';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';



class App extends Component {
  constructor(){
    super();
    this.state = {

    }

  }


  render(){
    return (
      <div className="App">
        <Navigation/>
        <Animation/>
        <Projects/>
        <About/>
        <Contact/>
        <Footer/>
      </div>
    )
  }
  
}

export default App;
