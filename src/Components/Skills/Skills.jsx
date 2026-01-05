import RippleHover from './HoverEffect';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Skills = () => {
    return(
        <div className='snap-center dark:text-[#fff1dc] text-[#270E12] text-center space-y-4 min-h-dvh select-none place-content-center py-13' id='skills'>
          <h1 className=' p-4 lg:text-8xl font-bold text-6xl'>Skills</h1>
        <div className='p-4 flex flex-row items-center space-x-3 md:justify-center md:overflow-visible justify-start overflow-x-auto no-scrollbar'>
          <RippleHover>
            HTML5
          </RippleHover>
          <RippleHover>
            CSS3
          </RippleHover>
          <RippleHover>
            JAVASCRIPT
          </RippleHover>
          <RippleHover>
            BOOTSTRAP5
          </RippleHover>
          <RippleHover>
            TAILWIND
          </RippleHover>
          <RippleHover>
            PYTHON
          </RippleHover>
          <RippleHover>
            JAVA
          </RippleHover>
          
        </div>
        <p className='md:hidden visible tracking-[0.3em] animate-pulse '> scroll <MdKeyboardDoubleArrowRight className='inline'/></p>
      </div>
    );
}

export default Skills;