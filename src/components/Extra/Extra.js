import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import './Extra.css'
import { toast, ToastContainer } from 'react-toastify';
const Contact = () => {
  const handleClick =()=>{
    toast('Thanks for your subscription');
  }
  return (<div className="w-70 mx-auto bg-info p-5 shadow rounded-3 m-5">
  <div class="subscribe-form-title"><h3><strong>Want to stay updated?</strong></h3></div>
  <InputGroup className="mb-3">
    <FormControl
      placeholder="Your email address"
      aria-label="Your email address"
      aria-describedby="basic-addon2"
      name="emailbox"
    />
    <Button variant="danger" size="lg" onClick={handleClick} id="button-addon2">
      Button
    </Button>
  </InputGroup>
  <ToastContainer/>
  </div>
  );
};

export default Contact;