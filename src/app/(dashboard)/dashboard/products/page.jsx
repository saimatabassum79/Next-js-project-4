"use client";
import React, { useState } from 'react';
// Next.js এর Image কম্পোনেন্ট ইম্পোর্ট করা হয়েছে
import Image from 'next/image'; 
import { Plus, Search, Filter, Edit, Trash2, MoreHorizontal, Package, Tag, Box } from 'lucide-react';

const productsData = [
  { id: 1, name: "Premium Wireless Headphones", category: "Electronics", price: "$299.00", stock: 45, status: "In Stock", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop" },
  { id: 2, name: "Minimalist Leather Watch", category: "Accessories", price: "$150.00", stock: 12, status: "Low Stock", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop" },
  { id: 3, name: "Organic Cotton T-Shirt", category: "Fashion", price: "$35.00", stock: 0, status: "Out of Stock", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=200&fit=crop" },
  { id: 4, name: "Smart Fitness Tracker", category: "Electronics", price: "$89.00", stock: 120, status: "In Stock", image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=200&h=200&fit=crop" },
];

const ProductList = () => {
  return (
    <div className="p-4 md:p-8 space-y-6">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">Products</h1>
          <p className="text-gray-500 text-sm">Manage your inventory and product catalogs.</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-95">
          <Plus size={20} />
          <span>Add New Product</span>
        </button>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search products..." 
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition-all"
          />
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-gray-100 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all">
          <Filter size={18} />
          <span>Filters</span>
        </button>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-50">
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Product</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Price</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Stock</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {productsData.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      {/* <img> tag পরিবর্তন করে <Image /> করা হয়েছে */}
                      <Image 
                        src={product.image} 
                        alt={product.name} 
                        width={48} 
                        height={48} 
                        className="w-12 h-12 rounded-xl object-cover bg-gray-100" 
                      />
                      <span className="text-sm font-bold text-gray-800">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-lg">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-black text-gray-900">{product.price}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 font-medium">{product.stock} pcs</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-[10px] font-black uppercase rounded-full ${
                      product.status === 'In Stock' ? 'bg-emerald-100 text-emerald-600' : 
                      product.status === 'Low Stock' ? 'bg-amber-100 text-amber-600' : 'bg-red-100 text-red-600'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                        <Edit size={18} />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="p-6 bg-gray-50/30 border-t border-gray-50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400 font-medium">Showing 1 to 4 of 24 products</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-white border border-gray-100 rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-50 transition-all">Previous</button>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-xs font-bold hover:bg-indigo-700 transition-all">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;