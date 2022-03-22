import React, { useState } from "react";

const ThreeDot = () => {
  const [info, setInfo] = useState({
    name: "mahabur",
    age: 27,
    id: 24332,
  });

  const changeName = () => {
    // setInfo({ name: "annur" });
    setInfo({ ...info, name: "annur" });
    // setName("Annur");
    // if (name === "mahabur") {
    //   setName("Annur");
    // } else {
    //   setName("mahabur");
    // }
  };

  return (
    <>
      <h1>
        Name : {info.name}, Age : {info.age}
      </h1>
      <button onClick={changeName}>Change Name</button>
    </>
  );
};

export default ThreeDot;
