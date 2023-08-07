import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const Home = () => {
  const [data, setData] = useState("");
  const name = localStorage.getItem("name");
  useEffect(() => {
    // Fetch data using Axios when the component mounts
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setData(response?.data?.products?.slice(0, 5));
      })
      .catch((error) => {});
  }, []);
  return (
    <div>
      <h1>{name}</h1>
      <h1 className="text-center">Welcome</h1>

      <>
        <div class="container">
          <div class="boxes">
            <div>
              {data &&
                data.map((item, index) => (
                  <div class="box border_for_per_data" key={item.id}>
                    <p>{item.id}</p>
                    <p>{item?.title}</p>
                    <p>{item.description}</p>
                    <h1>{item?.brand}</h1>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Home;
