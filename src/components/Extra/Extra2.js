import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

const Extra2 = () => {
    return (
        <div>
           <Container>
  <Row  xs={1} md={2}>
    <Col><img className='w-100 h-75' src="https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" srcset="" /></Col>
    <Col>
    <h3>Frequently Asked Questions:</h3>
    <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header><strong>What Is an Ultrabook?</strong></Accordion.Header>
    <Accordion.Body><strong>
    First there was the laptop, the first truly portable PC. Then came smaller, lighter tablets and netbooks, which were similar to laptops but achieved their tiny size by sacrificing internal storage, battery life, processor speed, and so on... Read What Is an Ultrabook?
    </strong></Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header><strong>What Is a Tablet PC?</strong></Accordion.Header>
    <Accordion.Body>
      <strong>Tablet PCs have evolved substantially since their introduction to the broad consumer market in 2010. So, what distinguishes a tablet from other mobile devices? How have the early Lenovo IdeaPads morphed into today's Tab Series, Miix Series, ThinkPad Tablets, and Yoga 2-in-1s... Read What Is a Tablet PC?</strong>
    </Accordion.Body>
  </Accordion.Item>
</Accordion></Col>
  </Row> 
  </Container>
        </div>
    );
};

export default Extra2;