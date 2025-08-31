import { ExternalLink, Github } from "lucide-react";


export const Projects = () => {

    const projects = [
        {
            id: 1,
            image: "/Auth.png",
            title: "Authentication / Authorization",
            description: "A complete authentication and authorization system with email verification, password encryption, and secure JWT-based access.",
            tags: ["Node.js", "MongoDB", "JWT", "React", "Tailwind CSS"],
            demoUrl: "",
            githubUrl: "",
        },

        {
            id: 2,
            image: "/Redvolt.png",
            title: "E-commerce Website (Frontend)",
            description: "RedVolt Gear is a sleek, animated React-based e-commerce front end built to showcase and sell high-quality laptop accessories.",
            tags: ["React", "TypeScript", "CSS", "Swiper.js"],
            demoUrl: "https://redvolt-gear.vercel.app/",
            githubUrl: "https://github.com/Abdelouahab-aourar/RedVolt-Gear",
        },

        {
            id: 3,
            image: "/PortfolioTerminal.png",
            title: "Portfolio Website (Terminal Theme)",
            description: "A terminal-style developer portfolio built with React, TypeScript, Tailwind CSS, and Xterm.js.",
            tags: ["React", "Tailwind CSS", "TypeScript", "Xterm.js"],
            demoUrl: "https://abdelouahabaourar.vercel.app/",
            githubUrl: "https://github.com/Abdelouahab-aourar/My-Portfolio",
        },
    ];
    return(
        <section id="projects" className="px-10 max-md:px-4 overflow-hidden z-30">
            <h1 className="header"><span className="text-white">Featured </span>Projects</h1>

            <p className="max-sm:text-sm text-glow">here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-20 my-20">
                {projects.map((project, key) => {
                    return(
                        <div key={key} className="rounded-xl card-hover bg-primary/5 z-30 backdrop-blur-lg shadow-2xl overflow-hidden relative">
                            <div className="h-48">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => {
                                        return(
                                            <span className="px-2 py-1 font-medium text-xs rounded-full bg-primary/15">
                                                {tag}
                                            </span>
                                        )
                                    })}
                                </div>
                                <h3 className="text-xl font-semibold mt-10 mb-1 text-primary text-glow">{project.title}</h3>
                                <p className="text-sm mb-10">{project.description}</p>
                            <div className="flex items-center justify-between fixed bottom-4 left-4">
                                <div className="flex space-x-3">
                                    <a href={project.demoUrl} target="_blank" className="hover:text-primary transition-colors duration-500">
                                        <ExternalLink/>
                                    </a>

                                    <a href={project.githubUrl} target="_blank" className="hover:text-primary transition-colors duration-500">
                                        <Github/>
                                    </a>
                                </div>
                            </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}