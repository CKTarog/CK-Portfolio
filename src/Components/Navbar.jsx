import { MdKeyboardArrowLeft , MdKeyboardArrowRight  } from "react-icons/md";
import { useState, useEffect } from 'react';
import { Link,Outlet  } from "react-router-dom";

const NavbarOutlet = ({scrollToSection}) => {
    return(
        <>
        <Navbar scrollToSection={scrollToSection}/>
        <Outlet/>
        </>
    );  
}
const Navbar = ({children, scrollToSection}) => {
    //manipulates the toggle nav button shown on small screens
    const [showNav, setNav] = useState(false);

    //some sizes arent considered 'sm' but will make the buttons cramped, to avoid that im manually disabling the nav on a certain size
    useEffect(() => {
    const checkWidth = () => {
      if (window.innerWidth > 768) {
        setNav(true);  
      } else {
        setNav(false); 
      }
    };

    checkWidth();

    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
    }, []);

    if (showNav === null) return null;

    return (
        <>
        <nav className="flex justify-between bg-transparent items-center p-2 font-size-sm sticky top-0 left-0 right-0 backdrop-blur-sm z-10">
            <button onClick={() => scrollToSection("contact")} className="rounded-full p-1 md:px-4 px-2 font-bold lg:text-lg text-sm bg-linear-to-r transition duration-300 ease-in-out cursor-pointer hover:scale-110 focus:outline-offset-3
            from-[#d2b48c] to-[#fff1dc] text-black/70 hover:text-white hover:from-[#270E12] hover:to-[#733a3d]
            dark:from-[#270E12] dark:to-[#733a3d] dark:text-white/70 dark:hover:text-[#270E12] dark:hover:from-[#635147] dark:hover:to-[#d2b48c]">
                Contact Me
            </button>
            <div className="flex space-x-2 items-center">
            <div className={`space-x-2 text-sm md:text-lg *:rounded-full *:transition *:duration-200 *:ease-in *:md:px-2
            *:md:text-[#270E12]/50 *:text-[#270E12] *:md:hover:text-[#270E12] *:drop-shadow-sm *:md:hover:drop-shadow-[#733a3d]/30
            *:md:dark:text-[#fff1dc]/30 *:dark:text-[#fff1dc] *:md:dark:hover:text-[#fff1dc] *:dark:hover:drop-shadow-[#fff1dc]/30 md:visible ${showNav ? "*:visible" : "*:hidden"}`}>
                <button onClick={() => scrollToSection("skills")}>Skills</button>
                <button onClick={() => scrollToSection("projects")}>Projects</button>
                <Link to="/about">About Me</Link>
            </div>

                <button onClick={() => setNav((prev) => !prev)} 
                onKeyDown={(e) => {
                    if (e.key === "ArrowRight") setNav(false);
                    if (e.key === "ArrowLeft") setNav(true);
                }} 
                className="md:hidden">
                    {showNav ? <MdKeyboardArrowRight className="p-1 dark:bg-[#fff1dc] dark:text-[#270E12] dark:outline-[#270E12] bg-[#270E12] text-[#fff1dc] rounded-full"/> : <MdKeyboardArrowLeft className="p-1 rounded-full outline text-[#270E12] dark:text-[#fff1dc]"/>}
                </button>
            </div>
        </nav>
            {children}
        </>
    );
}

export default NavbarOutlet;