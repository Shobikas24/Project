import React, { useState } from "react";
import { Collapse, Container } from "react-bootstrap";
import Background5 from "./images/background5.jpg";
import sec from "./images/mbr-4.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Css/Section7.css";
function Section7() {
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);
  const [isExpanded3, setIsExpanded3] = useState(false);
  const [rotateIcon1, setRotateIcon1] = useState(false);
  const [rotateIcon2, setRotateIcon2] = useState(false);
  const [rotateIcon3, setRotateIcon3] = useState(false);

  const handleToggle1 = () => {
    setIsExpanded1(!isExpanded1);
    setIsExpanded2(false);
    setIsExpanded3(false);
    setRotateIcon1(!rotateIcon1);
  };
  const handleToggle2 = () => {
    setIsExpanded2(!isExpanded2);
    setIsExpanded3(false);
    setIsExpanded1(false);
    setRotateIcon2(!rotateIcon2);
  };
  const handleToggle3 = () => {
    setIsExpanded3(!isExpanded3);
    setIsExpanded2(false);
    setIsExpanded1(false);
    setRotateIcon3(!rotateIcon3);
  };

  return (
    <div
      className="Section7"
      id="Section"
      style={{
        backgroundImage: `url(${Background5})`,
      }}
    >
      <Container
        fluid
        style={{ width: "100%", height: "100%" }}
        className="Section7-container"
      >
        <Row id="Section7-row">
          <Col
            className="col col-lg-6 col-md-6 col-12 pt-5 w-50"
            id="Section7-col1"
          >
            <div className="Section7text-container">
              <h2 class="mbr-fonts-style mbr-section-title mb-1 mbr-white mbr-semibold align-left display-2">
                <strong>Frequently</strong>
                <div id="text2">
                  <strong>Asked Questions</strong>
                </div>
              </h2>
            </div>
            <div style={{ width: "90%", marginLeft: "30px" }}>
              {/*box1  */}
              <div className="box-container" onClick={handleToggle1}>

              <div
                className="box1 row text-sm-center text-md-center  w-100 "
                style={{ borderBottom: "1px solid #e4e4e4" }}
                onClick={handleToggle1}
              >
                <div
                  className="col col-lg-5 col-md-12 col-12 text-sm-center text-md-center w-100 h-100"
                  id="Section7-t"
                >
                  <h5 className="pt-2 " id="Section7-h4">
                    Lorem Ipsum dolor sit amet
                  </h5>
                  <div
                    className={`icon-container ${rotateIcon1 ? "rotated" : ""}`}
                    id="symbol"
                  >
                    <span id="icon" className="plus-icon">
                      +
                    </span>
                  </div>
                </div>
              </div>

              <Collapse in={isExpanded1}>
                <div className="collapse row" style={{ height: "150px" }}>
                  <div
                    className="col-lg-6 col-md-12 col-12  w-100"
                    id="Section7-p"
                  >
                    <p>
                      Lorem Ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus, voluptas explicabo molestiae tempore natus
                      velit sed aliquam ut! Culpa asperiores, error ullam qui!
                      Commodi nobis distinctio aperiam totam perferendis quas.
                    </p>
                  </div>
                </div>
              </Collapse>
              </div>

              {/* Box2 */}

              <div
                className="box1 row   text-sm-center text-md-center mt-2 w-100"
                style={{ borderBottom: "1px solid #e4e4e4" }}
                onClick={handleToggle2}
              >
                <div
                  className="col col-lg-5 col-md-12 col-12 text-sm-center text-md-center w-100 h-100"
                  id="Section7-t"
                >
                  <h5 className="pt-2" id="Section7-h4">
                    Maecenas vulputate in enim
                  </h5>

                  <div
                    className={`icon-container ${rotateIcon2 ? "rotated" : ""}`}
                    id="symbol"
                  >
                    <span id="icon" className="plus-icon">
                      +
                    </span>
                  </div>
                </div>
              </div>

              <Collapse in={isExpanded2}>
                <div className="collapse row" style={{ height: "150px" }}>
                  <div
                    className="col-lg-6 col-md-12 col-12  w-100"
                    id="Section7-p"
                  >
                    <p>
                      Lorem Ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus, voluptas explicabo molestiae tempore natus
                      velit sed aliquam ut! Culpa asperiores, error ullam qui!
                      Commodi nobis distinctio aperiam totam perferendis quas.
                    </p>
                  </div>
                </div>
              </Collapse>

              {/* Box3 */}

              <div
                className="box1 row   text-sm-center text-md-center mt-2 w-100"
                id="box3"
                style={{
                  borderBottom: "1px solid #e4e4e4",
                }}
                onClick={handleToggle3}
              >
                <div
                  className="col col-lg-5 col-md-12 col-12 text-sm-center text-md-center w-100 h-100"
                  id="Section7-t"
                >
                  <h5 className="pt-2 " id="Section7-h4">
                    Curabitur ut venenatis urna
                  </h5>

                  <div
                    className={`icon-container ${rotateIcon3 ? "rotated" : ""}`}
                    id="symbol" 
                  >
                    <span id="icon" className="plus-icon">
                      +
                    </span>
                  </div>
                </div>
              </div>

              <Collapse in={isExpanded3}>
                <div className="collapse row" style={{ height: "150px" }}>
                  <div
                    className="col-lg-6 col-md-12 col-12  w-100"
                    id="Section7-p"
                  >
                    <p>
                      Lorem Ipsum dolor sit amet, consectetur adipisicing elit.
                      Voluptatibus, voluptas explicabo molestiae tempore natus
                      velit sed aliquam ut! Culpa asperiores, error ullam qui!
                      Commodi nobis distinctio aperiam totam perferendis quas.
                    </p>
                  </div>
                </div>
              </Collapse>
            </div>
          </Col>
          <Col xs={12} md={8} lg={6} className="Section7-col2">
            <img src={sec} alt="" id="Col-img" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Section7;
