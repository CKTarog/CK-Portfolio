//page loader
import { useEffect, useState, useRef } from "react"
import { gsap } from "gsap"

const PageLoader = ({onFinish }) => {
  const wrapperRef = useRef(null) //gets the loader boxes
  const [visible, setVisible] = useState(true) //manipulate if this loader is visible or not

  useEffect(() => {
    const timer = setTimeout(() => {
        {/*fade out if done*/}
      gsap.to(wrapperRef.current, {
        opacity: 0,
        duration: 1.0,
        ease: "power3.inOut",
        onComplete: () => {
          setVisible(false)
          if (onFinish) onFinish()
        },
      })
    }, 1000) //manual load duration

    return () => clearTimeout(timer)
  }, [1000, onFinish])

  if (!visible) return null

  return (
    <div ref={wrapperRef} className="fixed inset-0 z-50 flex items-center justify-center bg-[#fff1dc] dark:bg-[#270E12] transition-colors duration-300">
      <div className="flex space-x-2">
        <div className="shuffle-box bg-[#733a3d] dark:bg-[#fff1dc]"></div>
        <div className="shuffle-box bg-[#733a3d] dark:bg-[#fff1dc]"></div>
        <div className="shuffle-box bg-[#733a3d] dark:bg-[#fff1dc]"></div>
      </div>
    </div>
  )
}

export default PageLoader;