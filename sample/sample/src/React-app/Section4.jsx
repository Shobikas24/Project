import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Button } from "react-bootstrap";
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
        <Container className="mb-5 pb-5">
          <Carousel  className="w-100 h-100 mb-5 pb-5">
            <Carousel.Item>
              <img src={Photo} alt="img" className="img-thumbnail w-100 Section4-img" />
              <Carousel.Caption className=" carousel-caption">
                <Container  >
                <h1>
                  <strong>$39</strong>
                </h1>
                <h2>
                  <strong>Start</strong>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu
                  risus sapien pellentesque.
                </p>
                <div className="Section4button-container">
                  <Button className="Section4card-button">Buy Now</Button>
                </div>
                </Container>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
              <img src={Dog} alt="img" className="img-thumbnail w-100 Section4-img" />

              <Carousel.Caption  className=" carousel-caption">
                <h1>
                  <strong>$59</strong>
                </h1>
                <h2>
                  <strong>Basic</strong>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu
                  risus sapien pellentesque.
                </p>
                <div className="Section4button-container">
                  <Button className="Section4card-button">Buy Now</Button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={Nature} alt="img" className="img-thumbnail w-100 Section4-img " />
              <Carousel.Caption className="carousel-caption">
                <h1>
                  <strong>$89</strong>
                </h1>
                <h2>
                  <strong>Pro</strong>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu
                  risus sapien pellentesque.
                </p>
                <div className="Section4button-container">
                  <Button className="Section4card-button">Buy Now</Button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </Container>
    </div>
  );
}

export default Section4;
