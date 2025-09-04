import { Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"




export const Contact = () => {
    return(
        <section id="contact" className="px-20 max-md:px-4 overflow-hidden z-30 mb-20">
            <h1 className="header"><span className="text-white">Get In </span>Touch</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="z-30">
                                <h4 className="font-medium text-left pl-1">Email</h4>
                                <a target="_blank" href="mailto:abdelouahab.aourar@gmail.com" className="font-light hover:text-primary transition-colors duration-500">
                                    abdelouahab.aourar@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="z-30">
                                <h4 className="font-medium text-left pl-1">Phone</h4>
                                <a target="_blank" href="tel:+213540201655" className="font-light hover:text-primary transition-colors duration-500">
                                    +213540201655
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="z-30">
                                <h4 className="font-medium text-left pl-1">Location</h4>
                                <a className="font-light hover:text-primary transition-colors duration-500">
                                    Batna, Algeria
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8">
                        <h4 className="font-medium mb-4 ">Connect With Me</h4>
                        <div className="flex justify-center space-x-4">
                            <a target="_blank" href="https://www.linkedin.com/in/aourar-abdelouahab/" className="hover:text-primary transition-colors duration-500 z-30">
                                <Linkedin />
                            </a>

                            <a target="_blank" href="https://github.com/Abdelouahab-aourar" className="hover:text-primary transition-colors duration-500 z-30">
                                <Github />
                            </a>

                            <a target="_blank" href="https://www.instagram.com/abdelouahab.aourar/#" className="hover:text-primary transition-colors duration-500 z-30">
                                <Instagram />
                            </a>

                        </div>

                    </div>


                </div>

            </div>
        </section>
    )
}