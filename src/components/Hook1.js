import React, { useState } from "react";

const HookOne = () => {
  const [name, setName] = useState("Mahabur");

  const changeMe = () => {
    name === "Mahabur" ? setName("Al Noman") : setName("Mahabur");

    // if (name === "Mahabur") {
    //   setName("Al Noman");
    // } else {
    //   setName("Mahabur");
    // }
  };

  return (
    <>
      <h1>{name}</h1>
      <button onClick={changeMe}>Change Name</button>
    </>
  );
};

export default HookOne;
