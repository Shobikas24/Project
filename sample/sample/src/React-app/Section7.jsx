import Accordion from "react-bootstrap/Accordion";
import Background5 from "./images/background5.jpg";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import sec from "./images/mbr-4.jpg";
import "./Css/Section7.css";

function Section7() {
  return (
    <div
      className="Section7 w-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${Background5})`,
      }}
    >
      <Container style={{ borderStyle: "dotted" }}>
        <Row style={{ borderStyle: "dashed" }} className="mt-5 mb-5">
          <Col>
            <div className="Section7text-container">
              <h2 class="mbr-fonts-style mbr-section-title mb-1 mbr-white mbr-semibold align-left display-2">
                <strong>Frequently</strong>
                <div id="text2">
                  <strong>Asked Questions</strong>
                </div>
              </h2>
            </div>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header> Lorem Ipsum dolor sit amet</Accordion.Header>
                <Accordion.Body>
                  Lorem Ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus, voluptas explicabo molestiae tempore natus velit
                  sed aliquam ut! Culpa asperiores, error ullam qui! Commodi
                  nobis distinctio aperiam totam perferendis quas.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header> Maecenas vulputate in enim</Accordion.Header>
                <Accordion.Body>
                  Lorem Ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus, voluptas explicabo molestiae tempore natus velit
                  sed aliquam ut! Culpa asperiores, error ullam qui! Commodi
                  nobis distinctio aperiam totam perferendis quas.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  {" "}
                  Curabitur ut venenatis urna
                </Accordion.Header>
                <Accordion.Body>
                  Lorem Ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus, voluptas explicabo molestiae tempore natus velit
                  sed aliquam ut! Culpa asperiores, error ullam qui! Commodi
                  nobis distinctio aperiam totam perferendis quas.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col xs={12} md={8} lg={6} className="Section7-col2">
            <img src={sec} alt="" id="Col-img" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Section7;
