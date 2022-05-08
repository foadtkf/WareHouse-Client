import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const UpdateProduct = () => {
    const {id} =useParams();
    const [product ,setProduct]=useState({})
    const [qty,setQty] =useState(0)
    useEffect(()=>{
fetch(`https://damp-headland-12733.herokuapp.com/products/${id}`)
.then(res=>res.json())
.then(data=>{setProduct(data)
            setQty(data.quantity)})
    },[qty])

    const handleUpdateproduct=event =>{
        event.preventDefault()
        const quantity=parseInt(event.target.quantity.value)+parseInt(product.quantity)
        const updateproduct={quantity}
        fetch(`https://damp-headland-12733.herokuapp.com/products/${id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updateproduct)
        })
        .then(res=>res.json())
        .then(data=>{console.log('success',data)
        setQty(quantity)
        toast.success('product updated successfully')})
        event.target.quantity.value=''
    }
    const handleDeliveryproduct=event =>{
        event.preventDefault()
        if(parseInt(product.quantity)===0){
            return toast.error('stock out')
        }
        const quantity=parseInt(product.quantity)-1
        const updateproduct={quantity}
        fetch(`https://damp-headland-12733.herokuapp.com/products/${id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updateproduct)
        })
        .then(res=>res.json())
        .then(data=>{console.log('success',data)
        setQty(quantity)
    toast.success('product delivered successfully')}
    )
    }
    return (
        <div  style={{minHeight:'100vh'}}>
        <Container>
  <Row xs={1} md={2} className='mt-5 mb-5 border rounded p-3 shadow-lg'>
    <Col><img src={product.img} className='w-75' alt="" srcset="" /></Col>
    <Col style={{marginTop:'6%'}}> <h2>Updating Product: {product.name}</h2>
        <p><strong>Quantity: {qty}</strong></p>
        <h6>Brand: {product.brand}</h6>
        <h5><strong>Features:</strong><br/>{product.description}</h5><br/>
        <form onSubmit={handleUpdateproduct} style={{display:'flex',flexDirection:'row',justifyContent:'center'}}> 

                <input type="number" min={1} name='quantity' placeholder='enter quantity' required />
                <br/>
                <Button className='rounded pt-1 w-100' size="lg" style={{marginLeft:'1%'}} type="submit">add to stock</Button>
            </form>
        <Button variant="success" size="lg" className='mx-auto my-2 w-100'  onClick={handleDeliveryproduct}>delivered</Button></Col>
  </Row>
  </Container>
       <ToastContainer></ToastContainer>
        </div>
    );
};

export default UpdateProduct;