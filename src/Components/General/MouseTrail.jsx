import { useGSAP } from '@gsap/react';

const MouseTrail = () => {
    useGSAP(()=> {
        const handleMouseMove = (e) => {
            console.log(e.clientX);
            console.log(e.clientY);
            
        }
        window.addEventListener("mousemove", handleMouseMove);
    })

    return(
        <div className="relative min-h-screen">
            <div className="trail-container absolute w-full h-full overflow-hidden"></div>
        </div>
    );
}

export default MouseTrail;