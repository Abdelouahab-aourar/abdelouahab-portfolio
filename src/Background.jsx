import { useEffect, useState } from "react"

export const Background = (children) => {
    const [stars, setStars] = useState()
    const [meteors, setMeteors] = useEffect()
    return(
        <div>
            <div>

            </div>
            {children}
        </div>
    )
}