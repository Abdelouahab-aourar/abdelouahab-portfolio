import { motion } from "motion/react";



export const SkillsIcons = () => {
    const MySkills = [
        {name: "C++", src: "/Cpp.png"},
        {name: "HTML5", src: "/Html.png"},
        {name: "CSS3", src: "/Css.png"},
        {name: "JavaScript", src: "/Js.png"},
        {name: "TypeScript", src: "/Ts.png"},
        {name: "React", src: "/React.png"},
        {name: "TailwindCSS", src: "/Tailwind.png"},

        {name: "SQL", src: "/Sql.png"},
        {name: "My SQL", src: "/MySql.png"},
        {name: "MongoDB", src: "/Mongo.png"},
        {name: "Git", src: "/Git.png"},
        {name: "Github", src: "/Github.png"},

        {name: "Linux", src: "/Linux.png"},
        {name: "Postman", src: "/Postman.png"},
        {name: "Node.js", src: "/Node.png"},

        {name: "Illustrator", src: "/Illustrator.png"},
        {name: "Photoshop", src: "/Photoshop.png"},

        {name: "Figma", src: "/Figma.png"},
    ]


    const layout = [6, 5, 4, 3]

    let index = 0;

    const rows = layout.map((len) => {
        const row = MySkills.slice(index, index + len)
        index += len
        return row
    })

    return(
        <section id="skills" className="z-30">
            <h1 className="header"><span className="text-white">My </span>Skills</h1>

            <div className="flex flex-col items-center gap-4">
                {rows.map((row, rowIndex) => (
                    <motion.div
                        key={rowIndex}
                        className="flex justify-center gap-6 max-md:gap-2 max-sm:gap-1"
                        initial="hidden"
                        animate="visible"
                    >
                        {row.map((skill, colIndex) => (
                            <motion.div
                                key={colIndex}
                                className="flex flex-col items-center transition-all duration-500 hover:scale-[1.2]"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: { opacity: 1 },
                                }}
                                transition={{ delay: colIndex * 0.5, duration: 0.5 }}
                            >
                                <img
                                    src={skill.src}
                                    alt={skill.name}
                                    className="w-20 h-20 z-30 max-md:w-18 max-md:h-18 max-sm:w-13 max-sm:h-13"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                ))}
            </div>



            
        </section>
    )
}