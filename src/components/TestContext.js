import React, { useContext } from "react";
import { CreateContext } from "../App";

const TestContext = () => {
  const name = useContext(CreateContext);

  return <h1>Your name is : {name}</h1>;
};

export default TestContext;
