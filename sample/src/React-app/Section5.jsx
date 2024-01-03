import Background5 from "./images/background5.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Img3 from "./images/mbr-1.jpg";
import Img4 from "./images/mbr-2.jpg";
import Img5 from "./images/mbr-3.jpg";
import "./Css/Section5.css";

function Section5(){
    return(
<div
          className="Section5"
          style={{ backgroundImage: `url(${Background5})` }}
        >
          <Container fluid>
            <Row className="Section5-row1">
              <div className="Section5text-container pt-5 pb-3 ml-3">
                <h5>OUR WORKS</h5>
                <h3 className="pt-1">Lorem ipsum dolor sit amet.</h3>
              </div>
            </Row>
            <div  className="mb-5 pb-5">
            <Row className="Section5image-container mb-2">
              <Col
                className="Section5row2-Col "
                xs={12}
                md={6}
                lg={4}
                id="Section5row2-col1"
              >
                <img src={Img3} alt="image3" className="Image3" />
                <div className="overlay">
                  <div className="Section5text-container2">
                    <h5>Interior Photography</h5>
                    <p>Lorem Ipsum dolor sit amet</p>
                  </div>
                </div>
              </Col>
              <Col className="Section5row2-Col " xs={12} md={6} lg={4}>
              
                <img src={Img4} alt="image3" className="Image3" />
                
                <div className="overlay ">
                  <div className="Section5text-container2">
                    <h5> Portrait Photo</h5>
                    <p>Lorem Ipsum dolor sit amet</p>
                  </div>
                </div>
              </Col>
              <Col
                className="Section5row2-Col"
                xs={12}
                md={6}
                lg={4}
                id="Section5row2-col3"
              >
                <img src={Img5} alt="image3" className="Image3" />
                <div className="overlay">
                  <div className="Section5text-container2">
                    <h5>Art Photo</h5>
                    <p>Lorem Ipsum dolor sit amet</p>
                  </div>
                </div>
              </Col>
            </Row>
            </div>
          </Container>
        </div>

    );
}
export default Section5;