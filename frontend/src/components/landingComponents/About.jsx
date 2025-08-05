import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaBuilding, FaUsers, FaHandshake } from "react-icons/fa";
import "../../App.css";
import NavBar from "./NavBar";
// Make sure this contains general styles

const About = () => {
  return (
    <>
      <NavBar />
      <section className="py-5 bg-light" id="about">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <img
                src="/img/about.jpg"
                alt="About Us"
                className="img-fluid rounded shadow"
              />
            </Col>
            <Col md={6}>
              <h2 className="mb-4 text-primary">
                About Our Real Estate Agency
              </h2>
              <p className="mb-4">
                We are committed to providing top-notch real estate services
                tailored to meet the needs of our clients. Whether you're
                buying, selling, or renting, our team of experienced agents is
                here to guide you every step of the way.
              </p>
              <Row>
                <Col xs={4} className="text-center">
                  <FaBuilding size={40} className="text-success mb-2" />
                  <h5>10+ Years</h5>
                  <p className="small">Experience</p>
                </Col>
                <Col xs={4} className="text-center">
                  <FaUsers size={40} className="text-warning mb-2" />
                  <h5>1000+</h5>
                  <p className="small">Happy Clients</p>
                </Col>
                <Col xs={4} className="text-center">
                  <FaHandshake size={40} className="text-danger mb-2" />
                  <h5>800+</h5>
                  <p className="small">Properties Sold</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
