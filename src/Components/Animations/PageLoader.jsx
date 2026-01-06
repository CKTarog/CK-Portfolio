//page loader
import { useEffect, useState, useRef } from "react"
import { gsap } from "gsap"

const PageLoader = () => {
  const wrapperRef = useRef(null)
  const [visible, setVisible] = useState(true) //manipulate if this loader is visible or not

  //gets information of the images
  useEffect(() => {
    const images = document.images
    const total = images.length
    let loaded = 0

    if (total === 0) finishLoading()

    const onLoad = () => {
      loaded++
      if (loaded === total) finishLoading()
    }

    for (let img of images) {
      if (img.complete) onLoad()
      else {
        img.addEventListener("load", onLoad)
        img.addEventListener("error", onLoad)
      }
    }

    // Fade out the loader when done
    function finishLoading() {
      gsap.to(wrapperRef.current, { 
        opacity: 0, duration: 0.6, ease: "power3.inOut",
        onComplete: () => setVisible(false),
      })
    }
  }, [])

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