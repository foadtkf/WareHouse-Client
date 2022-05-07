import React from 'react';
import { Col, Row } from 'react-bootstrap';
import img from './IMG_20211219_000034.jpg'
const About = () => {
    return (
        <div style={{minHeight:'100vh'}} className='container'>
            <Row xs={1} md={2} className='mt-5 mb-5 border rounded p-3'>
    <Col><img src={img} className='w-50 h-100' alt="" srcset="" /></Col>
    <Col className='shadow border rounded-2'>
            <h1>About Me</h1>
        <h3>Name: MD Fakhrul Islam Fuad</h3>
        <h5>ID: 180201067</h5>
        <h5>Level: 4 || Term: I</h5>
        <h5>Bangladesh Army University of Science & Technology, Saidpur.</h5>
    </Col>
  </Row>
        </div>
    );
};

export default About;