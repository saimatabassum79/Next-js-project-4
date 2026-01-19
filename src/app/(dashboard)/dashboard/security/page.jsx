"use client";
import React from 'react';
import { ShieldCheck, Lock, Smartphone, EyeOff, LogOut, Key, AlertCircle } from 'lucide-react';

const SecuritySettings = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6 p-4 md:p-0">
      
      {/* Security Status Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-[2rem] p-6 text-white flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-white/20 rounded-2xl">
            <ShieldCheck size={32} />
          </div>
          <div>
            <h2 className="text-xl font-bold">Account Security</h2>
            <p className="text-emerald-50 text-sm">Your account security is 85% complete.</p>
          </div>
        </div>
        <button className="hidden sm:block px-4 py-2 bg-white text-emerald-600 rounded-xl text-xs font-bold shadow-sm">
          Run Scan
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Change Password Section */}
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
              <Lock size={20} />
            </div>
            <h3 className="font-bold text-gray-800">Change Password</h3>
          </div>
          <div className="space-y-4">
            <input type="password" placeholder="Current Password" title="current password" className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
            <input type="password" placeholder="New Password" title="new password" className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
            <button className="w-full py-3 bg-gray-900 text-white rounded-xl text-sm font-bold hover:bg-gray-800 transition-all">Update Password</button>
          </div>
        </div>

        {/* Two-Factor Auth Section */}
        <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
                <Smartphone size={20} />
              </div>
              <h3 className="font-bold text-gray-800">Two-Factor Authentication</h3>
            </div>
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">
              Add an extra layer of security to your account by enabling 2FA via SMS or App.
            </p>
          </div>
          <button className="w-full py-3 border-2 border-indigo-600 text-indigo-600 rounded-xl text-sm font-bold hover:bg-indigo-50 transition-all">
            Enable 2FA
          </button>
        </div>

        {/* Browser Sessions */}
        <div className="md:col-span-2 bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-50 text-red-600 rounded-lg">
                <EyeOff size={20} />
              </div>
              <h3 className="font-bold text-gray-800">Active Sessions</h3>
            </div>
            <button className="text-sm font-bold text-red-600 hover:underline">Log out all devices</button>
          </div>
          
          <div className="space-y-4">
            <SessionRow device="Windows PC - Chrome" location="Dhaka, Bangladesh" status="Active Now" isCurrent={true} />
            <SessionRow device="iPhone 15 Pro - Safari" location="Chittagong, Bangladesh" status="2 hours ago" isCurrent={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Session Row Sub-component
const SessionRow = ({ device, location, status, isCurrent }) => (
  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
    <div className="flex items-center gap-4">
      <div className="p-2 bg-white rounded-xl shadow-sm text-gray-400">
        <Smartphone size={20} />
      </div>
      <div>
        <h5 className="text-sm font-bold text-gray-800">{device}</h5>
        <p className="text-xs text-gray-400">{location} • {status}</p>
      </div>
    </div>
    {isCurrent ? (
      <span className="px-3 py-1 bg-emerald-100 text-emerald-600 text-[10px] font-bold rounded-full uppercase">Current</span>
    ) : (
      <button className="text-gray-400 hover:text-red-600 transition-colors"><LogOut size={18} /></button>
    )}
  </div>
);

export default SecuritySettings;