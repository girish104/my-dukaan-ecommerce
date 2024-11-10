import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const MyContext = createContext();

export function Context({ children }) {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false);
  const [price, setPrice] = useState(1000);
  const [rating, setRating] = useState(0);

  return (
    <>
      <MyContext.Provider
        value={{
          product,
          setProduct,
          cart,
          setCart,
          search,
          setSearch,
          toggle,
          setToggle,
          price,
          setPrice,
          rating,
          setRating,
        }}
      >
        {children}
      </MyContext.Provider>
    </>
  );
}
