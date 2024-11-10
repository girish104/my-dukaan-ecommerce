import React, { useContext } from "react";
import { GiShoppingCart } from "react-icons/gi";
import { MyContext } from "../context/Context";

function Cart() {
  const { cart, setCart, product, setProduct } = useContext(MyContext);

  const remove = (e) => {
    // Remove the item from the cart
    const updatedCart = cart.filter((item) => e.id !== item.id);
    setCart(updatedCart);

    // Update the product state to reflect item removal
    setProduct(
      product.map((item) =>
        item.id === e.id ? { ...item, active: false } : item
      )
    );
  };

  let sum2 = cart.reduce(
    (total, item) => total + item.count * Math.round(item.price),
    0
  );

  const addcount = (e) => {
    const updatedCart = cart.map((item) =>
      e.id2 === item.id2 ? { ...item, count: item.count + 1 } : item
    );
    setCart(updatedCart);
  };

  const remcount = (e) => {
    const updatedCart = cart.map((item) =>
      e.id2 === item.id2 ? { ...item, count: item.count - 1 } : item
    );
    setCart(updatedCart);
  };

  return (
    <div className="container max-w-7xl mx-auto px-4 py-6 min-h-screen text-gray-800 mt-8">
      {cart.length > 0 ? (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cart.map((e) => (
              <div
                key={e.id}
                className="bg-white shadow rounded-lg p-3 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={e.image}
                  alt={e.title}
                  className="h-16 w-16 sm:h-24 sm:w-24 object-contain mb-2 rounded-lg"
                />
                <h4
                  className="text-sm sm:text-base font-medium text-gray-700 mb-1 w-full"
                  style={{
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {e.title}
                </h4>
                <h2 className="text-indigo-600 font-semibold text-base mb-1">
                  ${Math.round(e.price) * e.count}
                </h2>
                <div className="flex items-center mt-2 gap-2">
                  <button
                    onClick={() => remcount(e)}
                    className={`px-2 py-1 text-white rounded-md ${
                      e.count > 1
                        ? "bg-red-600 hover:bg-red-700"
                        : "bg-gray-300 cursor-not-allowed"
                    }`}
                    disabled={e.count <= 1}
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold">{e.count}</span>
                  <button
                    onClick={() => addcount(e)}
                    className="px-2 py-1 bg-green-600 text-white rounded-md hover:bg-green-700"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => remove(e)}
                  className="px-4 mt-4 py-1 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-all duration-300 text-xs"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-gray-800">
            <h2 className="text-lg font-medium">
              Total items:{" "}
              <span className="text-indigo-600">{cart.length}</span>
            </h2>
            <h2 className="text-lg font-medium">
              Total Price:{" "}
              <span className="text-indigo-600">${Math.round(sum2)}</span>
            </h2>
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-center items-center h-full bg-gray-100 py-16">
          <GiShoppingCart size={60} className="text-gray-400 mb-4" />
          <h4 className="text-xl font-semibold text-gray-600 mb-2">
            Your cart is empty
          </h4>
          <p className="text-gray-500">Start adding items to see them here!</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
