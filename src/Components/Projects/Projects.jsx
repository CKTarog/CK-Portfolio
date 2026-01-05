import { useState } from 'react';
import ButtonGroup from './ButtonGroup';
import ProjectCarousel from './swiperCarousel';

const GroupData = [
    {
        id: 1,
        image: './ProjPreviews/GeoRat_preview.png',
        title: 'GeoRat',
        about: 'Geography Visual Novel Game',
        desc: 'A visual novel game to make learning geography fun and engaging. A Bootcamp Finals Project.',
        lang: ['RenPy (Python based)', 'Java'],
        role: ['Character Designer', 'Co-UI Designer', 'Co-story Writer', 'Co-Front-End Developer'],
        projImages: [...Array(7)].map((_, i) => `./ProjImages/GeoRat_${i + 1}.png`)

    },
    {
        id: 2,
        image: './ProjPreviews/Phlenvo_Preview.png',
        title: 'Phlenvo',
        about: 'Binhi Promotional Website (Prototype)',
        desc: 'A prototype website created to promote the Binhi product, gift cards made from seed paper. An Entreprenuership finals project.',
        lang: ['HTML5', 'CSS3'],
        role: ['Co-UI Designer', 'Co-Web Developer'],
        projImages: [...Array(3)].map((_, i) => `./ProjImages/Phlenvo_${i + 1}.png`)
        
    },
    {
        id: 3,
        image: './ProjPreviews/LNF_preview.png',
        title: 'LNF App',
        about: 'Lost and Found Log App',
        desc: 'An app created to turn Lost and Found records digital for ease of search. A Dastruc Finals Project.',
        lang: ['Python', 'Python Tkinter', 'Json'],
        role: ['Front-End Developer'],
        projImages: [...Array(6)].map((_, i) => `./ProjImages/LNF_${i + 1}.png`)
        
    }
]


const SoloData = [
    {
        image: './ProjPreviews/MoomSite_preview.png',
        title: 'MoomSite',
        about: 'Nanashi Mumei Fan Site',
        desc: 'A fanmade website about the VTuber Nanashi Mumei. Created through multiple assignmnets in WebProg Subject.',
        lang: ['React', 'Bootstrap5', 'CSS3', 'HTML5'],
        role: ['--'],
        projImages: [...Array(7)].map((_, i) => `./ProjImages/MoomSite_${i + 1}.png`)
        
    },
    {
        image: './ProjPreviews/StudentRFID_preview.png',
        title: 'Student Profile Viewer',
        about: 'Student RFID Tag Reader',
        desc: 'An app to view a students profile based on given RFID tag from the students APC ID with the RFID Reader. An E-Tech Activity.',
        lang: ['MS Power Apps', 'MS Lists'],
        role: ['--'],
        projImages: [...Array(5)].map((_, i) => `./ProjImages/StudentRFID_${i + 1}.png`)
        
    },
    {
        image: './ProjPreviews/PhotoDrop_preview.png',
        title: 'PhotoDrop',
        about: 'Image Storage App',
        desc: 'An app to store, add data, and view the images that is uploaded into it. An E-Tech Activity',
        lang: ['MS Power Apps', 'MS Sharepoint'],
        role: ['--'],
        projImages: [...Array(5)].map((_, i) => `./ProjImages/PhotoDrop_${i + 1}.png`)
        
    }
]

const Projects = () => {
    const [preview, setPreview] = useState('group');
    const [activeProject, setActiveProject] = useState(null);
    const [activeID, getID] = useState(0);

    const currentProject = preview === "group" ? GroupData : SoloData;

    const getProjDesc = currentProject[activeID];
    
    return(
    <section id="projects" className='relative flex flex-col min-h-dvh py-13 snap-end dark:text-[#fff1dc] text-[#270E12] transition-all place-content-center'>

        <h1 className='font-bold lg:text-7xl text-5xl lg:top-10 lg:text-start text-center p-2'>Projects</h1>

        <div className='absolute opacity-50 pl-10 space-y-2 lg:visible invisible w-70'>
            <p className='font-semibold text-6xl tracking-widest'>{preview === 'group'? "Group": "Solo"}</p>
            <p className='text-lg'>Click the projects to view more details</p>
        </div>

        <div className='flex lg:flex-row flex-col-reverse gap-2 w-full'>

            <div className='lg:bg-none p-5 lg:place-content-end lg:text-start text-center lg:m-0 -mt-2 lg:w-130 shrink'>
                <p className='lg:hidden visible text-sm opacity-50 p-2'>Click the projects to view more details</p>
                <h1 className='font-bold self-end text-3xl pb-2 '>Description</h1>
                <p className='self-end md:text-lg text-normal text-[#d2b48c]'>{getProjDesc.desc}</p>
            </div>

            <div className='flex items-center justify-center w-full'>
                <ProjectCarousel currentProject={currentProject} activeProject={activeProject} setActiveProject={setActiveProject} getID={getID}/>
            </div>

            <ButtonGroup preview={preview} setPreview={setPreview} className="lg:m-0 md:-mt-20 -mt-50"/>
        </div>

    </section>
    );
}
export default Projects;
