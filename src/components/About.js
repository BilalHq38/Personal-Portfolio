import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const About = () => {
  const linkedInUrl = 'https://linkedin.com/in/m-bilal-hashmi';
  const whatsappUrl = 'https://wa.me/923100119166';

  return (
    <section className="about" id="about">
      <Container>
        <Row className="align-items-center">
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>About Me</h2>
                  <div className="about-content">
                    <Row>
                      <Col md={6}>
                        <div className="about-box">
                          <h3>Education</h3>
                          <div className="education-item">
                            <h4>Bachelor of Computer Science</h4>
                            <p className="institution">National University of Technology</p>
                            <p className="location">📍 Islamabad, Pakistan</p>
                          </div>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="about-box">
                          <h3>What I Do</h3>
                          <p>I'm a passionate Full Stack Developer specializing in building modern web applications and AI-powered solutions. With expertise in Python, C++, Java, FastAPI/Flask, and Git/GitHub, I create scalable, efficient, and user-friendly solutions.</p>
                          <p style={{marginTop: '15px'}}>I bring strong communication skills, excellent problem-solving abilities, and a commitment to continuous learning. I'm a hard worker who loves turning complex challenges into elegant solutions.</p>
                        </div>
                      </Col>
                    </Row>
                    <Row style={{marginTop: '30px'}}>
                      <Col md={12}>
                        <div className="about-box contact-info">
                          <h3>Get In Touch</h3>
                          <div className="contact-details">
                            <p><strong>📧 Email:</strong> <a href="mailto:mbilalhq4u@gmail.com">mbilalhq4u@gmail.com</a></p>
                            <p><strong>📱 Mobile:</strong> <a href="tel:+923100119166">0310 0119166</a></p>
                            <p><strong>💬 WhatsApp:</strong> <a href={whatsappUrl} target="_blank" rel="noreferrer">0310 0119166</a></p>
                            <p><strong>🔗 LinkedIn:</strong> <a href={linkedInUrl} target="_blank" rel="noreferrer">linkedin.com/in/m-bilal-hashmi</a></p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
