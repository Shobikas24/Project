import Header from "../Navbar";
import Footer from "../Footer";
import Map from "../Map";
import Background5 from "../images/background5.jpg";
// import { AiOutlineMail } from "react-icons/ai";
// import { MdOutlinePhoneAndroid } from "react-icons/md";
import "../Css/Home.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Contact() {
  const phonenumber = "+91 9876543212";
  return (
    <div>
      <Header />
      <div
        style={{ backgroundImage: `url(${Background5})` }}
        className="pt-5 Contact"
      >
        <Container className="pt-5 pb-5">
          <Row>
            <Col lg={6} md={6} xs={12}>
              {/* <AiOutlineMail className="contact-icon" /> */}
              <a href="mailto:photography@gmail.com">
                <h4 className="Contact-text">photography@gmail.com</h4>
              </a>
            </Col>
            <Col lg={6} md={6} xs={12}>
              {/* <MdOutlinePhoneAndroid className="contact-icon" /> */}
              <a href={`tel:${phonenumber}`}>
                <h4 className="Contact-text">{phonenumber}</h4>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
      <Map />
      <Footer />
    </div>
  );
}
export default Contact;
