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
    const url = `https://boiling-plateau-02510.herokuapp.com/service`;
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
      });
  };
  return (
    <div className="w-50 mx-auto my-5">
      <h2>Please add a service: </h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input className="mb-2" {...register("name")} placeholder="Name" />
        <input
          className="mb-2"
          {...register("price")}
          placeholder="Price"
          type="number"
        />
        <input
          className="mb-2"
          {...register("quantity")}
          placeholder="Quantity"
          type="number"
        />
        <textarea
          className="mb-2"
          {...register("description")}
          placeholder="Description"
        />
        <input
          className="mb-2"
          {...register("img")}
          placeholder="Image url"
          type="text"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
