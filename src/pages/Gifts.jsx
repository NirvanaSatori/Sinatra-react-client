import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Gifts = () => {
  const [gifts, setGifts] = useState([]);

  useEffect(()=> {
    fetch("http://localhost:9292/products")
    .then(res => res.json())
    .then(data=> setGifts(data))
    console.log(gifts)
  },[])

 
 function handleDelete(id){
    // persist changes on server
    fetch(`http://localhost:9292/products/${id}`, {
        method: "DELETE"
    })
    }


  return (
    <div>
      <h1>Dukani Gift Shop</h1>
      <div className="books">
        {gifts.map((gift) => (
          <div key={gift.id} className="book">
            <img src={gift.img} alt="" />
            <h2>{gift.title}</h2>
            <p>{gift.author}</p>
            <span>${gift.price}</span>
            <button className="delete" onClick={() => handleDelete(gift.id)}>Delete</button>
            <button className="update">
              <Link
                to={`/update/${gift.id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Update
              </Link>
            </button>
          </div>
        ))}
      </div>

      <button className="addHome">
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          Add new Gift
        </Link>
      </button>
    </div>
  );
};

export default Gifts;