import { Code, GraduationCap, PenTool } from "lucide-react"



export const About = () => {
    return(
        <section id="about" className="px-10 max-md:px-4">
            <h1 className="header"><span className="text-white">About</span> Me</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-10 border-4 border-primary rounded-2xl bg-primary/2 backdrop-blur-sm shadow-2xl max-md:p-4">
                <div className="flex items-center gap-4 flex-col">
                    <h1 className="text-4xl text-glow max-md:text-3xl">Aourar Abdelouahab</h1>
                    <h1 className="text-2xl text-glow max-md:text-xl">Web Developer | Graphic Designer | AI Enthusiast</h1>
                    <h1 className="text-2xl text-glow max-md:text-xl">Second Year Student At ENSIA</h1>
                    <p className="md:text-lg">I specialize in creating responsive, accessible, and performant web applications using modern technologies</p>
                    <p className="md:text-lg">I enjoys crafting user interfaces and building applications with clean and efficient codes</p>
                    <p className="md:text-lg">I'm passionate about creating elegant solutions to complex problems, and I’m constantly learning new technologies and techniques to stay at the forefront of computer science engineering, specializing in AI</p>

                    <div className="flex items-center gap-4">
                        <a href="#contact">
                            <button className="cursor-pointer border-2 border-primary p-2 rounded-lg bg-primary hover:bg-background transition-colors duration-500 ease-in-out active:bg-primary/10">
                                Get In Touch
                            </button>
                        </a>
                        <a href="/MyCV.pdf" target='_blank' download="AourarAbdelouahab.pdf" rel="noopener noreferrer" >
                            <button className="cursor-pointer border-2 border-primary p-2 rounded-lg hover:bg-primary transition-colors duration-500 ease-in-out active:bg-[hsl(194,100%,40%)]">
                                Download CV
                            </button>
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-8">

                    <div className="border-1 border-primary flex items-start flex-col p-5 bg-primary/5 rounded-2xl backdrop-blur-lg shadow-2xl gap-2" >
                        <div className="flex items-center gap-2">
                            <div className="p-3 bg-primary/10 rounded-full">
                                <Code className="text-primary"/>
                            </div>
                            <h4 className="text-glow font-bold">Web Development</h4>
                        </div>
                        <div className="text-left">
                            <p className="text-sm">Building responsive websites and web applications with modern frameworks</p>
                        </div>
                    </div>

                    <div className="border-1 border-primary flex items-start flex-col p-5 bg-primary/5 rounded-2xl backdrop-blur-lg shadow-2xl gap-2" >
                        <div className="flex items-center gap-2">
                            <div className="p-3 bg-primary/10 rounded-full">
                                <PenTool className="text-primary"/>
                            </div>
                            <h4 className="text-glow font-bold">Graphic Design</h4>
                        </div>
                        <div className="text-left">
                            <p className="text-sm">Designing visually engaging graphics, layouts, and brand identities that stand out</p>
                        </div>
                    </div>

                    <div className="border-1 border-primary flex items-start flex-col p-5 bg-primary/5 rounded-2xl backdrop-blur-lg shadow-2xl gap-2" >
                        <div className="flex items-center gap-2">
                            <div className="p-3 bg-primary/10 rounded-full">
                                <GraduationCap className="text-primary"/>
                            </div>
                            <h4 className="text-glow font-bold">Education</h4>
                        </div>
                        <div className="text-left">
                            <p className="text-sm">second year student at ENSIA (National Higher School of Artificial Intelligence Algiers) and self-taught learner</p>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}