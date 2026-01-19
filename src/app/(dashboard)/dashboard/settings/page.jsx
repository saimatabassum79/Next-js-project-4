"use client";
import React, { useState } from 'react';
import { User, Bell, Lock, Eye, Globe, Moon, Save, Trash2, Camera } from 'lucide-react';

const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto space-y-8 font-sans">
      
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">Settings</h1>
          <p className="text-gray-500 text-sm">Manage your account settings and preferences.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 active:scale-95 transition-all">
          <Save size={18} />
          <span>Save Changes</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Side: Navigation Links */}
        <div className="lg:col-span-1 space-y-2">
          <nav className="flex flex-col gap-1">
            <SettingTab icon={<User size={18} />} label="Profile" active={true} />
            <SettingTab icon={<Bell size={18} />} label="Notifications" />
            <SettingTab icon={<Lock size={18} />} label="Password & Security" />
            <SettingTab icon={<Globe size={18} />} label="Language" />
            <SettingTab icon={<Eye size={18} />} label="Privacy" />
          </nav>
        </div>

        {/* Right Side: Settings Forms */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Public Profile Section */}
          <section className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold mb-6 border-b pb-4">Public Profile</h3>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
              <div className="relative group">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" 
                  alt="Avatar" 
                  className="w-24 h-24 rounded-3xl bg-gray-100 object-cover border-2 border-indigo-100"
                />
                <button className="absolute -bottom-2 -right-2 p-2 bg-white shadow-md rounded-xl text-indigo-600 hover:bg-indigo-50 transition-colors">
                  <Camera size={16} />
                </button>
              </div>
              <div className="text-center sm:text-left">
                <h4 className="font-bold text-gray-800">Profile Picture</h4>
                <p className="text-xs text-gray-400 mt-1">PNG, JPG max 5MB. 800x800px recommended.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Full Name</label>
                <input type="text" defaultValue="Alex Thompson" title="name" className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Email Address</label>
                <input type="email" defaultValue="alex@example.com" title="email" className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500 transition-all" />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Bio</label>
                <textarea rows="3" placeholder="Tell us about yourself..." title="bio" className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"></textarea>
              </div>
            </div>
          </section>

          {/* Preferences Section */}
          <section className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold mb-6 border-b pb-4">Preferences</h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                <div className="flex items-center gap-3">
                  <Moon className="text-indigo-600" size={20} />
                  <div>
                    <h5 className="text-sm font-bold">Dark Mode</h5>
                    <p className="text-[10px] text-gray-400">Switch between light and dark themes.</p>
                  </div>
                </div>
                <button 
                  onClick={() => setDarkMode(!darkMode)}
                  className={`w-12 h-6 rounded-full transition-colors relative ${darkMode ? 'bg-indigo-600' : 'bg-gray-300'}`}
                >
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${darkMode ? 'left-7' : 'left-1'}`}></div>
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                <div className="flex items-center gap-3">
                  <Bell className="text-indigo-600" size={20} />
                  <div>
                    <h5 className="text-sm font-bold">Email Notifications</h5>
                    <p className="text-[10px] text-gray-400">Receive weekly activity summaries.</p>
                  </div>
                </div>
                <button className="w-12 h-6 rounded-full bg-indigo-600 relative">
                  <div className="absolute top-1 left-7 w-4 h-4 bg-white rounded-full"></div>
                </button>
              </div>
            </div>
          </section>

          {/* Danger Zone */}
          <section className="bg-red-50/50 p-6 md:p-8 rounded-[2rem] border border-red-100">
            <div className="flex items-center gap-3 text-red-600 mb-2">
              <Trash2 size={20} />
              <h3 className="text-lg font-bold">Danger Zone</h3>
            </div>
            <p className="text-sm text-red-500/80 mb-6">Once you delete your account, there is no going back. Please be certain.</p>
            <button className="px-6 py-2.5 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-all active:scale-95 shadow-lg shadow-red-200">
              Delete Account
            </button>
          </section>

        </div>
      </div>
    </div>
  );
};

// Sub-component for Navigation Tabs
const SettingTab = ({ icon, label, active = false }) => (
  <button className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all w-full ${
    active ? 'bg-indigo-600 text-white shadow-md shadow-indigo-100' : 'text-gray-500 hover:bg-gray-100'
  }`}>
    {icon}
    <span>{label}</span>
  </button>
);

export default SettingsPage;