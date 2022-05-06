import React from 'react';
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
        <div className='w-50 mx-auto my-4'>
            <h2>Remove any products: </h2>
            {
                services.map(service=><div key={service._id} className='d-flex flex-row w-50 mx-auto p-2 border my-2'>
                     <h5>{service.name}</h5>
                    <button onClick={()=>handleDelete(service._id)}>X</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;