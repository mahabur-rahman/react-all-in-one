import React, { useState } from "react";

const TestTwo = () => {
  // input state
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const storeData = () => {
    localStorage.setItem("Name", name);
    localStorage.setItem("Password", password);
  };
  const removeData = () => {
    localStorage.removeItem("Name");
    localStorage.removeItem("Password");
  };
  return (
    <>
      <div>
        <h1>Name of the user</h1>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <hr />

        <h1>Password of the user</h1>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button onClick={storeData}>Store Data</button>
      <button onClick={removeData}>Remove Data</button>

      {/* -------------- */}
      {localStorage.getItem("Name") && (
        <>Name : {localStorage.getItem("Name")}</>
      )}

      {localStorage.getItem("Password") && (
        <>Password : {localStorage.getItem("Password")}</>
      )}
    </>
  );
};

export default TestTwo;
