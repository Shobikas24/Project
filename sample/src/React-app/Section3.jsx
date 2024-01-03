import Background8 from "./images/background8.jpg";
import Img2 from "./images/mbr-1.jpeg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./Css/Home.css";

function Section3() {
  return (
    <div
      className="Section3"
      style={{ backgroundImage: `url(${Background8})` }}
    >
      <Container className="Section3-container">
        <Row>
          <Col
            className="col-md-12 col-lg-5"
            style={{ paddingRight: "16px", margin: "0 auto" }}
          >
            <div className="image-wrapper">
              <img src={Img2} alt="Img2" className="Section3-Image" />
            </div>
          </Col>
          <Col
            lg={7}
            className="col-12 "
            style={{ paddingRight: "16px", paddingLeft: "16px" }}
          >
            <div className="card-wrapper mt-5 pt-3">
              <Card className="Section3-card">
                <Card.Body className="Section3-cardbody">
                  <Card.Title>
                    <h1>
                      <strong>About Us</strong>
                    </h1>
                  </Card.Title>
                  <Card.Text>
                    <Row>
                      <Col lg={6} className="col-lg-6">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Mauris ultrices risus eget nunc ullamcorper, ut
                          consectetur eros mattis. Praesent lobortis in est sit
                          amet pretium.
                        </p>
                      </Col>
                      <Col lg={6} className="col-lg-6">
                        <p>
                          {" "}
                          Fusce ante libero, ultrices sed ullamcorper quis,
                          volutpat in metus. Mauris pulvinar, neque in porttitor
                          faucibus, tortor enim
                        </p>
                      </Col>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Section3;
