import './App.css'
import { Routes, Route } from "react-router-dom";
import { NavbarOutlet, Theme} from './Components';
import { Desc, Skills, Projects, ContactPage, AboutMe} from './Components';
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Theme>
          <Routes>
            <Route element={<NavbarOutlet />}>
              <Route path="/" element={
                  <div className="snap-always overflow-scroll snap-mandatory snap-y h-dvh no-scrollbar m-0 p-0">
                    <Desc id="desc" />
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
