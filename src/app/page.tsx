// Importing components for different sections of the page
import About from "./components/about";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Project from "./components/projects";
import Skill from "./components/skill";

// Home component which serves as the main page
export default function Home() {
  return (
    <div id="main">
      {/* Main sections of the page */}
      <Hero /> 
      <Skill />
      <About />
      <Project />
      <Contact />
    </div>
  );
}


