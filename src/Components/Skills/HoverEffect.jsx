//ripple hover effect
const RippleHover = ({children}) => {
    return(
        <div className='relative shrink-0  overflow-hidden font-light justify-center text-center group border-2 group dark:border-[#d2b48c] border-[#733a3d] sm:w-25 w-18 lg:h-120 sm:h-100 h-80 rounded-2xl duration-400 ease-in-out hover:scale-105'>
            <span className="absolute rotate-90 inset-0 rounded-full dark:bg-[#d2b48c] bg-[#733a3d] scale-0 group-hover:scale-500 transition-transform duration-500"></span>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="rotate-90 tracking-[0.4em] sm:text-3xl text-2xl text-[#733a3d] group-hover:text-[#fff1dc] dark:text-[#d2b48c] dark:group-hover:text-[#270E12] transition-colors duration-500">
                {children}
                </span>
            </div>
        </div>
    );
}

export default RippleHover;