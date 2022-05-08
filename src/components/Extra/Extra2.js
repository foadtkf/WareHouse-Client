import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

const Extra2 = () => {
    return (
        <div className='mb-5'>
           <Container>
  <Row  xs={1} md={2}>
    <Col className='w-50 h-50'><img className='w-75 h-75' src="https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" srcset="" /></Col>
    <Col className='mt-md-5 mt-lg-5 mb-2'>
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
  <Accordion.Item eventKey="2">
    <Accordion.Header><strong>What Is a Hybrid Laptop?</strong></Accordion.Header>
    <Accordion.Body><strong>
    A hybrid laptop is one that can be used as either a laptop or a standalone tablet. Its changeable, hybrid design is intended to offer something for everyone... Read What Is a Hybrid Laptop?
    </strong></Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header><strong>SSD vs HDD: Which is the best for my PC?</strong></Accordion.Header>
    <Accordion.Body><strong>
    Today’s PC shoppers face a choice when it comes to data storage: should you buy a less expensive system with a traditional spinning hard drive (often called an HDD) or spend more to get a faster, all-electronic solid-state drive or SSD? For most buyers, the answer depends on the kinds of files they store, their budget, and their need for speed in data-intensive tasks and whether or not they plan to buy a gaming laptop or a gaming desktop.
    </strong></Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header><strong>What is a TrackPad?</strong></Accordion.Header>
    <Accordion.Body><strong>
    A TrackPad (or touchpad) is a touch-sensitive interface surface that allows you to manipulate and interact with your laptop computer through finger gestures. As laptops typically do not include mice, the TrackPad provides an alternative way to move the cursor around the screen, select and open applications or programs, highlight text, interact with web browsers, and more.
    </strong></Accordion.Body>
  </Accordion.Item>
</Accordion></Col>
  </Row> 
  </Container>
        </div>
    );
};

export default Extra2;