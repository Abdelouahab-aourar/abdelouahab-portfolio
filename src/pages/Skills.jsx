import { motion } from "motion/react";



export const Skills = () => {
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


    const layout = [7, 5, 3, 2, 1]

    let index = 0;

    const rows = layout.map((len) => {
        const row = MySkills.slice(index, index + len)
        index += len
        return row
    })

    return(
        <section id="skills">
            <h1 className="header"><span className="text-white">My </span>Skills</h1>


            
        </section>
    )
}