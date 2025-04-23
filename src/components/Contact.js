import { Container, Row, Col } from "react-bootstrap";
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
                  alt="Contact Illustration"
                />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Restons en contact</h2>
                  <p>Une idée, un projet, une envie de collaborer ? N'hésite pas à me contacter !</p>
                  <p><strong>Email :</strong> <a href="mailto:med_abbad@outlook.fr">med_abbad@outlook.fr</a></p>
                  <p><strong>Téléphone :</strong> <a href="tel:+33668292094">06 68 29 20 94</a></p>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
