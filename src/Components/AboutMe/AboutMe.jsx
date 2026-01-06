import { MdArrowBackIosNew } from "react-icons/md";
import { Link } from 'react-router-dom';
import MainAbout from "./MainAbout";
import Others from "./Others";

const AboutMe = () => {
    return(
        <div className="relative min-h-screen">

        {/*top bar*/}
        <div className="sticky top-0 left-0 right-0 z-10 flex w-full items-center space-x-4 p-2 pl-5 dark:text-[#fff1dc] text-[#733a3d] backdrop-blur-lg lg:space-x-9">
            {/*Goes back to main page*/}
            <Link to="/">
            <MdArrowBackIosNew className="lg:hover:scale-110 lg:hover:bg-[#733a3d] lg:hover:text-[#fff1dc] lg:dark:hover:text-[#733a3d] lg:dark:hover:bg-[#fff1dc] lg:border-0 border-2 dark:border-[#fff1dc] border-[#733a3d] p-1 rounded-full w-6 h-6 duration-200"/>
            </Link> 

            <h1 className="font-bold text-4xl">About Me</h1>
        </div>
        
        <MainAbout/>

        {/* separator from professional stuff to personal stuff */}
        <div className="inline-flex w-full items-center justify-center dark:text-[#d2b48c] text-[#733a3d] pt-20">
            <hr className="bg-neutral-quaternary my-8 h-px w-64 border-0"/>
            <span className="text-heading bg-neutral-primary absolute left-1/2 -translate-x-1/2 px-3 font-medium uppercase tracking-[1em]">others</span>
        </div>
        <Others/>

        {/* one of my drawings inside mask at the bottom right side */}
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