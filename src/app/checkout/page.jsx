"use client";
import React, { useState } from "react";

import { useSelector } from "react-redux";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const [billingInfo, setBillingInfo] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  });

  const handleChange = (e) => {
    setBillingInfo({ ...billingInfo, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    // এখানে তুমি payment gateway বা order submit logic add করতে পারো
    alert("Order placed successfully!");
  };

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + Number(item.price) * (item.quantity || 1),
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-6 flex flex-col lg:flex-row gap-8">
        
        {/* Billing Info */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Billing Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={billingInfo.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="p-3 border border-gray-300 rounded-lg w-full"
            />
            <input
              type="email"
              name="email"
              value={billingInfo.email}
              onChange={handleChange}
              placeholder="Email"
              className="p-3 border border-gray-300 rounded-lg w-full"
            />
            <input
              type="text"
              name="address"
              value={billingInfo.address}
              onChange={handleChange}
              placeholder="Address"
              className="p-3 border border-gray-300 rounded-lg w-full md:col-span-2"
            />
            <input
              type="text"
              name="city"
              value={billingInfo.city}
              onChange={handleChange}
              placeholder="City"
              className="p-3 border border-gray-300 rounded-lg w-full"
            />
            <input
              type="text"
              name="state"
              value={billingInfo.state}
              onChange={handleChange}
              placeholder="State"
              className="p-3 border border-gray-300 rounded-lg w-full"
            />
            <input
              type="text"
              name="zip"
              value={billingInfo.zip}
              onChange={handleChange}
              placeholder="ZIP Code"
              className="p-3 border border-gray-300 rounded-lg w-full"
            />
            <input
              type="text"
              name="phone"
              value={billingInfo.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="p-3 border border-gray-300 rounded-lg w-full md:col-span-2"
            />
          </div>
        </div>

        {/* Order Summary */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-700">{item.name}</p>
                  <p className="text-gray-500 text-sm">{item.quantity || 1} x {item.price} ৳</p>
                </div>
                <p className="font-bold text-gray-800">{(item.price * (item.quantity || 1)).toFixed(2)} ৳</p>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="flex justify-between items-center mt-6 border-t pt-4 text-lg font-bold text-gray-800">
            <p>Total:</p>
            <p>{totalAmount.toFixed(2)} ৳</p>
          </div>

          {/* Place Order Button */}
          <button
            onClick={handlePlaceOrder}
            className="w-full mt-6 bg-teal-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-teal-700 transition"
          >
            Place Order
          </button>
        </div>

      </div>
    </div>
  );
};

export default CheckoutPage;
