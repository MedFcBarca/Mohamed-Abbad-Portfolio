import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg}
                  alt="Illustration de contact"
                />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Contactez-moi</h2>
                  <p>Tu as une idée ou un projet ? Discutons-en ensemble.</p>

                  <div style={{ marginTop: "30px" }}>
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                      <FaEnvelope style={{ marginRight: "10px", color: "#fff" }} />
                      <a
                        href="mailto:med_abbad@outlook.fr"
                        style={{
                          color: "#fff",
                          textDecoration: "none",
                          fontWeight: "bold",
                          fontSize: "1.1rem",
                          position: "relative",
                          display: "flex",
                          alignItems: "center"
                        }}
                        className="contact-link"
                      >
                        med_abbad@outlook.fr
                        <span className="click-hint">← Clique ici</span>
                      </a>
                    </div>

                    <div style={{ display: "flex", alignItems: "center" }}>
                      <FaPhoneAlt style={{ marginRight: "10px", color: "#fff" }} />
                      <a
                        href="tel:+33668292094"
                        style={{
                          color: "#fff",
                          textDecoration: "none",
                          fontWeight: "bold",
                          fontSize: "1.1rem",
                          position: "relative",
                          display: "flex",
                          alignItems: "center"
                        }}
                        className="contact-link"
                      >
                        06 68 29 20 94
                        <span className="click-hint">← Clique ici</span>
                      </a>
                    </div>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <style>{`
        .click-hint {
          margin-left: 10px;
          font-size: 0.9rem;
          color: #bbb;
          transition: color 0.3s ease;
        }

        .contact-link:hover .click-hint {
          color: #888;
        }
      `}</style>
    </section>
  );
};
