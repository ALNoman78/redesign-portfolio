import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <>
            <div className='max-w-7xl mx-auto'>
                <Navbar></Navbar>
                <Hero></Hero>
                <About></About>
            </div>
            <Skills></Skills>
            <div className='max-w-7xl mx-auto'>
                <Contact></Contact>
                <Footer></Footer>
            </div>
        </>
    );
};

export default Home;