import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Header from "./Navbar";
import Footer from "./Footer";
import Nature from "./images/nature.jpg";
import Background5 from "./images/background5.jpg";
function Picture3() {
  return (
    <>
      <div
        className="Picture2"
        style={{ backgroundImage: `url(${Background5})` }}
      >
        <Header />
        <Container className="pt-5 pb-5">
          <Row>
            <Col lg={6} md={6} xs={12}>
              <img src={Nature} alt="photo" className="w-100 img-thumbnail" />
            </Col>
            <Col className="pt-5 d-flex " lg={6} md={6} xs={12}>
              <div>
                <h1 className="w-100 " >
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
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default Picture3;
