import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { Brand, StyledLink, NavbarWrapper } from './Navbar.styles';

const NavbarComponent = ({ routes }) => {
    const navLinks = routes.map((link, index) => (
        <StyledLink key={`${link.name}_${index}`}>
            <NavLink to={link.path}>{link.name}</NavLink>
        </StyledLink>
    ));

    return (
        <NavbarWrapper>
            <Navbar collapseOnSelect={true} expand="lg">
                <Navbar.Brand href="/">
                    <Brand>
                        Auto<span>house</span>
                    </Brand>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">{navLinks}</Nav>
                </Navbar.Collapse>
            </Navbar>
        </NavbarWrapper>
    );
};

export default NavbarComponent;
