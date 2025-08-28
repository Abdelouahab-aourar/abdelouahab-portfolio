import { useEffect, useState } from "react"
import { X, Menu } from "lucide-react"


export const NavBar = () => {
    
    const navItems = [
        {name: "About", href: "#about"},
        {name: "Skills", href: "#skills"},
        {name: "Projects", href: "#projects"},
        {name: "Contact", href: "#contact"},
    ]
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    useEffect(()=>{
        const handleScroll = () => {
            if(!isMenuOpen){
                setIsScrolled(window.scrollY > 12)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return(
        <nav className={
            `sticky w-full transition-all duration-300 z-40 top-0
            ${isScrolled ? "py-3 bg-background/50 backdrop-blur-md shadow-sm": "py-5"}`
            
        }>
            <div className="flex items-center justify-between px-8">
                <a href="#home" className="text-xl font-bold text-primary">
                    <span className="relative z-10 flex items-center gap-2">
                            <span className="text-glow text-white">
                                Abdelouahab's
                            </span>
                            <span>
                                Portfolio
                            </span>
                    </span>
                </a>
                <div className="hidden md:flex space-x-10">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="hover:text-primary transition-colors duration-300 text-glow font-bold text-lg">
                            {item.name}
                        </a>
                    ))}
            </div>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 z-50 cursor-pointer" aria-label={isMenuOpen ? "Close Menu": "Open Menu"}>
                    {isMenuOpen ? <X size={24} />:  <Menu size={24}/>}
                </button>
                <div className={`fixed inset-0 bg-background/50 backdrop-blur-md z-40 flex flex-col items-center justify-center
                    transition-all duration-300 md:hidden
                    ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`
                }>
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => (
                            <a key={key} href={item.href} className="hover:text-primary transition-colors duration-300 font-bold" onClick={() => setIsMenuOpen(false)}>
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
                </div>
        </nav>
    )
}