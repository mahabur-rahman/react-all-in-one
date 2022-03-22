import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const Info = () => {
  const [users, setUsers] = useState([]);
  const history = useHistory();
  const { id } = useParams();
  console.log(id);

  const fetchData = async () => {
    const res = await fetch("https://api.github.com/users");
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // data find
  const findData = users.find((user) => user.id.toString() === id.toString());

  console.log(findData);

  const routeBack = () => {
    history.push("/");
  };

  if (findData === undefined) {
    return users;
  }

  return (
    <>
      <div className="border py-5" style={{ background: "red" }}>
        <div style={{ background: "yellow" }}>
          <h1>{findData.id}</h1>
          <img src={findData.avatar_url} alt="" />
        </div>
        <button onClick={routeBack}>Back to home</button>
      </div>
    </>
  );
};

export default Info;
