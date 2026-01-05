import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavbarOutlet, Theme} from './Components';
import { Desc, Skills, Projects, ContactPage, AboutMe} from './Components';

function App() {
  return (
    <BrowserRouter>
      <Theme>
          <Routes>
            <Route element={<NavbarOutlet />}>
              <Route path="/" element={
                  <div className="snap-always overflow-scroll snap-mandatory snap-y h-dvh no-scrollbar m-0 p-0">
                    <Desc />
                    <Skills />
                    <Projects />
                    <ContactPage />
                  </div>}/>
            </Route>
            <Route path="/about" element={<AboutMe />} />
          </Routes>
      </Theme>
    </BrowserRouter>
  )
}

export default App
