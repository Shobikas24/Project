import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../action/cartAction";

import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Background4 from "./images/background4.jpg";
function Section4() {
  const dispatch = useDispatch();
  const courses1 = useSelector((state) => state.courses1);

  return (
    <div
      className="Section4 w-100"
      style={{ backgroundImage: `url(${Background4})` }}
    >
      <Container className="Section4-container w-100">
        <Row className=" text-center">
          <div className="d-inline Section4text-container">
            
          <h5 >OUR PRICING</h5>
          <h2>
            <strong>Lorem ipsum dolor sit amet consectetur.</strong>
          </h2>
          </div>
        </Row>
        <ul className="product-list mx-0 px-0">
          {courses1.map((product) => (
            <li key={product.id} className="product-card">
              <Row g={4} className="popularc">
                <Col
                  lg={4}
                  md={6}
                  xs={12}
                  className="cards-col  w-100 "
                >
                  <Card className="Section4-card">
                    <div className="popular-course overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.price}
                        className="course-img position-reletive img-thumbnail w-100"  style={{borderRadius:"30px"}}
                      />
                    </div>
                    <div className="Section4text-holder mt-4">
                      <h1>
                        <strong  style={{ fontWeight: "bold" }}>
                          {" "}
                          ₹{product.price}
                        </strong>
                      </h1>

                      <div className="product-details ">
                        <h5 className="product-name ">{product.title}</h5>
                        
                        <p>{product.paragraph}</p>
                        <div className="Section4button-container">
                          <button
                            className="Section4card-button "
                            onClick={() => dispatch(addToCart(product))}
                          >
                            Buy Now
                          </button>{" "}
                        </div>
                      </div>
                    </div>
                  </Card>
                </Col>
              </Row>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
export default Section4;
