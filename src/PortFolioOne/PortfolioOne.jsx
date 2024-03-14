import Media from "react-media";

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
import HomeMobile from "./mobilecomponents/HomeMobile";
import ContactMobile from "./mobilecomponents/ContactMobile";
import SkillsMobile from "./mobilecomponents/SkillsMobile";
import ProjectsMobile from "./mobilecomponents/ProjectsMobile";
import ExperienceMobile from "./mobilecomponents/ExperienceMobile";

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
        {/* <NavBar
          experience={experience}
          contact={contact}
          projects={projects}
          home={home}
          skills={skills}
        /> */}
        {/* <HomeTwo li={getHome} /> */}
        {/* <Home li={getHome} /> */}
        {/* <Skills li={getSkills} /> */}
        {/* <Projects li={getProjects} /> */}
        {/* <Experience li={getExperience} /> */}
        {/* <ContactMe li={getContact} /> */}
        <Media query={{ minWidth: 1000 }}>
          {(matches) =>
            matches ? (
              <>
                <NavBar
                  experience={experience}
                  contact={contact}
                  projects={projects}
                  home={home}
                  skills={skills}
                />{" "}
                <HomeTwo li={getHome} />
                <Skills li={getSkills} />
                <Projects li={getProjects} />
                <Experience li={getExperience} />
                <ContactMe li={getContact} />
              </>
            ) : (
              <>
                <HomeMobile />
                <SkillsMobile />
                <ProjectsMobile />
                <ExperienceMobile />
                <ContactMobile />
              </>
            )
          }
        </Media>

        {/* <HomeMobile /> */}
      </Background>
    </>
  );
}
