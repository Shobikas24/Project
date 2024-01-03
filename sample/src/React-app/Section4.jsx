import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Background4 from "./images/background4.jpg";
import Dog from "./images/dog.png";
import Nature from "./images/nature.jpg";
import Photo from "./images/photo.webp";
import "./Css/Section4.css";



function Section4() {
  return (
    <div
      className="Section4 "
      style={{ backgroundImage: `url(${Background4})` }}
    >
      <Container fluid className="Section4-container">
        <Row className="Section4text-container ">
          <h5 className="mt-5 pt-5">OUR PRICING</h5>
          <h2 className="pb-2">
            <strong>Lorem ipsum dolor sit amet consectetur.</strong>
          </h2>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="Section4-col" lg={4} md={6} xs={12}>
            <Card  className="Section4-card">
              <Card.Img
                variant="top"
                src={Photo}
                className="img-thumbnail"
                style={{ borderRadius: "30px" }}
              />
              <Card.Body>
                <div className="Section4text-holder">
                <Card.Title>
                  {" "}
                  <h1>
                    <strong>$39</strong>
                  </h1>
                </Card.Title>
                <h2>
                  <strong>Start</strong>
                </h2>
                <Card.Text>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    eu risus sapien pellentesque.
                  </p>
                </Card.Text>
                <div className="Section4button-container">
                  <Button className="Section4card-button">Buy Now</Button>
                </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} xs={12}>
            <Card className="Section4-card">
              <Card.Img
                variant="top"
                src={Dog}
                className="img-thumbnail"
                style={{ borderRadius: "30px" }}
              />
              <Card.Body>
                <div className="Section4text-holder">
                  <Card.Title>
                    <h1>
                      <strong>$59</strong>
                    </h1>
                  </Card.Title>
                  <h2>
                    <strong>Basic</strong>
                  </h2>
                  <Card.Text>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut eu risus sapien pellentesque.
                    </p>
                  </Card.Text>
                  <div className="Section4button-container">
                    <Button className="Section4card-button">Buy Now</Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} xs={12} id="Section4-col3">
            <Card  className="Section4-card">
              <Card.Img
                variant="top"
                src={Nature}
                className="img-thumbnail"
                style={{ borderRadius: "30px" }}
              />
              <Card.Body>
                <div className="Section4text-holder">
                  <Card.Title>
                    <h1>
                      <strong>$89</strong>
                    </h1>
                  </Card.Title>
                  <h2>
                    <strong>Pro</strong>
                  </h2>
                  <Card.Text>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut eu risus sapien pellentesque.
                    </p>
                  </Card.Text>
                  <div className="Section4button-container">
                    <Button className="Section4card-button">Buy Now</Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Section4;
