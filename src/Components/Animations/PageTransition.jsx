import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { useLocation } from "react-router-dom"

//page fade in transition using gsap
const PageTransition = ({ children }) => {
  const containerRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1,
        duration: 0.5,
        ease: "power2.in",
      }
    )
  }, [location.pathname]) // happens when page changes

  return (
    <div ref={containerRef} className="min-h-screen">
      {children}
    </div>
  )
}
export default PageTransition;