"use client";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import {
  removeFromCart,
  clearCart,
  increaseQuantity,
  decrementQuantity,
} from "../redux/cartSlice";   // এটাই কাজ করবে ১০০% 

export default function CartPage() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // টোটাল প্রাইস ক্যালকুলেশন (এখানেও সেফটি)
  const totalPrice = items.reduce((acc, item) => {
    const price = typeof item.price === "number" ? item.price : 0;
    return acc + price * item.quantity;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-600">Your cart is empty</p>
            <Link href="/">
              <button className="mt-6 bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700">
                Continue Cart
              </button>
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-100 rounded-xl p-5 gap-4"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.img || item.image || "/placeholder.jpg"}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="rounded-lg object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.category}</p>
                      <p className="text-teal-600 font-bold">
                        {item.price.toFixed(2)} ৳
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-normal">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => dispatch(decrementQuantity(item.id))}
                        className="w-9 h-9 bg-gray-300 rounded-full hover:bg-gray-400 text-xl"
                      >
                        −
                      </button>
                      <span className="w-12 text-center font-medium text-lg">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => dispatch(increaseQuantity(item.id))}
                        className="w-9 h-9 bg-gray-300 rounded-full hover:bg-gray-400 text-xl"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="text-red-600 hover:text-red-800 font-medium"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total & Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row justify-between items-center gap-6 border-t pt-6">
              <button
                onClick={() => dispatch(clearCart())}
                className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition"
              >
                Clear Cart
              </button>

              <div className="text-right">
                <p className="text-2xl font-bold mb-3">
                  Total:{" "}
                  <span className="text-teal-600">
                    {totalPrice.toFixed(2)} ৳
                  </span>
                </p>
                <Link href="/checkout">
                  <button className="bg-teal-600 text-white px-10 py-3 rounded-full hover:bg-teal-700 text-lg font-medium transition">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}