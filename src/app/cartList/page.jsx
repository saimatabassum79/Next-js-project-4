"use client";

import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/cartSlice";
import Image from "next/image";

export default function CartPage() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        
        {/* Cart Header */}
        <div className="flex items-center justify-between border-b border-gray-300 pb-4">
          <h1 className="text-3xl font-bold text-gray-800">🛒 Your Cart</h1>
          <span className="text-lg font-medium bg-teal-500 text-white px-4 py-1 rounded-full">
            {items.length} Items
          </span>
        </div>

        {/* Empty Cart Message */}
        {items.length === 0 && (
          <div className="text-center py-10">
            <p className="text-xl font-semibold text-gray-600">
              Your cart is empty 😢
            </p>
          </div>
        )}

        {/* Cart Items */}
        <div className="mt-6 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-gray-100 rounded-xl p-4"
            >
              {/* Product Info */}
              <div className="flex items-center gap-4">
                <Image
                  src={item.img}
                  width={80}
                  height={80}
                  alt={item.title}
                  className="rounded-lg h-20 w-25"
                />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{item.author}</p>
                  <p className="text-teal-600 font-bold mt-1">{item.price}</p>
                </div>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-500 cursor-pointer hover:text-red-700 font-medium"
              >
                Remove ✖
              </button>
            </div>
          ))}
        </div>

        {/* Clear Cart & Checkout */}
        {items.length > 0 && (
          <div className="mt-8 flex justify-between items-center">
            <button
              onClick={() => dispatch(clearCart())}
              className="bg-red-500 text-white px-6 py-2 cursor-pointer rounded-full shadow hover:bg-red-600"
            >
              Clear Cart
            </button>

            <button className="bg-teal-600 cursor-pointer text-white px-6 py-2 rounded-full shadow hover:bg-teal-700">
              Proceed to Checkout →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

