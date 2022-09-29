import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  const userApi = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(response.data);
  };

  useEffect(() => {
    userApi();
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {users.map((item) => {
          const { id, name, phone, username } = item;
          return (
            <div
              key={id}
              style={{
                border: "1px solid black",
                height: "200px",
                width: "200px",
              }}
            >
              <p>ID:{item.id}</p>
              <Link to={`/SingleUser/${id}`}>
                <p> name: {name}</p>
              </Link>
              <p> phone: {phone}</p>
              <p>username: {username}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
