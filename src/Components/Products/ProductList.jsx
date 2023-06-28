import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

const ProductList = ({ title, imageUrl, price }) => {
  return (
    
    <Container>
      <Row xs={4} className="mb-3 mt-3">
        <Col md={3}>
          <Card style={{padding: '0.25rem', boxShadow: '0px 2px 5px #2f5da7'}}>
            <Card.Img variant="top" src={imageUrl} alt={title} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>Price: {price}</Card.Text>
              <Button type="submit" style={{backgroundColor:'#2e5ba2'}}>Add to Cart</Button>
            </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductList;
