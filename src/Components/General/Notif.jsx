const Notif = ({children}) => {
    return(
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
            <div className="bg-[#733a3d] text-[#fff1dc] dark:bg-[#d2b48c] dark:text-[#270E12] text-lg px-4 py-2 rounded-full shadow-lg">
                {children}
            </div>
        </div>
    );
}

export default Notif;