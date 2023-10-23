import { useState } from "react";
import { Nav, Navbar, Container } from 'react-bootstrap';
import logo from "../assets/img/logo.svg";
import envelope from '../assets/img/envelope.svg';
import linkedIn from '../assets/img/linkedin.svg';
import github from '../assets/img/github.svg';
import twitter from '../assets/img/twitter.svg';
import useScrollDirection from "../components/useScrollDirection";

const socials = [
    {
      icon: envelope,
      url: "mailto: fabian_jose_ayala_vargas@hotmail.com",
      alt: "LinkedIn",
    },
    {
        icon: linkedIn,
        url: "https://www.linkedin.com/in/fabianjayala/",
        alt: "LinkedIn",
      },
    {
      icon: github,
      url: "https://github.com/FabianJAyala",
      alt: "Facebook",
    },
    {
      icon: twitter,
      url: "https://twitter.com/fabianjayala",
      alt: "Instagram",
    },
];

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const isHidden = useScrollDirection();

    return (
        <Navbar expand="lg" className={`navbar-header ${isHidden ? 'hidden' : ''}`}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" className="logo-mobile"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            {socials.map((social) => (
                                <a
                                key={social.url}
                                href={social.url}
                                >
                                    <img src={social.icon} alt={social.alt}/>
                                </a>
                            ))}
                        </div>
                        <button className="vvd" onClick={() => window.location.href = '#connect'}><span>Let's Connect</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}