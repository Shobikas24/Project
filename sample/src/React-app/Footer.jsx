import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

import "./Css/Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <Container fluid className=" footer-container">
        <Container>
          <Row className="footer-row">
            <Col lg={6} md={12} className="footer-col">
              <div className="footer-wrapper">
                <h5 className="footer-text1">
                  <strong>About Us</strong>
                </h5>
                <p className=" mb-4 footer-text2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris ultrices risus eget nunc ullamcorper, ut consectetur
                  eros mattis. Convallis fringilla arcu consequat condimentum
                  lectus.
                </p>
              </div>
            </Col>
            <Col lg={2} md={4} sm={12} xs={12} className="footer-col">
              <h5 className="mb-2 footer-text3">
                <strong>Company</strong>

                <ul className="list mbr-fonts-style dispaly-5 list-unstyled mt-3">
                  <li className="mbr-text item-wrap">About</li>
                  <li className="mbr-text item-wrap pt-2">Jobs</li>
                  <li className="mbr-text item-wrap pt-2">Contacts</li>
                  <li className="mbr-text item-wrap pt-2">Blog</li>
                </ul>
              </h5>
            </Col>
            <Col lg={2} md={4} sm={12} xs={12} className="footer-col">
              <h5 className="mb-2 footer-text3">
                <strong>Themes</strong>
                <ul className="list mbr-fonts-style dispaly-5 list-unstyled mt-3">
                  <li className="mbr-text item-wrap">Features</li>
                  <li className="mbr-text item-wrap pt-2">Team</li>
                  <li className="mbr-text item-wrap pt-2">Pricing</li>
                  <li className="mbr-text item-wrap pt-2">Info</li>
                </ul>
              </h5>
            </Col>
            <Col lg={2} md={4} sm={12} xs={12} className="footer-col4">
            <h5 className="mb-2 footer-text3">
                <strong>Support</strong>

                <ul className="list mbr-fonts-style dispaly-5 list-unstyled mt-3">
                  <li className="mbr-text item-wrap">Contacts</li>
                  <li className="mbr-text item-wrap pt-2">Testimonials</li>
                  <li className="mbr-text item-wrap pt-2">Term of Service</li>
                  <li className="mbr-text item-wrap pt-2">Help</li>
                </ul>
              </h5></Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default Footer; 
