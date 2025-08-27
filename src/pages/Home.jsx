import { Typewriter } from 'react-simple-typewriter'


export const Home = () => {
    return(
        <section className='z-10'>
            <p className='text-primary'>
                <Typewriter words={['Aourar Abdelouahab']} cursor={true} loop={true} typeSpeed={70} deleteSpeed={50} cursorStyle={"█"} />
            </p>
        </section>
    )
}