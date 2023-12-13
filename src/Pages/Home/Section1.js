import React from 'react';
import { Container , Row , Col } from 'react-bootstrap';
import Burger from "../../assets/hero/hero-2.png";

function Section1() {
  return (
   <section className='hero_section'>
  <Container>
  <Row>
    <Col lg= {7} className='mb-5 mb-lg-0'>
        <div className='position:relative'>
           <img src={Burger} className='img-fluid' alt='Hero' />
        </div>
    </Col>
  </Row>
  </Container>
   </section>
  )
}

export default Section1