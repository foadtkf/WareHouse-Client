import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const {id} =useParams();
    const [product ,setProduct]=useState({})
    useEffect(()=>{
fetch(`http://localhost:5000/products/${id}`)
.then(res=>res.json())
.then(data=>setProduct(data))
    },[])

    const handleUpdateproduct=event =>{
        event.preventDefault()
        const quantity=parseInt(event.target.quantity.value)+parseInt(product.quantity)
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
    alert('product delivered successfully')})
    }
    return (
        <div>
        <h2>Updating Product: {product.name}</h2>
        <button onClick={handleDeliveryproduct}>delivered</button>
        <form onSubmit={handleUpdateproduct}> 

                <input type="number" name='quantity' placeholder='enter quantity' required />
                <br/>
                <input type='submit'   value='add to stock'/>
            </form>
        </div>
    );
};

export default UpdateProduct;