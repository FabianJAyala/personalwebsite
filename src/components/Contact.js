import { useState, useRef } from "react";
import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";
import 'animate.css';
import emailjs from "emailjs-com";
import TrackVisibility from 'react-on-screen';
import * as formik from 'formik';
import * as yup from 'yup';

export const Contact = () => {

  const form = useRef();
  const { Formik } = formik;
  const [isSuccessAlertShown, setIsSuccessAlertShown] = useState(false);
  const [isErrorAlertShown, setIsErrorAlertShown] = useState(false);

  const schema = yup.object().shape({
    firstName: yup.string().required("First name is required."),
    lastName: yup.string().required("Last name is required."),
    email: yup.string().email("Please enter a valid email.").required("Email is required."),
    phone: yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, {message: "Please enter a valid phone number.", excludeEmptyString: false}),
    message: yup.string(),
  });

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <Formik
                  validationSchema={schema}
                  initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: '',
                  }}
                  onSubmit={(values, { setSubmitting, resetForm }) => {
                    emailjs.sendForm('service_nxlvuvj', 'template_b3rzxlg', form.current, 'HNTi0tNwRouvsr6Bz')
                    .then((result) => {
                      setIsSuccessAlertShown(true);
                      setIsErrorAlertShown(false);
                      resetForm();
                      setSubmitting(false);
                    })
                    .catch((error) => {
                      setIsSuccessAlertShown(false);
                      setIsErrorAlertShown(true);
                      setSubmitting(false);
                    });
                  }}
                >
                  {({ handleSubmit, handleChange, values, touched, errors }) => (
                    <Form ref={form} onSubmit={handleSubmit}>
                      {isSuccessAlertShown && (
                        <Alert variant="success">
                          Message sent successfully!
                        </Alert>
                      )}
                      {isErrorAlertShown && (
                        <Alert variant="warning">
                          Something went wrong, please try in a few minutes.
                        </Alert>
                      )}
                      <Row className="mb-3">
                      <Form.Group className="phone-space" as={Col} md="6" controlId="validationFormik01">
                          <Form.Label>First Name *</Form.Label>
                          <Form.Control
                            type="text"
                            name="firstName"
                            value={values.firstName}
                            onChange={handleChange}
                            isInvalid={touched.firstName && !!errors.firstName}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.firstName}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationFormik02">
                          <Form.Label>Last Name *</Form.Label>
                          <Form.Control
                            type="text"
                            name="lastName"
                            value={values.lastName}
                            onChange={handleChange}
                            isInvalid={touched.lastName && !!errors.lastName}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.lastName}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Row>
                      <Row className="mb-3">
                      <Form.Group className="phone-space" as={Col} md="6" controlId="validationFormik03">
                          <Form.Label>Email *</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            isInvalid={touched.email && !!errors.email}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.email}
                          </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="6" controlId="validationFormik04">
                          <Form.Label>Phone</Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            value={values.phone}
                            onChange={handleChange}
                            isInvalid={!!errors.phone}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.phone}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Row>
                      <Row className="mb-4">
                      <Form.Group as={Col} md="12" controlId="validationFormik05">
                          <Form.Label>Message</Form.Label>
                          <Form.Control
                            type="text"
                            name="message"
                            value={values.message}
                            onChange={handleChange}
                            isInvalid={!!errors.message}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.message}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Row>
                      <button type="submit"><span>Send</span></button>
                    </Form>
                  )}
                </Formik>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}