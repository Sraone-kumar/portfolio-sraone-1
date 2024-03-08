// import ProjectCard from "./components/ProjectCard"
import Background from "./components/Background";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import ContactMe from "./components/ContactMe";
// import Test from "./components/Test";
import { useState } from "react";
import HomeTwo from "./components/HomeTwo";
import Skills from "./components/Skills";
export default function PortfolioOne() {
  const [experience, getExperience] = useState();
  const [contact, getContact] = useState();
  const [projects, getProjects] = useState();
  const [home, getHome] = useState();
  const [skills, getSkills] = useState();
  return (
    <>
      <Background>
        {/* <Test/> */}
        {/* <ProjectCard/> */}
        <NavBar
          experience={experience}
          contact={contact}
          projects={projects}
          home={home}
          skills={skills}
        />
        <HomeTwo li={getHome} />
        {/* <Home li={getHome} /> */}
        <Skills li={getSkills} />
        <Projects li={getProjects} />
        <Experience li={getExperience} />
        <ContactMe li={getContact} />
      </Background>
    </>
  );
}
