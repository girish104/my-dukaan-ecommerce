import React, { useContext, useEffect } from "react";
import { MyContext } from "../context/Context";

function Products() {
  const {
    product,
    setProduct,
    cart,
    setCart,
    search,
    setSearch,
    rating,
    setRating,
    price,
    setPrice,
  } = useContext(MyContext);
 
  const API = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProduct(data.map((item) => ({ ...item, active: false })));
  };

  useEffect(() => {
    API();
  }, []);

  const addToCart = (e) => {
    const temp = { ...e, count: 1, id2: Math.floor(Math.random() * 10000) }; // Ensure id2 is unique
    setCart([...cart, temp]);
    setProduct(
      product.map((item) =>
        e.id === item.id ? { ...item, active: true } : item
      )
    );
  };

  const removeFromCart = (e) => {
    setCart(cart.filter((item) => item.id !== e.id));
    setProduct(
      product.map((item) =>
        e.id === item.id ? { ...item, active: false } : item
      )
    );
  };

  const changeSearch = (e) => setSearch(e.target.value);
  const changePrice = (e) => setPrice(e.target.value);
  const changeRating = (e) => setRating(e.target.value);

  if (product.length !== 0) {
    return (
      <div className="max-w-7xl mx-auto mt-8 min-h-screen bg-white text-gray-900">
        {/* Search, Rating, and Price Filter Section */}
        <div className="flex flex-wrap items-center justify-between mb-6 gap-6 px-4">
          {/* Search Box */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <input
              className="px-2 py-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 text-xs md:text-sm w-full"
              type="search"
              value={search}
              onChange={changeSearch}
              placeholder="🔍 Search products"
            />
          </div>

          {/* Rating and Price Filters */}
          <div className="flex flex-wrap gap-6 items-center w-full sm:w-auto">
            {/* Rating Filter Dropdown */}
            <div className="flex items-center gap-2 w-1/2 sm:w-auto">
              <label className="font-medium text-gray-700 text-xs md:text-sm">
                Rating:
              </label>
              <select
                className="px-2 py-1 border border-gray-300 bg-gray-100 text-gray-900 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 text-xs w-full md:w-32"
                onChange={changeRating}
                value={rating}
              >
                <option value={0}>All</option>
                {[1, 2, 3, 4, 5].map((value) => (
                  <option key={value} value={value}>
                    {value}★ & Up
                  </option>
                ))}
              </select>
            </div>

            {/* Price Filter */}
            <div className="flex items-center gap-4 w-1/2 sm:w-auto">
              <label className="font-medium text-gray-700 text-xs md:text-sm">
                Price:
              </label>
              <div className="flex items-center gap-4 w-full">
                <input
                  type="range"
                  className="w-full md:w-48 h-2 bg-gray-300 rounded-lg cursor-pointer"
                  min={0}
                  value={price}
                  max="1000"
                  step={20}
                  onChange={changePrice}
                />
                <span className="text-indigo-600 font-semibold text-xs md:text-sm">
                  ${price}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid gap-10 md:gap-20 mx-3 mt-16 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {product
            .filter((e) =>
              search === ""
                ? e
                : e.title.toLowerCase().includes(search.toLowerCase())
            )
            .filter((e) => e.price <= price) // Filter products based on price
            .filter((e) => e.rating.rate >= rating) // Filter products based on rating
            .map((e, index) => (
              <div
                key={`${e.id}-${index}`} // Ensures unique key by combining id and index
                className="bg-white shadow-sm rounded-lg p-4 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 transform hover:scale-95 text-xs sm:text-sm"
              >
                <img
                  src={e.image}
                  alt={e.title}
                  className="h-24 w-24 object-contain mb-2 rounded-lg sm:h-32 sm:w-auto"
                />
                <h4
                  className="text-gray-900 font-semibold mb-1 w-full"
                  style={{
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {e.title}
                </h4>
                <h3 className="text-indigo-600 font-bold text-lg mb-1">
                  ${e.price}
                </h3>
                <h5 className="text-yellow-500 font-medium text-xs sm:text-sm">
                  {e.rating.rate} ★
                </h5>
                <div className="mt-2">
                  {e.active ? (
                    <button
                      onClick={() => removeFromCart(e)}
                      className="px-4 py-1 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-all duration-300 text-xs"
                    >
                      Remove
                    </button>
                  ) : (
                    <button
                      onClick={() => addToCart(e)}
                      className="px-4 py-1 bg-green-600 text-white font-bold rounded-full hover:bg-green-700 transition-all duration-300 text-xs"
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <div className="text-indigo-600 font-semibold text-lg animate-pulse">
          Loading...
        </div>
      </div>
    );
  }
}

export default Products;
