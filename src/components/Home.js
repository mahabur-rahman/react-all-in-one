import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <>
      <h1>Home page : {pathName.replace("/", "")}</h1>
    </>
  );
};

export default Home;
