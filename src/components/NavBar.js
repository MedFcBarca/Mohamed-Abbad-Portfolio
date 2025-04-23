import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/" className="logo-container">
            <div className="logo-name">Mohamed Abbad</div>
            <div className="logo-title">Développeur FS / DevOps</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Acceuil</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Compétences</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projets</Nav.Link>
            </Nav>
            <span className="navbar-text">
            <div className="social-icon">
  <a href="https://www.linkedin.com/in/mohamedabbad/" target="_blank" rel="noopener noreferrer">
    <img src={navIcon1} alt="LinkedIn" />
  </a>
  <a href="http://github.com/MedFcBarca" target="_blank" rel="noopener noreferrer">
    <img src={navIcon2} alt="GitHub" />
  </a>
 
</div>

              <HashLink to='#connect'>
                <button className="vvd"><span>Discutons ensemble</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Styles CSS inclus ici */}
      <style jsx>{`
        .logo-container {
          text-align: center;
          color: #333;
        }

        .logo-name {
          font-size: 2.5rem;
          font-weight: bold;
          color: #42a5f5; /* Bleu clair */
        }

        .logo-title {
          font-size: 1.2rem;
          font-weight: 300;
          color: #81d4fa; /* Bleu encore plus clair */
        }
      `}</style>
    </Router>
  )
}
