import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import { useState } from 'react';
import Hero from '../components/herosection';
import InfoSection from '../components/infosection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/infosection/Data';
import Services from "../components/services";
import Footer from "../components/footer";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Hero />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <InfoSection {...homeObjThree} />
            <Footer />
        </>
    );
};

export default Home;
