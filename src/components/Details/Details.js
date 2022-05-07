import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

const Details = () => {
    const {id} =useParams();
    const [product ,setProduct]=useState({})
    const [qty,setQty] =useState(0)
    useEffect(()=>{
fetch(`https://damp-headland-12733.herokuapp.com/products/${id}`)
.then(res=>res.json())
.then(data=>{setProduct(data)
            setQty(data.quantity)})
    },[qty])
    console.log(product)
    return (
        <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal>
    );
};

export default Details;