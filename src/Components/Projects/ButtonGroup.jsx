const ButtonGroup = ({ preview, setPreview }) => {
    return(
        <div className='flex lg:flex-col flex-row justify-center items-end gap-20 p-4 transition-all'>
            <button onClick={() => setPreview('group')} className={`rounded-full border border-[#733a3d] dark:border-[#fff1dc] lg:h-30 lg:w-7 w-30 flex items-center justify-center lg:[writing-mode:vertical-rl] hover:scale-110 duration-200 ${preview === 'group' ? 'bg-[#733a3d] text-[#fff1dc] dark:bg-[#fff1dc] dark:text-[#270E12]' : 'border-[#733a3d] text-[#733a3d] dark:border-[#fff1dc] dark:text-[#fff1dc]'}`}>Group</button>
            <button onClick={() => setPreview('solo')} className={`rounded-full border border-[#733a3d] dark:border-[#fff1dc] lg:h-30 lg:w-7 w-30 flex items-center justify-center lg:[writing-mode:vertical-rl] hover:scale-110 duration-200 ${preview === 'solo' ? 'bg-[#733a3d] text-[#fff1dc] dark:bg-[#fff1dc] dark:text-[#270E12]' : 'border-[#733a3d] text-[#733a3d] dark:border-[#fff1dc] dark:text-[#fff1dc]'}`}>Solo</button>
        </div>
    );
}

export default ButtonGroup;