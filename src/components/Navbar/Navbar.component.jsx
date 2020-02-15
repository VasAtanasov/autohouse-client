import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { Brand, StyledLink } from './Navbar.styles';

const NavbarComponent = ({ routes }) => {
    const navLinks = routes.map((link, index) => (
        <StyledLink key={`${link.name}_${index}`}>
            <NavLink to={link.path}>{link.name}</NavLink>
        </StyledLink>
    ));

    return (
        <Navbar collapseOnSelect={true} expand="lg" bg="light" variant="light">
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
    );
};

export default NavbarComponent;
