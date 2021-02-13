import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SideBtn,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon isOpen={isOpen} onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about'>About</SidebarLink>
                    <SidebarLink to='solutions'>Solutions</SidebarLink>
                    <SidebarLink to='signup'>Sign Up</SidebarLink>
                    <SidebarLink to='contact'>Contact</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SideBtn to='/signin'>Sign In</SideBtn>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
