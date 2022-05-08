import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

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
        toast.success('item added successfully',{position: toast.POSITION.TOP_RIGHT})
      });
  };
  return (
    <div className="w-50 mx-auto my-5 border rounded shadow-lg p-5"  style={{minHeight:'100vh'}}>
      <h2>Please add an item: </h2>
      <form className="d-flex flex-column rounded" onSubmit={handleSubmit(onSubmit)}>
        <input className="mb-2" {...register("name")} placeholder="Name" required/>
        <input
          className="mb-2 rounded"
          {...register("price")}
          placeholder="Price"
          type="number"
        required/>
        <input
          className="mb-2 rounded"
          {...register("quantity")}
          placeholder="Quantity"
          type="number"
        required/>
        <textarea
          className="mb-2 rounded"
          {...register("description")}
          placeholder="Description"
        required/>
        <input
          className="mb-2 rounded"
          {...register("img")}
          placeholder="Image url"
          type="text"
        required/>
        <input
          className="mb-2 rounded"
          {...register("email")}
          value={localStorage.getItem('email')}
          type="text"
        required/>
        <input
          className="mb-2 rounded"
          {...register("brand")}
          placeholder="Brand"
          type="text"
        required/>
        <input type="submit" />
      </form>
      <ToastContainer/>
    </div>
  );
};

export default AddService;
