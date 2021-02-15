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
                            <NavLink to='about'>About Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='solutions'>Solutions</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='signup'>Sign Up</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='contact'>Contact</NavLink>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
