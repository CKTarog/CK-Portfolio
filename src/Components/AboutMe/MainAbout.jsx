const MainAbout = () => {
    return(
        <>
        <article className="p-6 dark:text-[#d2b48c] text-[#733a3d] lg:px-20">
            <h1 className="text-4xl font-black uppercase transition-all lg:text-6xl">Education</h1>
            <div className="flex flex-col items-start space-y-5 lg:flex-row">
            <section className="flex flex-col items-center space-y-4 md:flex-row md:space-x-10">
                <div className="pl-4 transition-all lg:pl-10">
                    <h1 className="py-3 text-2xl font-bold uppercase lg:text-4xl">Senior High School</h1>
                    <div className="text-[#270E12] dark:text-[#fff1dc]">
                        <p className="pl-2 font-semibold uppercase">Asia Pacific College</p>
                        <p className="pl-2 font-semibold uppercase">Section STEM 223</p>
                        <p className="pl-2">Graduated: August 28, 2024</p>
                    </div>
                </div>
                <div className="row-start-2 m-5 h-30 w-30 place-content-center contain-content rounded-2xl">
                    <img className="scale-120 -mt-2" src="./SHS_GradPic.JPG"/>
                </div>
            </section>
            <section className="pl-4 transition-all lg:pl-10">
                <h1 className="py-3 text-2xl font-bold uppercase lg:text-4xl">College Education</h1>
                <div className="text-[#270E12] dark:text-[#fff1dc]">
                <p className="pl-2 font-semibold uppercase">Asia Pacific College</p>
                <p className="pl-2 font-semibold uppercase">Bachelor of Science in Computer Science</p>
                <p className="pl-2">Expected Graduation: 2028</p>
                </div>
            </section>
            </div>
        </article>
        <article className="p-6 dark:text-[#d2b48c] text-[#733a3d] lg:px-20">
            <h1 className="text-4xl font-black uppercase transition-all lg:text-6xl">Experiences</h1>
            <div className="flex flex-col items-start space-y-5 lg:flex-row">
            <section className="flex flex-col items-center space-y-4 md:flex-row md:space-x-10">
                <div className="pl-4 transition-all lg:pl-10">
                <h1 className="py-3 text-2xl font-bold uppercase lg:text-4xl">Gaming Genesis</h1>
                <div className="text-[#270E12] dark:text-[#fff1dc]">
                <p className="pl-2 font-semibold uppercase">Location: Asia Pacific College</p>
                <p className="pl-2 font-semibold uppercase">Role: Events Officer</p>
                <p className="pl-2">2024 - Present</p>
                </div>
                </div>
            </section>
            <section className="pl-4 transition-all lg:pl-10">
                <h1 className="py-3 text-2xl font-bold uppercase lg:text-4xl">AcadArena: Alliance Games</h1>
                <div className="text-[#270E12] dark:text-[#fff1dc]">
                <p className="pl-2 font-semibold uppercase">Location: University of Makati</p>
                <p className="pl-2 font-semibold uppercase">Role: Marketing & Tech Staff</p>
                <p className="pl-2">May 2025</p>
                </div>
            </section>
            <section className="pl-4 transition-all lg:pl-10 ">
                <h1 className="py-3 text-2xl font-bold uppercase lg:text-4xl">Coastal Cleanup</h1>
                <div className="text-[#270E12] dark:text-[#fff1dc]">
                <p className="pl-2 font-semibold uppercase ">Location: SM MOA</p>
                <p className="pl-2 font-semibold uppercase">Role: APC NSTP className President</p>
                <p className="pl-2">September 2024</p>
                </div>
            </section>
            </div>
        </article>
        <article className="p-6 dark:text-[#d2b48c] text-[#733a3d] lg:px-20">
            <h1 className="text-4xl font-black uppercase transition-all lg:text-6xl">Certificates</h1>
            <section className="pl-4 transition-all lg:pl-10">
            <ul className="list-inside list-disc space-y-2 p-2 text-[#270E12] dark:text-[#fff1dc]">
                <li><p className="font-semibold inline">Certificate in Understanding Low Code as a Traditional Developer</p> – Microsoft Learn. 2023.</li>
                <li><p className="font-semibold inline">Working in a Digital World: Professional Skills</p> – IBM SkillsBuild. 2024.</li>
                <li><p className="font-semibold inline">User Experience Design Fundamentals</p> – IBM SkillsBuild. 2024.</li>
                <li><p className="font-semibold inline">Scrum Foundation Professional Certification – SFPC™!</p> – Certiprof. 2024.</li>
                <li><p className="font-semibold inline">Advanced Algorithmic Thinking with Python</p> – LinkedIn Learning. 2025.</li>
                <li><p className="font-semibold inline">Networking Basics</p> – Cisco. 2025.</li>
            </ul>
            </section>
        </article>
        </>
    );
}

export default MainAbout;