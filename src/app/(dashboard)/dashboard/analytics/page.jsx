"use client";
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Users, ShoppingCart, DollarSign, TrendingUp, CheckCircle, Clock } from 'lucide-react';

const data = [
  { name: 'Sat', visits: 2400, sales: 1400 },
  { name: 'Sun', visits: 1398, sales: 2210 },
  { name: 'Mon', visits: 9800, sales: 2290 },
  { name: 'Tue', visits: 3908, sales: 2000 },
  { name: 'Wed', visits: 4800, sales: 2181 },
  { name: 'Thu', visits: 3800, sales: 2500 },
  { name: 'Fri', visits: 4300, sales: 2100 },
];

const transactions = [
  { id: "#1254", user: "Rahim Ahmed", status: "Completed", amount: "$250.00", date: "2 mins ago" },
  { id: "#1255", user: "Karim Ullah", status: "Pending", amount: "$120.50", date: "15 mins ago" },
  { id: "#1256", user: "Sultana Jaman", status: "Completed", amount: "$540.00", date: "1 hour ago" },
  { id: "#1257", user: "Tanvir Hossain", status: "Cancelled", amount: "$45.00", date: "3 hours ago" },
];

// Helper Components (Defined outside to prevent re-renders and errors)
const StatCard = ({ title, value, icon, trend, color }) => (
  <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
    <div className={`p-3 rounded-xl text-white ${color}`}>{icon}</div>
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <div className="flex items-center gap-2">
        <h4 className="text-xl font-bold">{value}</h4>
        <span className={`text-xs font-medium ${trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
          {trend}
        </span>
      </div>
    </div>
  </div>
);

const ActivityItem = ({ icon, title, time, desc }) => (
  <div className="flex gap-4">
    <div className="mt-1">{icon}</div>
    <div className="w-full">
      <div className="flex justify-between items-center">
        <h5 className="text-sm font-bold text-gray-800">{title}</h5>
        <span className="text-[10px] text-gray-400">{time}</span>
      </div>
      <p className="text-xs text-gray-500">{desc}</p>
    </div>
  </div>
);

const AnalyticsDashboard = () => {
  return (
    <div className="p-4 md:p-8 bg-gray-50 min-h-screen font-sans">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Admin Overview</h1>
        {/* Fixed unescaped character: what's -> what&apos;s */}
        <p className="text-gray-500">Welcome back, here is what&apos;s happening today.</p>
      </div>

      {/* 1. Stats Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard title="Total Revenue" value="$54,230" icon={<DollarSign size={20}/>} trend="+12.5%" color="bg-blue-500" />
        <StatCard title="Total Sales" value="1,450" icon={<ShoppingCart size={20}/>} trend="+5.2%" color="bg-green-500" />
        <StatCard title="New Users" value="850" icon={<Users size={20}/>} trend="+18.4%" color="bg-purple-500" />
        <StatCard title="Avg. Conversion" value="3.2%" icon={<TrendingUp size={20}/>} trend="-2.1%" color="bg-orange-500" />
      </div>

      {/* 2. Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Visitor Insights</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Area type="monotone" dataKey="visits" stroke="#3b82f6" fillOpacity={1} fill="url(#colorVisits)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Sales Performance</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="sales" fill="#10b981" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* 3. Bottom Section: Table & Activity */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Recent Transactions</h3>
            <button className="text-blue-600 text-sm font-medium">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-400 text-sm border-b border-gray-50">
                  <th className="pb-3 font-medium">Order ID</th>
                  <th className="pb-3 font-medium">Customer</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Amount</th>
                  <th className="pb-3 text-right font-medium">Time</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {transactions.map((t, i) => (
                  <tr key={i} className="border-b border-gray-50 last:border-0">
                    <td className="py-4 font-medium text-gray-700">{t.id}</td>
                    <td className="py-4 text-gray-600">{t.user}</td>
                    <td className="py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        t.status === 'Completed' ? 'bg-green-100 text-green-600' : 
                        t.status === 'Pending' ? 'bg-yellow-100 text-yellow-600' : 'bg-red-100 text-red-600'
                      }`}>
                        {t.status}
                      </span>
                    </td>
                    <td className="py-4 font-semibold text-gray-800">{t.amount}</td>
                    <td className="py-4 text-right text-gray-400">{t.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Quick Activity</h3>
          <div className="space-y-6">
            <ActivityItem icon={<CheckCircle className="text-green-500"/>} title="Server Update" time="Just now" desc="Database successfully migrated." />
            <ActivityItem icon={<Users className="text-blue-500"/>} title="New Registration" time="15m ago" desc="User &apos;Sabbir&apos; joined the platform." />
            <ActivityItem icon={<Clock className="text-orange-500"/>} title="System Backup" time="1h ago" desc="Weekly backup completed." />
          </div>
          <button className="w-full mt-6 py-2 bg-gray-50 text-gray-600 rounded-xl text-sm font-medium hover:bg-gray-100 transition">
            Clear History
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;