import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
  const [gift, setGift] = useState({
    title: "",
    price: null,
    img: "",
    author: "",
    amount: null,
  });
  const [error,setError] = useState(false)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setGift((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

//   const handleClick = async (e) => {
//     e.preventDefault();
//     try {
//       await fetch("http://localhost:9292/products", gift);
//       navigate("/");
//     } catch (err) {
//       console.log(err);
//       setError(true)
//     }
//   };

 function handleClick(e){
    e.preventDefault();
        fetch(`http://localhost:9292/products/`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(gift)
        })
            .then(r => r.json())
            .then(data => setGift(data))
        
    }
    

  return (
    <div className="form">
      <h1>Add New Gift</h1>
      <input
        type="text"
        placeholder="Gift title"
        name="title"
        onChange={handleChange}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="Gift desc"
        name="author"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Gift price"
        name="price"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Gift amount"
        name="amount"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="image"
        name="img"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Add</button>
      {error && "Something went wrong!"}
      <Link to="/">See all gifts</Link>
    </div>
  );
};

export default Add;