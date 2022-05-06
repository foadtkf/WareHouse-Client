import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id, name, img, description, price,quantity,brand} = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id =>{
        navigate(`/checkout`);
    }
    return (
        <div className='service p- w-100'>
            <img className='w-100 h-50' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <p><strong>{brand}</strong></p>
            <p><small>{description}</small></p>

            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary'>Update</button>
        </div>
    );
};

export default Service;