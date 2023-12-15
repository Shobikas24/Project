import Background3 from "./images/background3.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaRegCircleUser } from "react-icons/fa6";
import { VscSymbolColor } from "react-icons/vsc";
import "./Css/Section2.css";
import "./Css/Home.css";
function Section2() {
  return (
    <div
      className="Section2"
      style={{ backgroundImage: `url(${Background3})` }}
    >
      
      <Container className="Section2-container mx-auto text-center  h-100" >
      <Row style={{marginTop:"-40px",height:"100px" }}
      
      id="Section2-container2"
      className="d-flex justify-content-center "
    >
      <h1>
        <strong>Our Services</strong>
      </h1>
    </Row>
        <Row className="Section2-row d-flex justify-content-center align-items-center ">
          <Col calssName="Section2-col1 ">
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu
                  risus eget sapien pellentesque porttitor nec ut velit
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
                  <strong className="Section2card-title">Portrait Photo</strong>
                </Card.Title>
                <Card.Text className="Section2card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu
                  risus eget sapien pellentesque porttitor nec ut velit
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu
                  risus eget sapien pellentesque porttitor nec ut velit
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Section2;
