import React from "react";
import { Table, Button, Nav } from "react-bootstrap";
import useServices from "./../../CustomHooks/useServices";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const ManageServices = () => {
  const [services, setServices] = useServices();
  const handleDelete = (id) => {
    const proceed = window.confirm("R you sure?");
    if (proceed) {
      fetch(`https://laptopdokan-server.onrender.com/service/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        });
      toast.error("Deleted Successfully!");
    }
  };

  const navigate = useNavigate();
  const navigateAddmore = (event) => {
    navigate("/addservice");
  };
  return (
    <div className="mx-auto my-4" style={{ minHeight: "100vh" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <h2 style={{ marginTop: "0.5%" }}>Remove any products or </h2>
        <Button
          className="m-2"
          variant="success"
          size="lg"
          onClick={() => navigateAddmore()}
        >
          Add more
        </Button>
      </div>
      <Table striped bordered hover size="sm">
        <tbody>
          {services.map((service) => (
            <>
              <tr key={service._id}>
                <td>
                  <img
                    src={service.img}
                    style={{ width: "150px", height: "150px" }}
                    alt=""
                    srcset=""
                  />
                </td>
                <td>
                  <h5>{service.name}</h5>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(service._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            </>
          ))}
        </tbody>{" "}
      </Table>
      <ToastContainer />
    </div>
  );
};

export default ManageServices;
