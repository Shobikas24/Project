import Background5 from "./images/background5.jpg";
import Img1 from "./images/mbr.jpeg";
import Background3 from "./images/background3.jpg";
import Background8 from "./images/background8.jpg";
import Img2 from "./images/mbr-1.jpeg";
import Background4 from "./images/background4.jpg";
import Img3 from "./images/mbr-1.jpg";
import Img4 from "./images/mbr-2.jpg";
import Img5 from "./images/mbr-3.jpg";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaRegCircleUser } from "react-icons/fa6";
import { VscSymbolColor } from "react-icons/vsc";
import "./Css/Home.css";

function Home() {
  return (
    <>
      <div className="Banner">
        {/* Section1 */}

        <img className="Image1" src={Background5} alt="background5" />

        {/* Navbar */}

        <Navbar expand="lg md  xl " className="Header  sticky-top ">
          <Container fluid>
            <Navbar.Brand href="#home">
              <h5 className="Brand"> Glass M5</h5>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" id="Toggler" />
            <Navbar.Collapse id="basic-navbar-nav ">
              <div className="Items justify-content-center">
                <Nav className=" me-auto Nav1">
                  <Nav.Link href="#home">
                    <h5 className="Links ">Home</h5>
                  </Nav.Link>
                  <Nav.Link href="#link">
                    <h5 className="Links">About Us</h5>
                  </Nav.Link>
                  <Nav.Link href="#link">
                    <h5 className="Links"> Services</h5>
                  </Nav.Link>
                  <Nav.Link href="#link">
                    <h5 className="Links">Contacts</h5>
                  </Nav.Link>
                  <Nav.Link href="#link">
                    <div className="Navbarbutton-container">
                      <button className="nav-button btn-primary">
                        Send message
                      </button>
                    </div>
                  </Nav.Link>
                </Nav>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Section1 Card and Image */}
        <div className="Section1">
          <Container fluid>
            <Row className="Section1-row">
              <Col xs={12} lg={6} className="Section1-Col1">
                <Card className="Section1-card">
                  <Card.Body className="Section1card-body">
                    <Card.Title className="Section1card-title">
                      <h1>
                        <strong>Photographer</strong>
                      </h1>
                    </Card.Title>
                    <Card.Text className="Section1card-text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit.Mauris ultrices risus eget nunc ullamcorper, ut
                        consectetur eros mattis. Praesent lobortis in est sit
                        amet pretium.
                      </p>
                    </Card.Text>
                    <Button className="Section1card-button">Read more</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={12} lg={6} className="Section1-Col2">
                <img className="Section1-image" src={Img1} alt="img1"></img>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Section2 Services page card and text */}
        <div
          className="Section2"
          style={{ backgroundImage: `url(${Background3})` }}
        >
          <h1>
            <strong>Our Services</strong>
          </h1>
          <Container className="Section2-container mx-auto text-center d-flex justify-content-center align-items-center h-100">
            <Row className="Section2-row">
              <Col calssName="Section2-col1">
                <Card className="Section2-card">
                  <div className="icon-container">
                    <HiOutlineLightBulb className="bulb" />
                  </div>
                  <Card.Body>
                    <Card.Title style={{ marginTop: "20px" }}>
                      <strong className="Section2card-title">
                        Interior Photography
                      </strong>
                    </Card.Title>
                    <Card.Text className="Section2card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut eu risus eget sapien pellentesque porttitor nec ut
                      velit
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col calssName="Section2-col2">
                <Card className="Section2-card">
                  <div className="icon-container">
                    <FaRegCircleUser className="user" />
                  </div>
                  <Card.Body>
                    <Card.Title style={{ marginTop: "20px" }}>
                      <strong className="Section2card-title">
                        Portrait Photo
                      </strong>
                    </Card.Title>
                    <Card.Text className="Section2card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut eu risus eget sapien pellentesque porttitor nec ut
                      velit
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="Section2-col2">
                {" "}
                <Card className="Section2-card" id="Section2-card3">
                  <div className="icon-container">
                    <VscSymbolColor className="colorpallet" />
                  </div>
                  <Card.Body>
                    <Card.Title style={{ marginTop: "20px" }}>
                      <strong className="Section2card-title">Art Photo</strong>
                    </Card.Title>
                    <Card.Text className="Section2card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut eu risus eget sapien pellentesque porttitor nec ut
                      velit
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Section3 About Us image and card */}

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

        {/* Section4 our prising */}

        <div
          className="Section4"
          style={{ backgroundImage: `url(${Background4})` }}
        >
          <Container fluid className="Section4-container">
            <Row>
              <div className="Section4text-container">
                <h5>OUR PRICING</h5>
                <h2>
                  <strong>Lorem ipsum dolor sit amet consectetur.</strong>
                </h2>
              </div>
            </Row>
            <Row className="Section4-Row" style={{ marginTop: "20px" }}>
              <Col className="Section4-col" xs={12} md={6} lg={4}>
                <Card className="Section4-card">
                  <Card.Body className="Section4card-body">
                    <Card.Title>
                      <h1>
                        <strong>$39</strong>
                      </h1>
                      <br></br>
                    </Card.Title>
                    <Card.Subtitle>
                      <h2>
                        <strong>Start</strong>
                      </h2>
                    </Card.Subtitle>
                    <Card.Text>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut eu risus sapien pellentesque.
                      </p>
                    </Card.Text>
                    <div className="Section4button-container">
                      <Button className="Section4card-button">Buy Now</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col className="Section4-col" xs={12} md={6} lg={4}>
                <Card className="Section4-card">
                  <Card.Body className="Section4card-body">
                    <Card.Title>
                      <h1>
                        <strong>$59</strong>
                      </h1>
                    </Card.Title>
                    <br></br>
                    <Card.Subtitle>
                      <h2>
                        <strong>Basic</strong>
                      </h2>
                    </Card.Subtitle>
                    <Card.Text>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut eu risus sapien pellentesque.
                      </p>
                    </Card.Text>
                    <div className="Section4button-container">
                      <Button className="Section4card-button">Buy Now</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col
                className="Section4-col"
                xs={12}
                md={6}
                lg={4}
                id="Section4-col3"
              >
                <Card className="Section4-card">
                  <Card.Body className="Section4card-body">
                    <Card.Title>
                      <h1>
                        <strong>$89</strong>
                      </h1>
                    </Card.Title>
                    <br></br>
                    <Card.Subtitle>
                      <h2>
                        <strong>Pro</strong>
                      </h2>
                    </Card.Subtitle>
                    <Card.Text>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut eu risus sapien pellentesque.
                      </p>
                    </Card.Text>
                    <div className="Section4button-container">
                      <Button className="Section4card-button">Buy Now</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Section5 image and text*/}
        <div
          className="Section5"
          style={{ backgroundImage: `url(${Background5})` }}
        >
          <Container fluid>
            <Row className="Section5-row1">
              <div className="Section5text-container">
                <h5>OUR WORKS</h5>
                <h3>Lorem ipsum dolor sit amet.</h3>
              </div>
            </Row>
            <Row className="Section5-row2">
              <Col className="Section5-col">
                <img src={Img3} alt="image3" className="Image3" />
              </Col>
              <Col className="Section5-col">
                <img src={Img4} alt="image4" className="Image3" />
              </Col>
              <Col className="Section5-col">
                <img src={Img5} alt="image5" className="Image3" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Home;
