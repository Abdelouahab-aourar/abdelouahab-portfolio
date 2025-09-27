import { Typewriter } from 'react-simple-typewriter'
import { Github, Globe, Linkedin, Mail } from 'lucide-react'
import { motion } from 'motion/react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useState, useEffect } from 'react';


export const Home = () => {
    const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <section className='z-10 flex items-center px-10 py-20 w-full max-md:flex-col space-y-10 overflow-x-hidden' id='home'>
            <motion.div className='space-y-6 flex items-start flex-col w-[65%] text-left max-md:items-center max-md:text-center max-md:w-full'
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: [0.5, 0.6, 0.8, 1] }}
                viewport={{ once: false, amount: 0.4 }}
            >
                <h1 className='text-5xl font-bold max-[1100px]:text-4xl max-md:text-3xl'>Hello There!</h1>
                <h1 className='text-5xl font-bold max-[1100px]:text-4xl max-md:text-3xl'>I'm <span className='text-primary'><Typewriter words={['Aourar Abdelouahab']} cursor={true} loop={true} typeSpeed={70} deleteSpeed={50} cursorStyle={"█"} /> </span> </h1>
                <div className='flex items-center space-x-2 cursor-pointer z-20'>
                    <div className='w-10 h-10 flex items-center justify-center bg-primary rounded-lg active:bg-[hsl(194,100%,40%)] card-hover'>
                        <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/aourar-abdelouahab/"><Linkedin /></a>
                    </div>
                    <div className='w-10 h-10 flex items-center justify-center bg-primary rounded-lg active:bg-[hsl(194,100%,40%)] card-hover'>
                        <a target='_blank' rel="noopener noreferrer" href="https://github.com/Abdelouahab-aourar"><Github /></a>
                    </div>
                    <div className='w-10 h-10 flex items-center justify-center bg-primary rounded-lg active:bg-[hsl(194,100%,40%)] card-hover'>
                        <a target='_blank' rel="noopener noreferrer" href="mailto:abdelouahab.aourar@gmail.com"><Mail /></a>
                    </div>
                    <div className='w-10 h-10 flex items-center justify-center bg-primary rounded-lg active:bg-[hsl(194,100%,40%)] card-hover'>
                        <a target='_blank' rel="noopener noreferrer" href="https://abdelouahabaourar.vercel.app"><Globe /></a>
                    </div>
                </div>
                <h3 className='text-xl text-glow max-[1100px]:text-lg'>Web Developer | Graphic Designer | AI Enthusiast</h3>
                <a href="/MyCV.pdf" target='_blank' download="AourarAbdelouahab.pdf" rel="noopener noreferrer">
                    <button className='max-[1100px]:text-lg text-xl border-2 border-primary p-4  max-md:p-3 rounded-2xl font-bold backdrop-blur-md hover:bg-primary transition-all card-hover duration-500 ease-in-out cursor-pointer active:bg-[hsl(194,100%,40%)]'>
                        Download My CV
                    </button>
                </a>
            </motion.div>
            <motion.div className='w-[35%] flex items-center justify-center max-md:w-[80%] z-30'
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: [0.5, 0.6, 0.8, 1] }}
                viewport={{ once: false, amount: 0.4 }}
            >
                <DotLottieReact
                    src="/Coding.json"
                    key={width}
                    loop
                    autoplay
                    className='h-[450px] w-[450px] object-contain max-md:w-[300px] max-md:h-[300px]'
                />
            </motion.div>
        </section>
    )
}