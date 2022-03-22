import React from "react";
// react toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReactToastify = () => {
  const notify = () => {
    toast.error("Wow so easy!");
  };

  return (
    <>
      <div className="react_toastify">
        <h1>React Toastify </h1>
        <button className="btn btn-primary" onClick={notify}>
          Login
        </button>
        <ToastContainer position="top-center" />
      </div>
    </>
  );
};

export default ReactToastify;
