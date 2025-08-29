import { Code } from "lucide-react"



export const About = () => {
    return(
        <section id="about" className="px-10">
            <h1 className="header"><span className="text-white">About</span> Me</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-10 border-4 border-primary rounded-2xl bg-primary/2 backdrop-blur-sm shadow-2xl">
                <div className="flex items-center gap-4 flex-col">
                    <h1 className="text-4xl text-glow">Aourar Abdelouahab</h1>
                    <h1 className="text-2xl text-glow">Web Developer | Graphic Designer | AI Enthusiast</h1>
                    <h1 className="text-2xl text-glow">Second Year Student At ENSIA</h1>
                    <p className="text-lg">I specialize in creating responsive, accessible, and performant web applications using modern technologies</p>
                    <p className="text-lg">I enjoys crafting user interfaces and building applications with clean and efficient codes</p>
                    <p className="text-lg">I'm passionate about creating elegant solutions to complex problems, and I’m constantly learning new technologies and techniques to stay at the forefront of computer science engineering, specializing in AI</p>
                </div>
                <div className="grid grid-cols-1 gap-8">
                    <div className="border-2 border-primary flex items-start flex-col p-5 bg-primary/5 rounded-2xl backdrop-blur-lg shadow-2xl" >
                        <div className="p-3 bg-primary/10 rounded-full">
                            <Code className="text-primary"/>
                        </div>
                        <div className="text-left">
                            <h4>Web Development</h4>
                            <p>Creating responsive websites and web applications with modern frameworks</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}