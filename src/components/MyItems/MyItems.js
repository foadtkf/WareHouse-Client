import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { Table,Button } from 'react-bootstrap';

const MyItems = () => {
    const [user] = useAuthState(auth);
    // const email = user?.email
    const email = localStorage.getItem(`email`)
    const [services,setServices]=useState([])
    useEffect( ()=>{
        // let url=`http://localhost:5000/products`
        // if(!six)
        let url=`http://localhost:5000/my?email=${email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])
    return (
        <div style={{minHeight:'100vh'}}>
            <h2>You have added: {services.length}</h2>
            <Table striped bordered hover size="sm">
                <tbody>
            {
                services.map(service=>< >
    <tr key={service._id}>
      <td><img src={service.img} style={{width:'150px',height:'150px'}} alt="" srcset="" /></td>
      <td ><h5>{service.name}</h5></td>
    </tr>
    </>)
            }
            </tbody>            </Table>
        </div>
    );
};

export default MyItems;