const Others = () => {
    return(
        <>
        <article className="p-6 dark:text-[#d2b48c] text-[#733a3d] lg:px-20">
            <div className="grid grid-col-2 pl-4 transition-all lg:pl-10">
            <div>
            <h1 className="text-4xl font-black uppercase transition-all lg:text-6xl py-2">Hobbies</h1>
            <ul className="list-disc list-inside text-[#270E12] dark:text-[#fff1dc]">
                <li className="lg:text-2xl text-lg font-bold">Digital Art</li>
                <p className="pl-8 text-[#270E12]/60 dark:text-[#d2b48c]/60">- drawing my friends</p>
                <li className="lg:text-2xl text-lg font-bold">Games</li>
                <p className="pl-8 text-[#270E12]/60 dark:text-[#d2b48c]/60">- story</p>
                <p className="pl-8 text-[#270E12]/60 dark:text-[#d2b48c]/60">- multiplayer</p>
                <li className="lg:text-2xl text-lg font-bold">Clipping Games</li>
                <p className="pl-8 text-sm text-[#270E12]/60 dark:text-[#d2b48c]/60">(short videos)</p>
            </ul>
            </div>
            <div className="md:col-start-2 md:py-0 py-4">
            <h1 className="text-4xl font-black uppercase transition-all lg:text-6xl py-2">Interests</h1>
            <ul className="list-disc list-inside text-[#270E12] dark:text-[#fff1dc]">
                <li className="lg:text-2xl text-lg font-bold">Anything Art</li>
                <li className="lg:text-2xl text-lg font-bold">Music</li>
                <li className="lg:text-2xl text-lg font-bold">Manga</li>
                <li className="lg:text-2xl text-lg font-bold">Anime</li>
            </ul>
            </div>
            </div>
        </article>
        <article className="p-6 dark:text-[#d2b48c] text-[#733a3d] lg:px-20">
            <h1 className="text-4xl font-black uppercase transition-all lg:text-6xl ">As Freelance Artist</h1>
            <p className="font-semibold lg:text-normal text-sm text-[#270E12]/60 dark:text-[#d2b48c]/60">I draw when I want to, feel like it, and enjoy it.</p>
            <div className="w-full">
            <section className="pl-4 transition-all lg:pl-10">
                <h1 className="text-2xl font-bold uppercase lg:text-4xl">Experience</h1>
                <div className="text-[#270E12] dark:text-[#fff1dc] ">
                    <p className="font-semibold text-lg pl-4">5+ Commissions from friends</p>
                    <p className="font-semibold text-lg pl-4">Sketch Artist for an Indie Game Dev</p>
                </div>
                <p className="pl-8 text-[#270E12]/60 dark:text-[#d2b48c]/60">- 3 character concepts</p>
                <p className="pl-8 text-[#270E12]/60 dark:text-[#d2b48c]/60">- 1 pending character concept</p>
            </section>
            </div>
        </article>
        </>
    );
} 
export default Others;