'use client';
import { 
  Search, 
  Bell, 
  User, 
  Settings, 
  LogOut, 
  Menu,
  ChevronDown,
  Globe,
  Plus
} from "lucide-react";
import { useState } from "react";
// --- ১. NextAuth থেকে প্রয়োজনীয় হুক ইম্পোর্ট করুন ---
import { useSession, signOut } from "next-auth/react";

export default function DashboardNavbar() {
  const [showProfile, setShowProfile] = useState(false);
  
  // --- ২. সেশন ডাটা নিয়ে আসুন ---
  const { data: session } = useSession();

  // নামের প্রথম দুই অক্ষর বের করার জন্য (যেমন: Sabbir Ahmed -> SA)
  const getInitials = (name) => {
    if (!name) return "??";
    return name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
  };

  return (
    <header className="h-20 bg-white border-b border-slate-200 px-8 flex justify-between items-center sticky top-0 z-30 shadow-sm">
      
      {/* Left Side: Mobile Menu Toggle & Search */}
      <div className="flex items-center gap-6 flex-1">
        <button className="lg:hidden p-2 hover:bg-teal-50 rounded-lg text-slate-600 transition-colors">
          <Menu className="h-6 w-6" />
        </button>

        <div className="hidden md:flex items-center relative w-full max-w-md group">
          <Search className="h-4 w-4 absolute left-3 text-slate-400 group-focus-within:text-teal-600 transition-colors" />
          <input 
            type="text" 
            placeholder="Search analytics, users or files..." 
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-teal-500/10 focus:border-teal-500 focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Right Side: Actions & Profile */}
      <div className="flex items-center gap-3">
        
        <button className="hidden sm:flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-md shadow-teal-600/20 mr-2">
          <Plus className="h-4 w-4" />
          Create New
        </button>

        <div className="flex items-center gap-1">
          <button className="p-2.5 text-slate-500 hover:bg-teal-50 hover:text-teal-600 rounded-full transition-all">
            <Globe className="h-5 w-5" />
          </button>

          <button className="p-2.5 text-slate-500 hover:bg-teal-50 hover:text-teal-600 rounded-full transition-all relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-2.5 right-2.5 h-2 w-2 bg-teal-500 rounded-full border-2 border-white"></span>
          </button>
        </div>

        <div className="h-8 w-[1px] bg-slate-200 mx-2 hidden sm:block"></div>

        {/* User Profile Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-3 p-1.5 hover:bg-slate-50 rounded-xl transition-all border border-transparent hover:border-slate-200"
          >
            {/* ৩. ডাইনামিক আভাটার (নামের প্রথম অক্ষর) */}
            <div className="h-9 w-9 rounded-lg bg-teal-600 flex items-center justify-center text-white font-bold text-sm shadow-inner uppercase">
              {session?.user?.name ? getInitials(session.user.name) : "U"}
            </div>
            
            <div className="hidden text-left sm:block">
              {/* ৪. ডাইনামিক নাম */}
              <p className="text-sm font-bold text-slate-800 leading-none capitalize">
                {session?.user?.name || "User Name"}
              </p>
              <p className="text-[11px] font-medium text-teal-600 mt-1 uppercase tracking-tighter">
                {session?.user?.email || "Admin"}
              </p>
            </div>
            <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform duration-300 ${showProfile ? 'rotate-180' : ''}`} />
          </button>

          {showProfile && (
            <div className="absolute right-0 mt-3 w-60 bg-white border border-slate-200 rounded-2xl shadow-2xl shadow-slate-200/50 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="px-4 py-3 border-b border-slate-50 mb-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Administrator</p>
              </div>
              
              <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:bg-teal-50 hover:text-teal-700 transition-colors text-left">
                <User className="h-4 w-4 text-slate-400" />
                My Profile
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:bg-teal-50 hover:text-teal-700 transition-colors text-left">
                <Settings className="h-4 w-4 text-slate-400" />
                Account Settings
              </button>
              
              <div className="h-[1px] bg-slate-100 my-2 mx-4"></div>
              
              {/* ৫. লগআউট ফাংশনালিটি যোগ করা হয়েছে */}
              <button 
                onClick={() => signOut({ callbackUrl: "/login" })}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-rose-500 hover:bg-rose-50 transition-colors text-left"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}