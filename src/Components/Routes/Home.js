import React from "react";
import { Button, Col, Image, ListGroup, Row, Container } from "react-bootstrap";
import play from "../Images/play.png";

const HomePage = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "25vh",
          padding: "2rem",
          backgroundColor: "#989a9b",
          marginTop: "0.2rem",
        }}
      >
        <h3 style={{ border: "1px solid blue", padding: "0.3rem" }}>
          Get our Latest Album
        </h3>
        <Button className="play-button">
          <Image
            src={play}
            alt="Play"
            style={{ width: "40px", height: "40px" }}
          />
        </Button>
      </div>
      <h2
        style={{ marginTop: "1rem", textAlign: "center", marginBottom: "2rem" }}
      >
        TOURS
      </h2>
      <ListGroup> 
        <Container>
          <ListGroup.Item>
            <Row>
              <Col>
                <p style={{ fontWeight: "bold" }}>JUL 16</p>
              </Col>
              <Col>
                <p>DETROIT, MI</p>
              </Col>
              <Col>
                <p>DTE ENERGY MUSIC THEATRE</p>
              </Col>
              <Col>
                <Button>BUY TICKETS</Button>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col>
                <p style={{ fontWeight: "bold" }}>JUL 19</p>
              </Col>
              <Col>
                <p>TORONTO, ON</p>
              </Col>
              <Col>
                <p>BUDWEISER STAGE</p>
              </Col>
              <Col>
                <Button>BUY TICKETS</Button>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col>
                <p style={{ fontWeight: "bold" }}>JUL 22</p>
              </Col>
              <Col>
                <p>BRISTOW, VA</p>
              </Col>
              <Col>
                <p>JIGGY LUBE LIVE</p>
              </Col>
              <Col>
                <Button>BUY TICKETS</Button>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col>
                <p style={{ fontWeight: "bold" }}>JUL 29</p>
              </Col>
              <Col>
                <p>PHOENIX, AZ</p>
              </Col>
              <Col>
                <p>AK-CHIN PAVILION</p>
              </Col>
              <Col>
                <Button>BUY TICKETS</Button>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col>
                <p style={{ fontWeight: "bold" }}>AUG 2</p>
              </Col>
              <Col>
                <p>LAS VEGAS, NV</p>
              </Col>
              <Col>
                <p>T-MOBILE ARENA</p>
              </Col>
              <Col>
               <Button>BUY TICKETS</Button>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col>
                <p style={{ fontWeight: "bold" }}>AUG 7</p>
              </Col>
              <Col>
                <p>CONCORD, CA</p>
              </Col>
              <Col>
                <p>CONCORD PAVILION</p>
              </Col>
              <Col>
                <Button>BUY TICKETS</Button>
              </Col>
            </Row>
          </ListGroup.Item>
        </Container>
      </ListGroup>
    </>
  );
};

export default HomePage;
