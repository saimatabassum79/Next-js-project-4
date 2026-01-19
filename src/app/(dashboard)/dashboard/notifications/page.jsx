"use client";
import React from 'react';
import { Info, AlertTriangle, ShoppingBag, Clock, CheckCircle2 } from 'lucide-react';

const notifications = [
  {
    id: 1,
    title: "Order Confirmed",
    desc: "Your order #882 has been confirmed and is being processed.",
    time: "2 mins ago",
    type: "success",
    unread: true,
  },
  {
    id: 2,
    title: "Security Alert",
    desc: "A new login was detected from a Chrome browser on Windows.",
    time: "1 hour ago",
    type: "warning",
    unread: true,
  },
  {
    id: 3,
    title: "Update Available",
    desc: "System version 2.4.0 is now available for your account.",
    time: "5 hours ago",
    type: "info",
    unread: false,
  },
  {
    id: 4,
    title: "Payment Received",
    desc: "We have received your payment for the monthly subscription.",
    time: "Yesterday",
    type: "success",
    unread: false,
  },
];

const NotificationList = () => {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">
      
      {/* Header */}
      <div className="p-6 border-b border-gray-50 flex justify-between items-center bg-white">
        <div>
          <h3 className="text-xl font-bold text-gray-900">Notifications</h3>
          <p className="text-sm text-gray-500 font-medium">You have 2 unread messages</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
          <CheckCircle2 size={14} />
          Mark all as read
        </button>
      </div>

      {/* List Section */}
      <div className="divide-y divide-gray-50">
        {notifications.map((item) => (
          <div 
            key={item.id} 
            className={`p-5 flex gap-5 hover:bg-gray-50 transition-all cursor-pointer group ${
              item.unread ? 'bg-indigo-50/20' : ''
            }`}
          >
            {/* Dynamic Icon Box */}
            <div className={`mt-1 p-3 h-fit rounded-2xl shadow-sm transition-transform group-hover:scale-110 ${
              item.type === 'success' ? 'bg-emerald-100 text-emerald-600' : 
              item.type === 'warning' ? 'bg-amber-100 text-amber-600' : 'bg-blue-100 text-blue-600'
            }`}>
              {item.type === 'success' && <ShoppingBag size={20} />}
              {item.type === 'warning' && <AlertTriangle size={20} />}
              {item.type === 'info' && <Info size={20} />}
            </div>

            {/* Text Content */}
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h4 className={`text-base font-bold ${item.unread ? 'text-gray-900' : 'text-gray-600'}`}>
                  {item.title}
                </h4>
                {item.unread && (
                  <span className="flex items-center gap-1.5 px-2 py-0.5 bg-indigo-600 text-white text-[10px] font-bold rounded-full uppercase tracking-tighter">
                    New
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-3">
                {item.desc}
              </p>
              <div className="flex items-center gap-1 text-[11px] font-semibold text-gray-400">
                <Clock size={12} />
                <span>{item.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-4 bg-gray-50/50 border-t border-gray-50">
        <button className="w-full py-3 text-sm font-bold text-gray-600 hover:text-indigo-600 transition-colors">
          Load Previous Notifications
        </button>
      </div>
    </div>
  );
};

export default NotificationList;