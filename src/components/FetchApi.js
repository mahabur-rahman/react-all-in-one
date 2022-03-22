import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const FetchApi = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch("https://api.github.com/users");
      const data = await res.json();
      setUsers(data);
      setLoading(false);
    } catch (err) {
      setLoading(false)
      console.log(`Error is : ${err}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="border">
      {users.map((user) => {
        return (
          <div key={user.id}>
            <Link to={`info/${user.id}`}>
              <img src={user.avatar_url} alt="" />
              <h1>{user.id}</h1>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default FetchApi;
