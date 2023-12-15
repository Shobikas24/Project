import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Background4 from "./images/background4.jpg";
import Bird from "./images/bird.PNG";
import Dog from "./images/dog.png";
import Girl from "./images/girl.png";
import './Css/Section4.css';

function Section4() {
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      className="Section4 "
      style={{ backgroundImage: `url(${Background4})` }}
    >
      <Container fluid className="Section4-container">
        <Row className="Section4text-container">
          <h5>OUR PRICING</h5>
          <h2>
            <strong>Lorem ipsum dolor sit amet consectetur.</strong>
          </h2>
        </Row>
        <Row className="Section4-Row" style={{ marginTop: "20px" }}>
          <Col xs={12} md={8} lg={6} className="mx-auto">
            <Slider {...slickSettings} className="slick-slider">
              {/* First Pricing Option */}
              <div>
                <Card className="Section4-card">
                  <Card.Img
                    variant="top"
                    src={Bird}
                    className="card-img img-thumbnail "
                  />
                  <Card.Body className="Section4card-body">
                    <Card.Title>
                      <h1>
                        <strong>$39</strong>
                      </h1>
                    </Card.Title>
                    <Card.Subtitle>
                      <h2>
                        <strong>Start</strong>
                      </h2>
                    </Card.Subtitle>
                    <Card.Text>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Ut eu risus sapien pellentesque.
                      </p>
                    </Card.Text>
                    <div className="Section4button-container">
                      <Button className="Section4card-button">Buy Now</Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>

              {/* Second Pricing Option */}
              <div>
                <Card className="Section4-card">
                  <Card.Img
                    variant="top"
                    src={Dog}
                    className="card-img img-thumbnail "
                  />
                  <Card.Body className="Section4card-body">
                    <Card.Title>
                      <h1>
                        <strong>$59</strong>
                      </h1>
                    </Card.Title>
                    <Card.Subtitle>
                      <h2>
                        <strong>Basic</strong>
                      </h2>
                    </Card.Subtitle>
                    <Card.Text>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Ut eu risus sapien pellentesque.
                      </p>
                    </Card.Text>
                    <div className="Section4button-container">
                      <Button className="Section4card-button">Buy Now</Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>

              {/* Third Pricing Option */}
              <div>
                <Card className="Section4-card">
                  <Card.Img
                    variant="top"
                    src={Girl}
                    className="card-img img-thumbnail "
                  />
                  <Card.Body className="Section4card-body">
                    <Card.Title>
                      <h1>
                        <strong>$89</strong>
                      </h1>
                    </Card.Title>
                    <Card.Subtitle>
                      <h2>
                        <strong>Pro</strong>
                      </h2>
                    </Card.Subtitle>
                    <Card.Text>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Ut eu risus sapien pellentesque.
                      </p>
                    </Card.Text>
                    <div className="Section4button-container">
                      <Button className="Section4card-button">Buy Now</Button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Section4;
