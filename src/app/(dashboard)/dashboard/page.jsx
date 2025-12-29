'use client';
import { 
  Users, 
  ShoppingBag, 
  DollarSign, 
  TrendingUp, 
  ArrowUpRight, 
  BarChart3,
  Activity
} from "lucide-react";

const stats = [
  { name: "Total Revenue", value: "$45,231.89", icon: DollarSign, change: "+20.1%", color: "text-teal-600", bg: "bg-teal-50" },
  { name: "Active Users", value: "2,350", icon: Users, change: "+10.5%", color: "text-blue-600", bg: "bg-blue-50" },
  { name: "Total Orders", value: "1,204", icon: ShoppingBag, change: "+12.2%", color: "text-purple-600", bg: "bg-purple-50" },
  { name: "Active Now", value: "48", icon: Activity, change: "+3", color: "text-emerald-600", bg: "bg-emerald-50" },
];

export default function DashboardHome() {
  return (
    <div className="p-4 md:p-1 space-y-5">
      {/* Hero Header */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Analytics Overview</h1>
          <p className="text-slate-500 text-sm mt-1">Monitor your business performance in real-time.</p>
        </div>
        <div className="hidden sm:block text-sm font-medium text-slate-400 bg-white px-4 py-2 rounded-lg border border-slate-200">
          Updated: Just Now
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-3 rounded-xl ${item.bg} ${item.color}`}>
                <item.icon className="h-6 w-6" />
              </div>
              <span className="flex items-center text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
                {item.change}
                <ArrowUpRight className="h-3 w-3 ml-0.5" />
              </span>
            </div>
            <div className="mt-5">
              <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider">{item.name}</h3>
              <p className="text-2xl font-extrabold text-slate-800 mt-1">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid: Visuals & Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Large Analytics Box */}
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800">Revenue Flow</h3>
            <select className="text-xs border-slate-200 rounded-lg bg-slate-50 p-1.5 focus:outline-none">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="flex-1 min-h-[250px] bg-slate-50/50 rounded-2xl border-2 border-dashed border-slate-100 flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="h-10 w-10 text-slate-200 mx-auto mb-2" />
              <p className="text-sm text-slate-400">Chart data will be visualized here</p>
            </div>
          </div>
        </div>

        {/* Recent Transactions List */}
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-6">Recent Sales</h3>
          <div className="space-y-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-teal-600 font-bold text-xs">
                  JD
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-slate-700">John Doe</p>
                  <p className="text-[11px] text-slate-400">johndoe@gmail.com</p>
                </div>
                <div className="text-sm font-bold text-slate-800">+$240</div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 text-sm font-semibold text-teal-600 bg-teal-50 rounded-xl hover:bg-teal-100 transition-colors">
            View All Transactions
          </button>
        </div>
      </div>
    </div>
  );
}