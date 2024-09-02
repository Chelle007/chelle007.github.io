import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/logo.png';

const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
};

function NavbarComponent() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const sections = ['home', 'skills', 'projects', 'contact'];

        const onScroll = () => {
            setScrolled(window.scrollY > 10);

            let currentSection = '';

            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const { top, bottom } = element.getBoundingClientRect();
                    if (top < window.innerHeight / 2 && bottom > window.innerHeight / 2) {
                        currentSection = section;
                    }
                }
            });

            if (currentSection !== activeLink) {
                setActiveLink(currentSection);
                if (currentSection) {
                    window.history.replaceState(null, '', `#${currentSection}`);
                }
            }
        };

        const debouncedOnScroll = debounce(onScroll, 100);

        window.addEventListener('scroll', debouncedOnScroll);
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.replace('#', '');
            if (sections.includes(hash)) {
                setActiveLink(hash);
            }
        });

        onScroll();

        return () => {
            window.removeEventListener('scroll', debouncedOnScroll);
            window.removeEventListener('hashchange', () => {
                const hash = window.location.hash.replace('#', '');
                if (sections.includes(hash)) {
                    setActiveLink(hash);
                }
            });
        };
    }, [activeLink]);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
        window.history.replaceState(null, '', `#${value}`);
    };

    return (
        <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <a href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}>Home</a>
                        <a href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}>Skills</a>
                        <a href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}>Projects</a>
                        <a href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}>Contact</a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;