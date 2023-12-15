import Background8 from "./images/background8.jpg";
import Img2 from "./images/mbr-1.jpeg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function Section3(){
    return(
<div
          className="Section3"
          style={{ backgroundImage: `url(${Background8})` }}
        >
          <Container fluid className="Section3-container">
            <Row className="Section3-Row">
              <Col lg={6} md={10} xs={12} className="Section3-Col1">
                <img src={Img2} alt="Img2" className="Section3-Image" />
              </Col>
              <Col lg={6} md={10} xs={12} className="Section3-Col2">
                <Card className="Section3-card">
                  <Card.Body className="Section3-cardbody">
                    <Card.Title>
                      <h1>
                        <strong>About Us</strong>
                      </h1>
                    </Card.Title>
                    <Card.Text>
                      <Container>
                        <Row>
                          <Col className="Section3card-Col1">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Mauris ultrices risus eget nunc ullamcorper,
                              ut consectetur eros mattis. Praesent lobortis in
                              est sit amet pretium.
                            </p>
                          </Col>
                          <Col className="Section3card-Col2">
                            <p>
                              Fusce ante libero, ultrices sed ullamcorper quis,
                              volutpat in metus. Mauris pulvinar, neque in
                              porttitor faucibus, tortor enim
                            </p>
                          </Col>
                        </Row>
                      </Container>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

    );
}
export default Section3;