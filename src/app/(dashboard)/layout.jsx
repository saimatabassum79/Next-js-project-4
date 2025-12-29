'use client';
import DashboardNavbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      {/* 1. Sidebar - Fixed Position */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="w-72 flex flex-col">
          {/* Sidebar component e bhetore scroll thakle oita Sidebar.jsx e handle hobe */}
          <Sidebar />
        </div>
      </div>

      {/* 2. Main Content Area */}
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        
        {/* Navbar - Static at top */}
        <DashboardNavbar />

        {/* Scrollable Content Section */}
        <main className="flex-1 relative overflow-y-auto focus:outline-none bg-[#f8fafc] p-4 md:p-8">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}