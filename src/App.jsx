import './App.css'
import { Routes, Route } from "react-router-dom";
import { NavbarOutlet, Theme} from './Components';
import { Desc, Skills, Projects, ContactPage, AboutMe} from './Components';
import { HashRouter } from "react-router-dom";

function App() {
  //links dont work properly when deployed, need a workaround:
  //manual scroll to section of the site function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <HashRouter>
      <Theme>
          <Routes>
            <Route element={<NavbarOutlet scrollToSection={scrollToSection} />}>
              <Route path="/" element={
                  //main content is in a snapping scroll
                  <div className="snap-always overflow-scroll snap-mandatory snap-y h-dvh no-scrollbar m-0 p-0">
                    <Desc scrollToSection={scrollToSection}/>
                    <Skills id="skills" />
                    <Projects id="projects" />
                    <ContactPage id="contact" />
                  </div>}/>
            </Route>
            <Route path="/about" element={<AboutMe />} />
          </Routes>
      </Theme>
    </HashRouter>
  )
}

export default App
