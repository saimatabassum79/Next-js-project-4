'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, Users, Settings, ShoppingBag, 
  BarChart3, ShieldCheck, HelpCircle, LogOut,
  Bell
} from "lucide-react";

const menuGroups = [
  {
    label: "Main",
    items: [
      { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
      { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
    ]
  },
  {
    label: "Management",
    items: [
      { name: "Users", href: "/dashboard/users", icon: Users },
      { name: "Products", href: "/dashboard/products", icon: ShoppingBag },
    ]
  },
  {
    label: "Admin",
    items: [
        { name: "Notifications", href: "/dashboard/notifications", icon: Bell },
      { name: "Security", href: "/dashboard/security", icon: ShieldCheck },
      { name: "Settings", href: "/dashboard/settings", icon: Settings },
    ]
  }
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 h-screen bg-[#0f172a] text-slate-400 flex flex-col border-r border-slate-800">
      
      {/* 1. Logo Section (Static) */}
      <div className="p-4 shrink-0">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-600/20">
            <LayoutDashboard className="text-white h-6 w-6" />
          </div>
          <div>
            <h1 className="text-white font-bold text-lg leading-none">Nexus Admin</h1>
            <span className="text-[10px] uppercase tracking-wider font-semibold text-teal-600/80">Management Suite</span>
          </div>
        </div>
      </div>

      {/* 2. Navigation Area (Flexible but fits screen) */}
      <nav className="flex-1 px-4 space-y-6 overflow-hidden mt-2">
        {menuGroups.map((group, idx) => (
          <div key={idx} className="space-y-1">
            <h2 className="px-4 text-[8px] font-bold uppercase tracking-widest text-slate-500/60 mb-1">
              {group.label}
            </h2>
            <div className="space-y-1">
              {group.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center  justify-between px-4 py-2 rounded-lg transition-all duration-200 group ${
                      isActive 
                        ? "bg-teal-600/10  text-teal-500 font-medium" 
                        : "hover:bg-slate-800/50 hover:text-slate-200"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <item.icon className={`h-5 w-5 ${
                        isActive ? "text-teal-500" : "text-slate-500 group-hover:text-teal-500"
                      }`} />
                      <span className="text-sm">{item.name}</span>
                    </div>
                    {isActive && <div className="h-1 w-1 rounded-full bg-teal-500" />}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* 3. Footer/User Section (Fixed at bottom) */}
      <div className="p-1.5 shrink-0 border-t border-slate-800/60 bg-slate-900/20">
        <div className="flex items-center gap-3 px-2 py-3 mb-2 bg-slate-800/30 rounded-xl border border-slate-800/50">
          <div className="h-9 w-9 rounded-lg bg-teal-600 flex items-center justify-center text-white text-xs font-bold">
            SA
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-xs font-bold text-white truncate">Sabbir Ahmed</p>
            <p className="text-[10px] text-slate-500 truncate italic tracking-tight">Super Administrator</p>
          </div>
        </div>
        
        <button className="flex w-full items-center gap-3 px-4 py-1.5 text-xs font-bold text-slate-500 hover:text-rose-500 hover:bg-rose-500/5 rounded-lg transition-all group">
          <LogOut className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span className="uppercase tracking-widest">Logout System</span>
        </button>
      </div>
    </aside>
  );
}