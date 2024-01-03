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
      className="Section7 w-100 "
      style={{
        backgroundImage: `url(${Background5})`,
      }}
    >
      <Container  className=" Section7-container">
        <Row id="Section7-row">
          <Col>
            <div style={{ marginLeft:"30px",marginTop:"5%",marginBottom:"12%"}}>
              <div className="Section7text-container">
                <h2 class="mbr-fonts-style mbr-section-title mb-1 mbr-white mbr-semibold align-left display-2">
                  <strong>Frequently</strong>
                  <div id="text2">
                    <strong>Asked Questions</strong>
                  </div>
                </h2>
              </div>
              <Accordion  className="mt-4 ">
                <Accordion.Item eventKey="0" className="accordtion-item">
                  <Accordion.Header className="accordion-header">
                    <h4 className="Section7-h4">
                    Lorem Ipsum dolor sit amet
                    </h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="Section7-p">
                    Lorem Ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus, voluptas explicabo molestiae tempore natus
                    velit sed aliquam ut! Culpa asperiores, error ullam qui!
                    Commodi nobis distinctio aperiam totam perferendis quas.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="accordtion-item">
                  <Accordion.Header>
                    <h4 className="Section7-h4">
                    Maecenas vulputate in enim
                    </h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="Section7-p">
                    Lorem Ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus, voluptas explicabo molestiae tempore natus
                    velit sed aliquam ut! Culpa asperiores, error ullam qui!
                    Commodi nobis distinctio aperiam totam perferendis quas.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="accordtion-item">
                  <Accordion.Header>
                    <h4 className="Section7-h4">
                    Curabitur ut venenatis urna
                    </h4>
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="Section7-p">
                    Lorem Ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatibus, voluptas explicabo molestiae tempore natus
                    velit sed aliquam ut! Culpa asperiores, error ullam qui!
                    Commodi nobis distinctio aperiam totam perferendis quas.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
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
