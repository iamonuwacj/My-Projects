import { useState } from 'react';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Copywrite from './components/Copywrite/Copywrite';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {

    const [toggle, setToggle] = useState(true)

    return (
        <div className="App" style={{ backgroundColor: toggle ? "#222222" : "white"}}>
            <Header toggleState={toggle} changeState={() => setToggle(!toggle)}/>
            <Hero toggleState={toggle}/>
            <About toggleState={toggle}/>
            <Skills toggleState={toggle}/>
            <Projects toggleState={toggle}/>
            <Contact toggleState={toggle}/>
            <Copywrite toggleState={toggle}/>
        </div>
    )
}

export default App;
