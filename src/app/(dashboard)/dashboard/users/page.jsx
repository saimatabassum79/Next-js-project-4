"use client";
import React from 'react';
// Next.js এর Image কম্পোনেন্ট ইম্পোর্ট করা হয়েছে
import Image from 'next/image';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { User, Package, Bell, Settings, CreditCard, Star, Clock, ShieldCheck, Zap } from 'lucide-react';

const usageData = [
  { day: 'Mon', usage: 30 },
  { day: 'Tue', usage: 50 },
  { day: 'Wed', usage: 45 },
  { day: 'Thu', usage: 80 },
  { day: 'Fri', usage: 60 },
  { day: 'Sat', usage: 90 },
  { day: 'Sun', usage: 70 },
];

const UserDashboard = () => {
  return (
    <div className="p-4 md:p-6 lg:p-10 bg-[#f9fafb] min-h-screen font-sans text-gray-900">
      
      {/* --- Top Header Section --- */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Welcome Back, Alex! 👋</h1>
          <p className="text-gray-500 text-sm md:text-base">Here is a summary of your account activity.</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="relative p-2.5 bg-white rounded-xl shadow-sm border border-gray-200 text-gray-600 hover:bg-gray-50 transition-all">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-indigo-600 text-white rounded-xl font-semibold shadow-md hover:bg-indigo-700 active:scale-95 transition-all">
            <Settings size={18} />
            <span>Settings</span>
          </button>
        </div>
      </div>

      {/* --- Main Dashboard Grid --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column (Profile & Overview) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Profile Card */}
          <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 text-center">
            <div className="relative w-28 h-28 mx-auto mb-5">
              {/* <img> বদলে <Image /> ব্যবহার করা হয়েছে এবং Unsplash লিঙ্ক দেওয়া হয়েছে */}
              <Image 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" 
                alt="User Profile" 
                width={112} 
                height={112}
                className="rounded-3xl bg-indigo-50 p-1 object-cover"
              />
              <div className="absolute -bottom-2 -right-2 p-2 bg-indigo-600 rounded-xl text-white shadow-lg">
                <ShieldCheck size={16} />
              </div>
            </div>
            <h3 className="text-xl font-bold">Alex Thompson</h3>
            <p className="text-gray-400 text-sm mb-6">alex.design@example.com</p>
            
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-4 py-1.5 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full uppercase tracking-wider">Premium Plan</span>
              <span className="px-4 py-1.5 bg-amber-50 text-amber-700 text-xs font-bold rounded-full uppercase tracking-wider flex items-center gap-1">
                <Star size={12} fill="currentColor" /> Gold
              </span>
            </div>
          </div>

          {/* Quick Stat Tiles */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-3">
                <Package size={22} />
              </div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Orders</p>
              <h4 className="text-2xl font-black">24</h4>
            </div>
            <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-3">
                <CreditCard size={22} />
              </div>
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Balance</p>
              <h4 className="text-2xl font-black">$840</h4>
            </div>
          </div>

          {/* Upgrade Banner */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-6 rounded-[2rem] text-white overflow-hidden relative">
            <div className="relative z-10">
              <h4 className="font-bold text-lg mb-1 flex items-center gap-2">
                <Zap size={18} fill="currentColor" /> Upgrade to Pro
              </h4>
              <p className="text-indigo-100 text-xs mb-4">Get unlimited storage and AI tools.</p>
              <button className="w-full py-2 bg-white text-indigo-600 rounded-xl text-sm font-bold hover:bg-opacity-90 transition-all">Get Started</button>
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white opacity-10 rounded-full"></div>
          </div>
        </div>

        {/* Right Column (Charts & Activity) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Main Analytics Chart */}
          <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <h3 className="font-bold text-lg">Activity Performance</h3>
              <div className="flex bg-gray-100 p-1 rounded-lg">
                <button className="px-3 py-1.5 text-xs font-bold bg-white shadow-sm rounded-md">Weekly</button>
                <button className="px-3 py-1.5 text-xs font-bold text-gray-500">Monthly</button>
              </div>
            </div>
            <div className="h-64 sm:h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={usageData}>
                  <defs>
                    <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9ca3af'}} dy={10} />
                  <YAxis hide />
                  <Tooltip 
                    contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="usage" 
                    stroke="#6366f1" 
                    strokeWidth={4} 
                    fillOpacity={1} 
                    fill="url(#colorUsage)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent History */}
          <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg">Recent History</h3>
              <button className="text-indigo-600 text-sm font-bold hover:underline">See All</button>
            </div>
            <div className="space-y-2">
              <ActivityRow icon={<Package className="text-blue-500" />} title="Product Shipped" time="4h ago" amount="-$120.00" type="negative" />
              <ActivityRow icon={<CreditCard className="text-emerald-500" />} title="Funds Added" time="Yesterday" amount="+$500.00" type="positive" />
              <ActivityRow icon={<Star className="text-amber-500" />} title="Bonus Credited" time="2 days ago" amount="+250 Pts" type="positive" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const ActivityRow = ({ icon, title, time, amount, type }) => (
  <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-2xl transition group cursor-pointer">
    <div className="flex items-center gap-4">
      <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-white transition-colors">{icon}</div>
      <div>
        <h5 className="text-sm font-bold text-gray-800">{title}</h5>
        <p className="text-xs text-gray-400 font-medium">{time}</p>
      </div>
    </div>
    <div className="text-right">
      <p className={`text-sm font-black ${type === 'positive' ? 'text-emerald-500' : 'text-gray-900'}`}>
        {amount}
      </p>
    </div>
  </div>
);

export default UserDashboard;