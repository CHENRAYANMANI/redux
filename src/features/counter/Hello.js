import React from "react";
import { useSelector } from "react-redux";
const Hello = () => {
  const count = useSelector((state) => state.counter.count);

  return (
    <>
      <h1>Book/Price: Rs. 200 </h1>
      <h2>Book in cart: {count}</h2>
      <h3>Total Amount :{count * 200}</h3>
    </>
  );
};

export default Hello;
