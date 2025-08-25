import { useState } from "react"


export const Background = ({children}) => {
const [stars, setStars] = useState()
const [meteors, setMeteors] = useState()

    return(
        <div className="bg-[#001832] min-h-screen min-w-screen">
            <div>

            </div>
            {children}
        </div>
    )
}