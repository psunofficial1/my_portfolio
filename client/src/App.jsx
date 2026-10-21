import { profile, skills, projects, experiences } from "./data";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About"
import Skills from "./components/skills";
import Projects from "./components/Projects";
import Journey from "./components/journey";

function App() {
  return (
    <>
    <Navbar profile = {profile}/>
      <Hero profile={profile} />
      <About skills={skills}/>
      <Journey experiences={experiences} />
      <Skills skills={skills}/>
      <Projects projects={projects}/>
    
    </>
  );
}

export default App;