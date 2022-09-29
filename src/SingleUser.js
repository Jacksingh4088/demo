import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const SingleUser = () => {
  const [select, setSelected] = useState([]);
  const { id } = useParams();
  //   const selectedUser = () => {
  //     fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
  //       .then((res) => {
  //         if (res.ok) {
  //           return res.json();
  //         } else console.log("sorry something went wrong");
  //         // console.log(res);
  //       })
  //       .then((data) => {
  //         const newData = data.find((item) => item.id === parseInt.id);
  //         setSelected(newData);
  //       });
  //   };

  const selectedUser = async () => {
    const response = await axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${parseInt(id)}`)
      .then((res) => {
        // const newData = res.data.find((data) => data.id === parseInt(id));
        console.log(res.data);
        setSelected(res.data);
      });
  };
  useEffect(() => {
    selectedUser();
  }, []);
  return (
    <div>
      {select.length !== 0 ? (
        select.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.title}</p>
              <p>{item.body}</p>
            </div>
          );
        })
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default SingleUser;
