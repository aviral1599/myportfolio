import logo from './logo.svg';
import './App.css';
import './assets/main.css';
import Navbar from "./components/navbar";
import About from "./components/about";
import Contact from "./components/contact";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Education from "./components/education";

function App() {
  return (
    <main className="text-neutral-900 bg-white body-font">
      <Navbar/>
      <About/>
      <Education/>
      <Projects/>
      <Skills/>
      <Contact/>
    </main>
  );
}

export default App;
