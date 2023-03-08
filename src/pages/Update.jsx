import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [gift, setGift] = useState({
    title: "",
    author: "",
    price: null,
    img: "",
    amount: null
  });
//   const [error,setError] = useState(false)

//   const location = useLocation();
//   const navigate = useNavigate();

  const id= gift.id

  const handleChange = (e) => {
    setGift((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
        fetch(`http://localhost:9292/products${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ gift: { 
                    title: title,
                    author: "",
                    price: null,
                    img: "",
                    amount: null
            } })
        })
            .then(r => r.json())
            .then(data => console.log(data))
    }

  return (
    <div className="form">
      <h1>Update the gift</h1>
      <input
        type="text"
        placeholder="gift title"
        name="title"
        onChange={handleChange}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="gift desc"
        name="desc"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="gift price"
        name="price"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="gift cover"
        name="cover"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Update</button>
      {error && "Something went wrong!"}
      <Link to="/">See all gifts</Link>
    </div>
  );
};

export default Update;