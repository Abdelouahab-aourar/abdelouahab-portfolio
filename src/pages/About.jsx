import { Code, GraduationCap, PenTool } from "lucide-react"
import { motion } from "motion/react"


export const About = () => {
    return(
        <section id="about" className="px-10 max-md:px-4 overflow-x-hidden">
            <motion.h1 className="header"
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.5}}
                viewport={{ once: false, amount: 0.4 }}
            ><span className="text-white">About</span> Me
            </motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-10 border-4 border-primary rounded-2xl bg-primary/2 backdrop-blur-sm max-md:p-4">
                <motion.div className="flex items-center gap-4 flex-col"
                    initial={{opacity: 0, x: -50}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 0.5, ease: [0.5, 0.6, 0.8, 1]}}
                    viewport={{ once: false, amount: 0.4 }}
                >
                    <h1 className="text-4xl text-glow max-md:text-3xl">Aourar Abdelouahab</h1>
                    <h1 className="text-2xl text-glow max-md:text-xl">Web Developer | Graphic Designer | AI Enthusiast</h1>
                    <h1 className="text-2xl text-glow max-md:text-xl">Second Year Student At ENSIA</h1>
                    <p className="md:text-lg">I specialize in creating responsive, accessible, and performant web applications using modern technologies</p>
                    <p className="md:text-lg">I enjoys crafting user interfaces and building applications with clean and efficient codes</p>
                    <p className="md:text-lg">I'm passionate about creating elegant solutions to complex problems, and I’m constantly learning new technologies and techniques to stay at the forefront of computer science engineering, specializing in AI</p>

                    <div className="flex items-center gap-4">
                        <a href="#contact">
                            <button className="cursor-pointer border-2 border-primary p-2 rounded-lg bg-primary hover:bg-background transition-all card-hover duration-500 ease-in-out active:bg-primary/10">
                                Get In Touch
                            </button>
                        </a>
                        <a href="/MyCV.pdf" target='_blank' download="AourarAbdelouahab.pdf" rel="noopener noreferrer" >
                            <button className="cursor-pointer border-2 border-primary p-2 rounded-lg hover:bg-primary transition-all duration-500 ease-in-out active:bg-[hsl(194,100%,40%)] card-hover">
                                Download CV
                            </button>
                        </a>
                    </div>
                </motion.div>
                <div className="grid grid-cols-1 gap-8">

                    <motion.div className="card-shadow border-1 border-primary flex items-start flex-col p-5 bg-primary/5 rounded-2xl backdrop-blur-lg gap-2 card-hover"
                        initial={{opacity: 0, x: 50}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.5, ease: [0.5, 0.6, 0.8, 1]}}
                        viewport={{ once: false, amount: 0.4 }}
                    >
                        <div className="flex items-center gap-2">
                            <div className="p-3 bg-primary/10 rounded-full">
                                <Code className="text-primary"/>
                            </div>
                            <h4 className="text-glow font-bold">Web Development</h4>
                        </div>
                        <div className="text-left">
                            <p className="text-sm">Building responsive websites and web applications with modern frameworks</p>
                        </div>
                    </motion.div>

                    <motion.div className="card-shadow border-1 border-primary flex items-start flex-col p-5 bg-primary/5 rounded-2xl backdrop-blur-lg gap-2 card-hover" 
                        initial={{opacity: 0, x: 50}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.5, ease: [0.5, 0.6, 0.8, 1], delay: 0.4}}
                        viewport={{ once: false, amount: 0.4 }}
                    >
                        <div className="flex items-center gap-2">
                            <div className="p-3 bg-primary/10 rounded-full">
                                <PenTool className="text-primary"/>
                            </div>
                            <h4 className="text-glow font-bold">Graphic Design</h4>
                        </div>
                        <div className="text-left">
                            <p className="text-sm">Designing visually engaging graphics, layouts, and brand identities that stand out</p>
                        </div>
                    </motion.div>

                    <motion.div className="card-shadow border-1 border-primary flex items-start flex-col p-5 bg-primary/5 rounded-2xl backdrop-blur-lg gap-2 card-hover" 
                        initial={{opacity: 0, x: 50}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.5, ease: [0.5, 0.6, 0.8, 1], delay: 0.8}}
                        viewport={{ once: false, amount: 0.4 }}
                    >
                        <div className="flex items-center gap-2">
                            <div className="p-3 bg-primary/10 rounded-full">
                                <GraduationCap className="text-primary"/>
                            </div>
                            <h4 className="text-glow font-bold">Education</h4>
                        </div>
                        <div className="text-left">
                            <p className="text-sm">second year student at ENSIA (National Higher School of Artificial Intelligence Algiers) and self-taught learner</p>
                        </div>
                    </motion.div>


                </div>
            </div>
        </section>
    )
}