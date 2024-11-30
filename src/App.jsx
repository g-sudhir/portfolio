import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HamburgerNav from './components/Navbar/HamburgerNav';
import Profile from './components/Profile/Profile';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles/global.css';
import './styles/mediaqueries.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HamburgerNav />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App; 