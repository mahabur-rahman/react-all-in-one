import React, { useState, useRef } from "react";

const UseRef = () => {
  const luckyName = useRef(null);
  const [show, setShow] = useState(false);

  const formSubmit = (e) => {
    e.preventDefault();
    // console.log(luckyName.current.value);
    const userName = luckyName.current.value;
    userName === "" ? alert("Please fill the field !") : setShow(true);
  };

  return (
    <>
      <h1>Use of UseRef Hook for uncontrolled component</h1>

      <form onSubmit={formSubmit}>
        <label htmlFor="name"> Enter your lucky name : </label>
        <input type="text" id="name" ref={luckyName} />
        <br />
        <button>Submit</button>
      </form>

      {show ? `Your lucky name is : ${luckyName.current.value}` : "No data yet"}
    </>
  );
};

export default UseRef;
