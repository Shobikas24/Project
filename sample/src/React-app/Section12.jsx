import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Background1 from "./images/background1.jpg";

function GridBasicExample() {
  return (
    <div  className="w-100  bg-no-repeat h-100 d-flex align-items-center justify-content-center"
    id="Section12"
    style={{ backgroundImage: `url(${Background1})` }}>
    <Form style={{borderStyle:"dotted",width:"80%",marginTop:"100px"}} className="form">
      <Row>
        <Col>
          <Form.Control placeholder="Name" />
        </Col>
        <Col>
        <Form.Control type="email" placeholder="Email" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Control placeholder="Subject" />
        </Col>
        <Col>
        <Form.Control type="number" placeholder="Phone" />
        </Col>
      </Row>
      <Row>
        <Col>
        <Form.Control type="textarea" placeholder="Message" />

        </Col>
      </Row>
    </Form>
    </div>
  );
}

export default GridBasicExample;