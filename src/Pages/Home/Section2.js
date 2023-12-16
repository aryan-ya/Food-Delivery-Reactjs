import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Section2 = () => {
  return (
    <>
      <section className="about_section">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center">
            <h2>The burger tastes better when you eat it with your family</h2>
            <p>
              Porta semper lacus cursus, feugiat primis ultrice a ligula risus
              auctor an tempus feugiat dolor lacinia cubilia curae integer orci
              congue and metus integer primis in integer metus
            </p>
            <Link to="/" className="btn order_now btn_red">Explore Full Menu</Link>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  
  );
};

export default Section2;
