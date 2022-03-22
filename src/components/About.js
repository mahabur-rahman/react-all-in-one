import React from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <>
      <h1>Home page : {pathName.replace("/", "")}</h1>
      {pathName === "/about/mahabur" ? (
        <h3>Profile Page</h3>
      ) : (
        <h2>Login Page</h2>
      )}
    </>
  );
};

export default About;
