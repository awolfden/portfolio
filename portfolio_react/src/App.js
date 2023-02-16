import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Index from './Index/Index';
import About from './About/About';
import Projects from './Projects/Projects';
import Resume from './Resume/Resume';


export default function App() {
  return (
    <Router>
      <div>            
        <Routes>
          <Route path="/" element={<Index/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/resume" element={<Resume/>} />
        </Routes>
      </div>
    </Router>
  );
}
