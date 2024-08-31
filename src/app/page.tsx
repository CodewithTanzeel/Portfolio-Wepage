
import About from "./components/about";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Project from "./components/projects";
import Skill from "./components/skill";

export default function Home() {
  return (
    <div id="main">
      <Hero /> 
      <Skill />
      <About />
      <Project />
       <Contact />
    </div>
  );
}

