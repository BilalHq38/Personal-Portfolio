import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import { Linkedin, Whatsapp, EnvelopeFill } from 'react-bootstrap-icons';

export const Footer = () => {
  const linkedInUrl = 'https://linkedin.com/in/m-bilal-hashmi';
  const whatsappUrl = 'https://wa.me/923100119166';
  const emailUrl = 'mailto:mbilalhq4u@gmail.com';
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href={linkedInUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin aria-hidden="true" focusable="false" />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <Whatsapp aria-hidden="true" focusable="false" />
              </a>
              <a href={emailUrl} aria-label="Email">
                <EnvelopeFill aria-hidden="true" focusable="false" />
              </a>
            </div>
            <p>© {year} Muhammad Bilal Hashmi. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
