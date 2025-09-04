import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import Swal from 'sweetalert2'



export const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "a554db19-f915-42d0-8bc4-e35721b5d4de");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success",
                theme: "dark",
                confirmButtonText: 'Close',
                confirmButtonColor: "#00C0F9"
            });
        }
        else{
            Swal.fire({
                title: "Error!",
                icon: "error",
                theme: "dark",
                confirmButtonText: 'Close',
                confirmButtonColor: "#00C0F9"
            });
        }
    };

    return(
        <section id="contact" className="px-20 max-md:px-4 overflow-hidden z-30 pb-20">
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
                <div className="bg-primary/5 p-8 rounded-2xl z-30 backdrop-blur-lg shadow-2xl border-1 border-primary card-hover">
                    <h3 className="text-2xl font-semibold mb-6 ">Send a Message</h3>

                    <form action="" className="space-y-6" onSubmit={onSubmit}>
                        <div>
                            <label htmlFor="name" className="block tex-sm font-medium mb-2">Your Name</label>
                            <input 
                            type="text" 
                            id="name" 
                            placeholder="Abdelouahab Aourar" 
                            name="name" 
                            required 
                            className="w-full px-4 py-3 rounded-md border-2 border-primary bg-primary/10 focus:outline-hidden " 
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block tex-sm font-medium mb-2">Your Email</label>
                            <input 
                            type="email" 
                            id="email" 
                            placeholder="abdelouahab.aourar@gmail.com" 
                            name="email" 
                            required 
                            className="w-full px-4 py-3 rounded-md border-2 border-primary bg-primary/10 focus:outline-hidden " 
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block tex-sm font-medium mb-2">Your Message</label>
                            <textarea 
                            id="message" 
                            placeholder="Hello, I'd like to talk about ..." 
                            name="message" 
                            required 
                            className="w-full px-4 py-3 rounded-md border-2 border-primary bg-primary/10 focus:outline-hidden resize-none" 
                            />
                        </div>

                        <button type="submit" className="inline-flex items-center gap-2 cursor-pointer border-2 border-primary p-2 rounded-lg bg-primary hover:bg-background transition-all card-hover duration-500 ease-in-out active:bg-primary/10" >
                            <p>Send Message</p>
                            <Send size={14}/>
                        </button>
                    </form>
                </div>

            </div>
        </section>
    )
}