import React from 'react';
import useServices from './../../CustomHooks/useServices';

const ManageServices = () => {
    const [services,setServices]=useServices();
const handleDelete=id=>{
    const proceed =window.confirm('R you sure?')
    if(proceed){
        fetch(`https://boiling-plateau-02510.herokuapp.com/service/${id}`,{
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
        <div className='w-50 mx-auto'>
            <h2>We will manage services from here: </h2>
            
        </div>
    );
};

export default ManageServices;