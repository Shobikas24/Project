import React ,{useState}from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Background1 from "./images/background1.jpg";

import Row from "react-bootstrap/Row";
import * as formik from "formik";
import * as yup from "yup";
import "./Css/Section12.css";

function Section12() {
  const { Formik } = formik;
  const [submitted, setSubmitted] = useState(false);
  const [formValues, setFormValues] = useState({
    Name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const schema = yup.object().shape({
    Name: yup.string().required("Name is required"),
    email: yup.string().email().required(),
    subject: yup.string().required(),
    phone: yup
      .string()
      .required("Phone number is required")
      .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
    message: yup.string().required(),
  });
  const handleFormSubmit = (values, { resetForm }) => {

    setFormValues(values);
    setSubmitted(true);
    resetForm();
  };

  return (
    <div
      className="Section12"
      style={{ backgroundImage: `url(${Background1})` }}
    >
      <Container className=" w-100 Section12-container">
        <Card className="Section12-card ">
          <Row>
            <Formik
              validationSchema={schema}
              onSubmit={handleFormSubmit}
               initialValues={{
                Name: "",
                email: "",
                subject: "",
                phone: "",
                message: "",
              }}
            >
              {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <div
                    style={{
                      width: "90%",
                      marginLeft: "5%",
                    }}
                  >
                    <Row className="mt-5 pt-5">
                      <h4 className="Section12-h4">Contact Us</h4>
                    </Row>
                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationFormik01"
                      >

                        {/* Name */}

                        <Form.Control
                          type="text"
                          placeholder="Name"
                          name="Name"
                          value={values.Name}
                          onChange={handleChange}
                          isInvalid={touched.Name && !!errors.Name}
                          className="form-control"
                          style={{ height: "50px" }}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.Name}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationFormik06"
                      >

                        {/* Email */}

                        <Form.Control
                          type="email"
                          placeholder="Email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          isInvalid={!!errors.email}
                          className="form-control"
                          style={{ height: "50px" }}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>

                  {/* Subject */}


                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationFormik08"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Subject"
                          name="subject"
                          value={values.subject}
                          onChange={handleChange}
                          isInvalid={!!errors.subject}
                          className="form-control"
                          style={{ height: "50px" }}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.subject}
                        </Form.Control.Feedback>
                      </Form.Group>

                      {/* Phone */}


                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationFormik07"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Phone"
                          name="phone"
                          value={values.phone}
                          onChange={handleChange}
                          isInvalid={!!errors.phone}
                          className="form-control"
                          style={{ height: "50px" }}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.phone}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>

                    {/* Message */}

                    <Row className="mb-3">
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationFormik09"
                      >
                        <Form.Control
                          as="textarea"
                          placeholder="Message"
                          name="message"
                          value={values.message}
                          onChange={handleChange}
                          isInvalid={!!errors.message}
                          className="form-control"
                          style={{ height: "250px" }}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.message}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>

                    {/* Button */}

                    
                    <Row>
                      <Col md="12">
                        < Button
                          type="submit"
                          className="w-100  Section12-button"
                        >
                          Send your message
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </Form>
              )}
            </Formik>
          </Row>
        </Card>
      </Container>
    </div>
  );
}

export default Section12;
