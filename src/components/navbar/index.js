import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLink,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {(window.scrollY >= 80) ? setScrollNav(true) : setScrollNav(false)}
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>Ganji</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>About Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='solutions' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Solutions</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='signup' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sign Up</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='contact' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact</NavLink>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/sign-in' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
