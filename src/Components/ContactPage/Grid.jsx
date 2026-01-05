import RevealLinks from '../Motions/FlipLink';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineAlternateEmail   } from "react-icons/md";
import { useState } from 'react';
import Notif from '../General/Notif';

const Grid = ({ setForm, showForm }) => {
    const [showNotif, setNotif] = useState(false);

    const handleCopy = () => {
    navigator.clipboard.writeText("cftarog@student.apc.edu.ph")
      .then(() => {
        setNotif(true);
        setTimeout(() => setNotif(false), 1500);
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };

    return(
        <div className={`lg:w-1/2 ${showForm ? "hidden" : "grid"} w-full py-15 md:p-0 md:h-170 h-150 grid grid-cols-9 grid-rows-9 lg:gap-4 gap-2 *:rounded-2xl *:outline-[#d2b48c] *:place-content-center *:font-bold self-center dark:text-[#d2b48c] text-[#270E12] *:transition-colors @container`}>
            <div className="col-start-2 col-span-3 row-start-1 row-span-4 overflow-hidden">
                <img src="./contact_img3.png" className='w-full h-full object-cover' />
            </div>
            <div className="col-span-4 text-center @md:text-2xl">Charisse Keira Tarog</div>
            <div onClick={handleCopy} className="col-span-4 row-start-2 flex @lg:text-3xl @md:text-2xl text-sm items-center gap-2 cursor-pointer lg:animate-none animate-pulse">
                <MdOutlineAlternateEmail/>
                <p className='dark:hover:text-[#fff1dc] hover:text-[#270E12]' title="Copy Email">cftarog</p>
            </div>

            {showNotif && (<Notif>Email Copied!</Notif>)}

            <div className="col-span-4 row-start-3 row-span-3 overflow-hidden">
                <img src="./contact_img1.jpg" className='w-full h-full object-cover' />
            </div>
            <div className="col-start-2 row-start-5 col-span-3 @lg:text-3xl @md:text-2xl cursor-pointer flex items-center gap-2 lg:animate-none animate-pulse">
                <FaLinkedin/>
                <div title="Go to my LinkedIn"><RevealLinks link="https://www.linkedin.com/in/charisse-keira-tarog-b6a007256/">LinkedIn</RevealLinks></div>
                </div>
            <div className="col-start-2 row-start-6 col-span-4 row-span-4 overflow-hidden">
                <img src="./contact_img2.jpg" className='w-full h-full object-cover' />
            </div>
            <div className="row-start-6 col-span-3 @lg:text-3xl @md:text-2xl cursor-pointer flex  items-center gap-2 lg:animate-none animate-pulse">
                <FaGithub/>
                <div title="Go to my Github"><RevealLinks link="https://github.com/CKTarog">GitHub</RevealLinks></div>
                </div>
            <div className="row-start-7 col-span-3 row-span-2 overflow-hidden ">
                <img src="./contact_img4.jpg" className='w-full h-full object-cover' />
            </div>

            <button onClick={() => setForm(true)} disabled={false} className="row-start-9 col-span-3 @lg:text-2xl @md:text-lg font-black uppercase cursor-pointer shadow-md shadow-[#d2b48c]/20 dark:shadow-[#733a3d]/20 hover:scale-110 duration-200 lg:shadow-none lg:hover:scale-none lg:animate-none animate-pulse dark:lg:hover:text-[#d2b48c] lg:cursor-not-allowed lg:pointer-events-none lg:hover:text-[#733a3d] transition-transform">Say Hello!</button>
        </div>
        
    );
}

export default Grid;