import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitting(true);

    try {
      const response = await fetch(
        "https://e-commerce-app-f11fb-default-rtdb.firebaseio.com/ContactUsData.json",
        {
          method: "POST",
          body: JSON.stringify({ name, email, phone }),
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
      <Card className="contact-details">
        <h1>Contact Details</h1>
        <p>Email: generics@gmail.com</p>
        <p>Phone: 123-456-7890</p>
        <p>Address: 123 ABC Street, XYZ City</p>
      </Card>
      <Card className="contact-form">
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
          <button type="submit" disabled={submitting}>
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </Card>
    </Container>
  );
};

export default ContactPage;
