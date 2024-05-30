import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar.js';
import Home from './Home.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App;
