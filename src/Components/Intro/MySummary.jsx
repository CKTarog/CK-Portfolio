import TiltCard from "../Motions/TiltCard";
import Profile from "./Profilepic";
import WordReveal from '../Animations/PerWordReveal';

const Desc = ({scrollToSection}) =>{
    return(
        <div className='snap-center flex md:flex-row flex-col-reverse items-center lg:place-content-center place-content-start min-h-dvh mx-auto py-13'>

            {/*using tiltcard from framer-motion for image effects*/}
            <TiltCard>
                <Profile/>
            </TiltCard>

            {/*Own Info*/}
            <div className='p-4 py-4 m-4 space-y-3 dark:text-[#fff1dc] text-[#270E12] font-bold text-center content-center lg:w-200 md:w-130 h-70 w-auto'>
                <h1 className='lg:text-7xl md:text-6xl text-4xl'>Charisse Keira Tarog</h1>
                <p className='dark:text-[#d2b48c] text-[#733a3d] lg:text-4xl text-2xl transition-all duration-400 '><WordReveal>Diligent Student capable of being a front-end and back-end developer.</WordReveal></p>
                
                {/*contact me button, with shine effect*/}
                <button onClick={() => scrollToSection("contact")} className="mt-3 md:scale-150 scale-110 rounded-full px-5 p-2 transition duration-200 ease-in-out overflow-hidden group cursor-pointer md:hover:scale-170 hover:scale-130 hover:outline-1 hover:outline-[#d2b48c] bg-linear-to-r from-[#d2b48c] to-[#fff1dc] hover:from-[#270E12] hover:to-[#733a3d] hover:text-[#fff1dc]
                dark:from-[#270E12] dark:to-[#733a3d] dark:hover:from-[#d2b48c] dark:hover:to-[#fff1dc] dark:hover:outline-[#270E12] dark:hover:text-[#270E12]">
                    <span className="absolute bg-white/30 inset-0 rotate-45 -translate-x-full group-hover:translate-x-full blur-sm transition-transform duration-500"></span>
                    <span className="relative z-10">Get In Touch</span>
                </button>
            </div>
        </div>
    );
}

export default Desc;