import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Image Search Engine Using CNN",
      description: "A compact, self-hosted image search engine built with Flask and deep visual embeddings. Uses CLIP and ResNet for feature extraction with HSV color histograms and FAISS for fast similarity search.",
      fullDescription: "In domains like jewelry designing, fashion, and creative industries, organizations often accumulate thousands of images over time. Without an efficient search system, it becomes extremely difficult to check whether a specific design or concept already exists in the collection. Traditional keyword-based search is insufficient for visual data, as many designs lack descriptive metadata. To address this challenge, this project provides a content-based image search engine that allows users to find visually similar images by uploading an example. By combining semantic, visual, and color-based embeddings, it enables accurate and efficient discovery of related designs.",
      features: [
        "Search by image - upload an image to find visually similar images",
        "Multi-modal embeddings: CLIP (ViT-B/32), ResNet50, and HSV color histograms",
        "Fast nearest-neighbor search using FAISS",
        "Persistent feature cache to speed startup (image_features.pkl)",
        "Simple password-protected UI with responsive layout",
        "Results fetched from database based on similarity scores"
      ],
      imgUrl: projImg1,
      tech: "Python, Flask, CLIP (ViT-B/32), ResNet50, FAISS, HSV Color Analysis, Deep Learning",
      github: "https://github.com/BilalHq38/Image_Search_Engine_Using_CNN.git"
    },
    {
      title: "Chaty_PDFs",
      description: "AI-Powered Chatbot for Document Interaction. Chat with PDF documents using vector embeddings stored in ChromaDB for fast semantic search. Get context-aware answers to natural-language questions without manual reading.",
      imgUrl: projImg2,
      tech: "Python, NLP, Embeddings, ChromaDB, HTML, AI Chatbot",
      github: "https://github.com/BilalHq38/Chaty_PDFs.git"
    },
    {
      title: "AI Story Generator",
      description: "Interactive AI-Driven Storytelling Platform. Dynamic choose-your-own-adventure stories using Google Gemini with multilingual text-to-speech narration in 1,100+ languages.",
      imgUrl: projImg3,
      tech: "FastAPI, React, Google Gemini API, Text-to-Speech",
      github: "https://github.com/BilalHq38/AI-Story-Generator.git"
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
                <p>Here are my featured projects demonstrating expertise in AI/ML, deep learning, and full-stack development. Each project showcases practical applications of cutting-edge technologies including CNNs, NLP, vector databases, and modern web frameworks.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">All Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">AI/ML</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Web Apps</Nav.Link>
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
                      <Row>
                        <ProjectCard
                          title="🔍 Image Search Engine Using CNN"
                          description="Content-Based Image Retrieval using deep learning and CNN embeddings"
                          imgUrl={projImg1}
                        />
                        <ProjectCard
                          title="📄 Chaty_PDFs"
                          description="AI chatbot for PDFs with vector embeddings and semantic search"
                          imgUrl={projImg2}
                        />
                        <ProjectCard
                          title="🎭 AI Story Generator"
                          description="Interactive storytelling with Google Gemini and multilingual TTS"
                          imgUrl={projImg3}
                        />
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        <ProjectCard
                          title="🔍 Image Search Engine Using CNN"
                          description="Content-Based Image Retrieval System powered by deep learning"
                          imgUrl={projImg1}
                          tech="CNNs, Deep Learning, Feature Embeddings, HTML, Python"
                        />
                        <ProjectCard
                          title="📄 Chaty_PDFs"
                          description="AI-Powered chatbot for document interaction web app"
                          imgUrl={projImg2}
                          tech="Python, NLP, Embeddings, ChromaDB, HTML, AI Chatbot"
                        />
                        <ProjectCard
                          title="🎭 AI Story Generator"
                          description="Interactive AI-Driven Storytelling Platform with FastAPI + React"
                          imgUrl={projImg3}
                          tech="FastAPI, React, Google Gemini API, Text-to-Speech"
                        />
                      </Row>
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
