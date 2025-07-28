import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/printack1.png";
import projImg2 from "../assets/img/the1.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import printackImages from "../assets/img/printack2.png";
import printack3 from "../assets/img/printack3.png";
import printack4 from "../assets/img/printack4.png";
import printack5 from "../assets/img/printack5.png";
import printack6 from "../assets/img/printack6.png";
import printack7 from "../assets/img/printack7.png";

import the2 from "../assets/img/the2.png";
import the3 from "../assets/img/the3.png";
import the4 from "../assets/img/the4.png";
import the5 from "../assets/img/the5.png";
import the6 from "../assets/img/the6.png";
import the7 from "../assets/img/the7.png";

import wf1 from "../assets/img/wf1.webp";
import wf2 from "../assets/img/wf2.png";
import wf3 from "../assets/img/wf3.png";
import wf4 from "../assets/img/wf4.png";
import wf5 from "../assets/img/wf5.png";
import wf6 from "../assets/img/wf6.png";
import wf8 from "../assets/img/wf8.jpeg";

import React, { useState } from "react";
import { Modal, Carousel } from "react-bootstrap";


export const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', description: '', images: [] });

  const handleShowModal = (project) => {
    setModalContent(project);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);


  const projects = [
    {
      title: "Printack",
      description: "Printack est une application desktop construite avec Electron et React. Elle permet de créer, modifier et imprimer des étiquettes personnalisées, avec une gestion avancée des données via Excel ou Access.",
      imgUrl: projImg1,
      images: [projImg1, printackImages, printack3, printack4, printack5, printack6, printack7],
    },
    {
      title: "TheTipTop",
      description: "Site de concours avec une interface utilisateur fluide, des fonctionnalités complètes de participation, de tirage et d’administration, le tout déployé avec un pipeline DevOps (CI/CD, monitoring).",
      imgUrl: projImg2,
      images: [projImg2, the2, the3, the4, the5, the6, the7],
    },
    {
      title: "FuriousDuck",
      description: "Un projet DevOps orienté automatisation de workflow CI/CD. Il inclut Jenkins, Docker, Azure, SonarQube et Grafana pour une intégration continue robuste.",
      imgUrl: wf1,
      images: [wf1, wf2, wf3, wf4, wf5, wf6, wf8],
    },
  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
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
                            projects.map((project, index) => (
                              <Col key={index} md={4} className="mb-4">
                                <div onClick={() => handleShowModal(project)} style={{ cursor: "pointer" }}>
                                  <ProjectCard {...project} />
                                </div>
                                <p className="text-center mt-2" style={{ fontSize: "0.9rem", color: "white" }}>
                                  👉 Cliquez sur l’image du projet pour voir les photos.

                                </p>
                              </Col>
                            ))
                          }
                        </Row>

                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <h3>Mon CV</h3>
                        <p>Mon parcours en un coup d’œil : une formation Bac+5 spécialisée dans le digital, combinée à deux années d’expériences en développement fullstack et DevOps. N’hésitez pas à parcourir mon CV pour découvrir mes compétences techniques, mes expériences professionnelles, mes projets et mes engagements.</p>

                        <iframe
                          src={require('../assets/font/Abbad - CV - Mohamed..pdf')}
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
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{modalContent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{modalContent.description}</p>
          <Carousel>
            {modalContent.images.map((img, idx) => (
              <Carousel.Item key={idx}>
                <img
                  className="d-block w-100"
                  src={img}
                  alt={`Slide ${idx}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>

    </section>

  )
}
