import { useEffect, useState } from "react"


export const Background = ({children}) => {
const [stars, setStars] = useState([])

useEffect(() => {
    generateStars()
    const handleResize = () => {
        generateStars();
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
}, [])
const generateStars = () => {
    const numberOfStars = (window.innerWidth * window.innerHeight / 10000)
    const newStars = []
    for(let i = 0; i < numberOfStars; ++i){
        newStars.push({
            id: i,
            size: Math.random() * 3 + 1,
            x: Math.random() * 100,
            y: Math.random() * 100,
            opacity: Math.random() * 0.1 + 0.4,
            animationDuration: Math.random() * 5 + 2,
        })
    }
    setStars(newStars)
}

    return(
        <div className="min-h-screen min-w-screen z-0 fixed overflow-hidden">
            {stars.map((star) =>(
                <div key={star.id} className="star animate-pulse-subtle" style={{
                    width: star.size + "px",
                    height: star.size + "px",
                    left: star.x + "%",
                    top: star.y + "%",
                    opacity: star.opacity,
                    animationDuration: star.animationDuration + "s",
                }}/>
            ))}
            {children}
        </div>
    )
}