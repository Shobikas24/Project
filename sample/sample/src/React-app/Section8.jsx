import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Css/Section8.css";

import Background2 from "./images/background2.jpg";
import Background5 from "./images/background5.jpg";
import Background7 from "./images/background7.jpg";
import Map from "./Map";
import Imag1 from "./images/1.png";
import Imag2 from "./images/2.png";
import Imag3 from "./images/3.png";
import Imag4 from "./images/4.png";
import Imag5 from "./images/5.png";
import Imag6 from "./images/team1.jpg";

function Section8() {
  return (
    <>
      <div
        className="w-100  bg-no-repeat"
        id="Section8"
        style={{ backgroundImage: `url(${Background2})` }}
      >
        <Container className="w-100 ">
          {/* Row1 */}
          <Row>
            <Col className="mt-5">
              <div className="text-center">
                <h4 className="text-white ">OUR CLIENTS</h4>
                <h2 className="text-white pt-2 ">
                  <strong>We love to work with our clients</strong>
                </h2>
              </div>
            </Col>
          </Row>

          {/* Row2 */}
          <Row className="mt-5" id="row2">
            <Col xs={12} md={4}>
              <div id="img-wrapper">
                <img src={Imag1} alt="imag" className="w-50 " />
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div id="img-wrapper">
                <img src={Imag2} alt="imag" className="w-50" />
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div id="img-wrapper">
                <img src={Imag3} alt="imag" className="w-50" />
              </div>
            </Col>
          </Row>

          {/* Row3 */}
          <Row className="mt-5" id="row3">
            <Col xs={12} md={4}>
              <div id="img-wrapper">
                <img src={Imag4} alt="imag" className="w-50" />
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div id="img-wrapper">
                <img src={Imag5} alt="imag" className="w-50" />
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div id="img-wrapper">
                <img src={Imag1} alt="imag" className="w-50" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Section9 */}
      <div
        className="w-100 "
        id="Section9"
        style={{ backgroundImage: `url(${Background7})` }}
      >
        <Container className="Section9-container">
          <div className="Section9text-container">
            <h7 className="text1">HAVE A NEW PROJECT IN MIND?</h7>
            <br></br>
            <h1 className="display-2 text2">
              <strong>Say Hello</strong>
            </h1>
            <br></br>
            <h5 className="text3">hello@yoursite.com</h5>
          </div>
        </Container>
      </div>

    <Map/>  
    
      {/* Section11*/}
      <div
        className="w-100  bg-no-repeat h-100 d-flex align-items-center justify-content-center"
        id="Section11"
        style={{ backgroundImage: `url(${Background5})` }}
      >
        <Container className="Section11-container">
          <Row className="Section11-row">
            <Col className="my-auto w-40" id="Section11-col" >
              <img src={Imag6} alt="" id="Imag6" />
            </Col>
            <Col id="Section11-col2">
              <div className="Section11-content display-5">
                <div
                  style={{
                    
                    marginBottom: "10%",
                    marginTop: "10%",
                    marginLeft:"3%",
                    
                  }}
                >
                  <h2>
                    <strong>
                      Lorem ipsum dolor sit amet, consectetur
                       adipiscing elit.
                      Nam orci nisl, rhoncus viverra fringilla in, luctus vitae
                      elit.
                    </strong>
                  </h2>
                  <p className="display-4">Gabriel Moreira</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Section8;
