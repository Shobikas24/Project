import Background3 from "./images/background3.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
// import { HiOutlineLightBulb } from "react-icons/hi";
// import { FaRegCircleUser } from "react-icons/fa6";
// import { VscSymbolColor } from "react-icons/vsc";
import "./Css/Section2.css";

function Section2() {
  return (
    <>
      <div
        className="Section2"
        style={{ backgroundImage: `url(${Background3})` }}
      >
        <Container fluid>
          <Container className="  Section2-container">
            <Row className="w-100 text-align-center pb-5 Section2-row2">
              <Col className="Section2-Col">
                <h1>
                  <strong>Our Services</strong>
                </h1>
              </Col>
            </Row>
            <Row className="Section2-row">
              <Col lg={4} md={6} xs={12}>
                <Card className="Section2-card">
                  <div className="icon-container mt-5">
                    {/* <HiOutlineLightBulb className="bulb" /> */}
                  </div>
                  <Card.Body>
                    <Card.Title className="mt-4 Section2-title">
                      <strong className="Section2card-title ">
                        Interior Photography
                      </strong>
                    </Card.Title>
                    <Card.Text className="Section2card-text mt-3 ml-1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut eu risus eget sapien pellentesque porttitor nec ut
                      velit
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={4} md={6} xs={12}>
                <Card className="Section2-card">
                  <div className="icon-container mt-5">
                    {/* <FaRegCircleUser className="user" /> */}
                  </div>
                  <Card.Body>
                    <Card.Title className="mt-4 Section2-title">
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
              <Col lg={4} md={6} xs={12} className="Section2-col3">
                <Card className="Section2-card" id="Section2-card3">
                  <div className="icon-container mt-5">
                    {/* <VscSymbolColor className="colorpallet" /> */}
                  </div>
                  <Card.Body>
                    <Card.Title className="mt-4 Section2-title">
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
        </Container>
      </div>
    </>
  );
}
export default Section2;
