import React from 'react';
import { Table,Button } from 'react-bootstrap';
import useServices from './../../CustomHooks/useServices';

const ManageServices = () => {
    const [services,setServices]=useServices();
const handleDelete=id=>{
    const proceed =window.confirm('R you sure?')
    if(proceed){
        fetch(`http://localhost:5000/service/${id}`,{
            method:'DELETE'})
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                const remaining=services.filter(service=>service._id !== id)
                setServices(remaining)
            })
    }
}
    return (
        <div className='mx-auto my-4'  style={{minHeight:'100vh'}}>
            <h2>Remove any products: </h2>
            <Table striped bordered hover size="sm">
                <tbody>
            {
                services.map(service=>< >
    <tr key={service._id}>
      <td><img src={service.img} style={{width:'150px',height:'150px'}} alt="" srcset="" /></td>
      <td ><h5>{service.name}</h5></td>
      <td><Button variant="danger" onClick={()=>handleDelete(service._id)}>Delete</Button></td>
    </tr>
    </>)
            }
            </tbody>            </Table>
        </div>
    );
};

export default ManageServices;