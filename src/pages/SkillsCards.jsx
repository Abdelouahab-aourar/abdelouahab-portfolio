import { useState } from "react"
import { motion } from "motion/react"
export const SkillsCards = () => {
    const skills = [
        //FrontEnd
        {name: "HTML/CSS", level: "90", category: "frontend"},
        {name: "JavaScript", level: "75", category: "frontend"},
        {name: "Typescript", level: "70", category: "frontend"},
        {name: "React", level: "85", category: "frontend"},
        {name: "Tailwind CSS", level: "80", category: "frontend"},

        //BackEnd
        {name: "Node.js", level: "70", category: "backend"},
        {name: "Express", level: "70", category: "backend"},
        {name: "MySQL", level: "80", category: "backend"},
        {name: "MongoDB", level: "75", category: "backend"},
        
        //Tools
        {name: "Git/Github", level: "90", category: "tools"},
        {name: "Linux", level: "88", category: "tools"},
        {name: "Postman", level: "85", category: "tools"},

        //Design
        {name: "Adobe Illustrator", level: "85", category: "design"},
        {name: "Adobe Photoshop", level: "80", category: "design"},
        {name: "Figma", level: "75", category: "design"},
    ]

    const categories = ["all", "frontend", "backend", "design", "tools"]

    const [activeCategory, setActiveCategory] = useState("all")

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory)

    return(
        <section className="px-30 max-md:px-20 max-sm:px-10 py-10 overflow-x-hidden">

            <div className="flex justify-center gap-4 mb-12 mt-5 max-sm:gap-1">
                {categories.map((category, key) => {
                    return(
                        <motion.button
                        key={key}
                        initial={{ opacity: 0, x: key > 2 ? 20 : key === 2 ? 0 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.1, ease: [0.5, 0.6, 0.8, 1] , delay: key % 2 * 0.2}}
                        viewport={{ once: false, amount: 0.4 }}
                        className={`max-sm:text-xs z-30 px-5 py-2 max-sm:px-3 max-sm:py-1 rounded-full border-2 border-primary capitalize cursor-pointer card-hover hover:bg-primary transition-all duration-500 ease-in-out active:bg-[hsl(194,100%,40%)]
                                    ${activeCategory === category ? "bg-primary" : "backdrop-blur-lg bg-primary/1"}`}
                        onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </motion.button>
                    )
                })}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill,key) => {
                    return (
                        <motion.div key={key} className="bg-primary/5 p-6 rounded-2xl z-30 backdrop-blur-lg border-1 border-primary card-hover card-shadow"
                            initial={{ opacity: 0}}
                            whileInView={{ opacity: 1}}
                            transition={{ duration: 0.3, ease: [0.5, 0.6, 0.8, 1] , delay: key * 0.05}}
                            viewport={{ once: false, amount: 0.4 }} 
                        >
                            <div className="text-left mb-4">
                                <h3 className="text-lg font-semibold text-glow">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-primary/10 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-full rounded-full origin-left" style={{width: skill.level + "%"}} />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm">{skill.level}%</span>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </section>
    )
}