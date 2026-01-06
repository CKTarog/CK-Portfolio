import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const WordReveal = ({ children }) => {
  const ref = useRef(null)

  useEffect(() => {
    if (typeof children !== "string") return

    const words = ref.current.querySelectorAll("[data-word]")

    const tl = gsap.timeline({ scrollTrigger: {trigger: ref.current, start: "top 85%", toggleActions: "play none none reset", },})

    tl.fromTo(
      words,
      { opacity: 0, y: "0.6em" },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.035, ease: "power3.in",}
    )

    return () => {tl.kill()}
  }, [children])

  return (
    <span ref={ref}>
      {typeof children === "string" && children.split(" ").map((word, i) => (
          <span key={i}  data-word style={{ willChange: "transform, opacity" }}>
            {word}
            {/* Preserve natural spacing */}
            {i !== children.split(" ").length - 1 && " "}
          </span>
        ))}
    </span>
  )
}

export default WordReveal
