import React, { useState } from "react";
import { Image, Card, Container, Row, Col, Button } from "react-bootstrap";
import "./ContactUs.css";
import emailIcon from '../Images/email.png';
import callIcon from '../Images/call.png';
import mapIcon from '../Images/map.png';
const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);

    try {
      const response = await fetch(
        "https://e-commerce-app-f11fb-default-rtdb.firebaseio.com/ContactUsData.json",
        {
          method: "POST",
          body: JSON.stringify({ name, email, phone, message }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      console.log("Form submitted successfully!");
      alert("Form submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("Error submitting the form. Please try again later.");
    }

    setSubmitting(false);
  };

  return (
    <Container className="contact-page">
      <Row>
        <Col>
          <Card className="contact-details">
            <Card.Body>
              <h1>Contact Details</h1>
              <Image
                src={emailIcon}
                alt="email"
                className="icon"
              />
              <p>Email: generics@gmail.com</p>
              <Image
                src={callIcon}
                alt="call"
                className="icon"
              />
              <p>Phone: 123-456-7890</p>
              <Image
                src={mapIcon}
                alt="map"
                className="icon"
              />
              <p>Address: 123 ABC Street, XYZ City</p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="contact-form">
            <Card.Body>
              <h1>Contact Us</h1>
              <form onSubmit={handleSubmit}>
                <label>
                  Name:
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label>
                  Email:
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <label>
                  Phone:
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </label>
                <label>
                  Message:
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </label>
                <Button type="submit" disabled={submitting}>
                  {submitting ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
