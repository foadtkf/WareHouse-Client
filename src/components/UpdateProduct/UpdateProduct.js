import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const {id} =useParams();
    const [product ,setProduct]=useState({})
    const [qty,setQty] =useState(0)
    useEffect(()=>{
fetch(`http://localhost:5000/products/${id}`)
.then(res=>res.json())
.then(data=>{setProduct(data)
            setQty(data.quantity)})
    },[qty])

    const handleUpdateproduct=event =>{
        event.preventDefault()
        const quantity=parseInt(event.target.quantity.value)+parseInt(product.quantity)
        if(parseInt(quantity)<1){
            return alert('number of products cannot be less than 0')}
        const updateproduct={quantity}
        fetch(`http://localhost:5000/products/${id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updateproduct)
        })
        .then(res=>res.json())
        .then(data=>{console.log('success',data)
        setQty(quantity)
    alert('product updated successfully')})
    }
    const handleDeliveryproduct=event =>{
        event.preventDefault()
        if(parseInt(product.quantity)===0){
            return alert('stock out')
        }
        const quantity=parseInt(product.quantity)-1
        const updateproduct={quantity}
        fetch(`http://localhost:5000/products/${id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updateproduct)
        })
        .then(res=>res.json())
        .then(data=>{console.log('success',data)
        setQty(quantity)
    alert('product delivered successfully')}
    )
    }
    return (
        <div  style={{minHeight:'100vh'}}>
        <h2>Updating Product: {product.name}</h2>
        <button onClick={handleDeliveryproduct}>delivered</button>
        <p>Quantity: {qty}</p>
        <form onSubmit={handleUpdateproduct}> 

                <input type="number" name='quantity' placeholder='enter quantity' required />
                <br/>
                <input type='submit'   value='add to stock'/>
            </form>
        </div>
    );
};

export default UpdateProduct;