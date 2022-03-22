import React, { useState } from "react";

const UpdateLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [store, setStore] = useState([]);

  //   submit form

  const formSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      const newData = {
        id: new Date().getTime().toString(),
        email,
        password,
      };

      setStore([...store, newData]);
      setEmail("");
      setPassword("");
    } else {
      alert("Please fill the all field ");
    }
  };

  const clearAll = () => {
    setStore([]);
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <input
          type="email"
          placeholder="email.."
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>

      <hr />
      <div>
        {store.map((data) => {
          return (
            <div key={data.id}>
              <h4>{data.email}</h4>
              <h6>{data.password}</h6>
            </div>
          );
        })}
      </div>
      <button onClick={clearAll}>clearAll</button>
    </div>
  );
};

export default UpdateLoginForm;
