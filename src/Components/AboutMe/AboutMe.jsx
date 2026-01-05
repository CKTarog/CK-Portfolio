import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from 'react-router-dom';
import MainAbout from "./MainAbout";
import Others from "./Others";

const AboutMe = () => {
    return(
        <div className="relative min-h-screen dark:bg-[#270E12]/30 bg-[#fff1dc]/30">    
        <div className="sticky top-0 left-0 right-0 z-10 flex w-full items-center space-x-4 p-2 pl-5 dark:text-[#d2b48c] text-[#733a3d] backdrop-blur-lg lg:space-x-9">
            <Link to="/"><MdArrowBackIosNew/></Link> {/*Goes back to main page*/}
            <h1 className="font-bold sm:text-2xl lg:text-4xl">About Me</h1>
        </div>
        
        <MainAbout/>
        <div className="inline-flex w-full items-center justify-center dark:text-[#d2b48c] text-[#733a3d] pt-20">
            <hr className="bg-neutral-quaternary my-8 h-px w-64 border-0" />
            <span className="text-heading bg-neutral-primary absolute left-1/2 -translate-x-1/2 px-3 font-medium uppercase tracking-[1em]">others</span>
        </div>
        <Others/>
        <section className="absolute inset-0 overflow-hidden">
            <div className="absolute bottom-0 right-0 translate-x-12 translate-y-7">
                <div className=" mask-no-repeat  mask-contain mask-[url(/mask-30.svg)]">
                    <img className="w-65 h-50 rounded-2xl drop-shadow-lg dark:opacity-20 opacity-40" src="./rockzami.png"/>
                </div>
            </div>
        </section>
        </div>
    );
}

export default AboutMe;