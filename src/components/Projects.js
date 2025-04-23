import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/printack1.png";
import projImg2 from "../assets/img/the1.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Printack",
      description: "Application Desktop Electron",
      imgUrl: projImg1,
      
    },
    {
      title: "TheTipTop",
      description: "Application Web",
      imgUrl: projImg2,
    },
    {
      title: "FuriousDuck",
      description: "DevOps Workflow",
      imgUrl: projImg3,
    },
   
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Découvrez une sélection de trois projets phares parmi mes réalisations. Chaque projet illustre une facette différente de mon expertise : une application desktop, une application web et un workflow DevOps complet. J’ai choisi ces projets pour leur diversité et leur impact, afin de vous donner un aperçu concis mais pertinent de mes compétences techniques et de ma capacité à mener des projets variés, de bout en bout.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projets</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Mon CV</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Expériences & Formations</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
 <h3>Mon CV</h3>
<p>Mon parcours en un coup d’œil : une formation Bac+5 spécialisée dans le digital, combinée à deux années d’expériences en développement fullstack et DevOps. N’hésitez pas à parcourir mon CV pour découvrir mes compétences techniques, mes expériences professionnelles, mes projets et mes engagements.</p>

  <iframe
    src={require('../assets/font/Mohamed ABBAD CV_.pdf')}
    width="100%"
    height="600px"
    style={{ border: "none" }}
    title="Mon CV"
  ></iframe>
</Tab.Pane>

<Tab.Pane eventKey="third">
  <h3>Formations & Expériences</h3>

  <h4>Expériences Professionnelles</h4>
  <ul>
    <li><strong>Développeur Fullstack en alternance</strong> (2 ans) - Spyrals</li>
    <li><strong>Stage</strong> - CHU</li>
    <li><strong>Développeur Full-stack / Expert Digital Marketing</strong> (15 mois) - Grands projets de fin d'études : <em>Thé Tip Top</em> pour le web et mobile, <em>FuriousDuck</em> pour le workflow</li>
    <li><strong>Développeur Full-stack</strong> (15 mois) - Grands projets de fin d'études : <em>AtypikHouse</em> (application web et mobile)</li>
  </ul>

  <h4>Formations</h4>
  <ul>
    <li><strong>M2 Expert en Stratégie et Transformation Digitale</strong> - Oct. 2023 - Déc. 2024, <em>Digital School of Paris (institut F2i)</em></li>
    <li><strong>M1 Consultant et Développeur Web et Mobile</strong> - Oct. 2021 - Janv. 2023, <em>Digital School of Paris (institut F2i)</em></li>
  </ul>
</Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
