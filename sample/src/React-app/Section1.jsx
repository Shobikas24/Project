import Img1 from "./images/mbr.jpeg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Css/Section1.css";

function Section1() {
  return (
    
    <div className="Section1"
    >
      <Container  className="Section1-container">
        <Row className="Section1-row">
          <Col xs={12} lg={6} className="Section1-Col1">
            <Card className="Section1-card">
              <Card.Body className="Section1card-body">
                <div className="Section1text-holder">
                <Card.Title className="Section1card-title">
                  <h1>
                    <strong>Photographer</strong>
                  </h1>
                </Card.Title>
                <Card.Text className="Section1card-text">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Mauris ultrices risus eget nunc ullamcorper, ut
                    consectetur eros 
                     mattis. Praesent lobortis in est sit amet
                    pretium.
                  </p>
                </Card.Text>
                <div className="Section1button-holder">
                <Button className="Section1card-button">Read more</Button>
                </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} lg={6} className="Section1-Col2">
            <img className="Section1-image" src={Img1} alt="img1"></img>
          </Col>
        </Row>
      </Container>

    </div>
  );
}
export default Section1;
