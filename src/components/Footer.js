import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import envelope from '../assets/img/envelope.svg';
import linkedIn from '../assets/img/linkedin.svg';
import github from '../assets/img/github.svg';
import twitter from '../assets/img/twitter.svg';


export const Footer = () => {

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

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
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
            <p>FabianDevJourney© 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}