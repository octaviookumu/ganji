import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import React, { useState } from 'react';
import Hero from '../components/herosection';
import InfoSection from '../components/infosection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/infosection/Data';

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
            <InfoSection {...homeObjThree} />
        </>
    );
};

export default Home;
