import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://damp-headland-12733.herokuapp.com/service`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        alert('item added successfully')
      });
  };
  return (
    <div className="w-50 mx-auto my-5"  style={{minHeight:'100vh'}}>
      <h2>Please add a service: </h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input className="mb-2" {...register("name")} placeholder="Name" required/>
        <input
          className="mb-2"
          {...register("price")}
          placeholder="Price"
          type="number"
        required/>
        <input
          className="mb-2"
          {...register("quantity")}
          placeholder="Quantity"
          type="number"
        required/>
        <textarea
          className="mb-2"
          {...register("description")}
          placeholder="Description"
        required/>
        <input
          className="mb-2"
          {...register("img")}
          placeholder="Image url"
          type="text"
        required/>
        <input
          className="mb-2"
          {...register("email")}
          value={localStorage.getItem('email')}
          type="text"
        required/>
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
