import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import React, { useState } from 'react';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle} />
        </>
    );
};

export default Home;
