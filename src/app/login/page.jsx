"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Lock, Mail, Eye, EyeOff, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false, // আমরা ম্যানুয়ালি রিডাইরেক্ট করবো
    });

    if (res.error) {
      setError("Invalid email or password!");
      setLoading(false);
    } else {
      router.push("/dashboard"); // লগইন সফল হলে ড্যাশবোর্ডে পাঠাবে
      router.refresh();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9fafb] p-4">
      <div className="w-full max-w-md bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 p-8 md:p-10">
        
        {/* Logo or Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-2">Welcome Back</h1>
          <p className="text-gray-500 text-sm">Please enter your details to sign in</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Field */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="email"
                required
                placeholder="admin@gmail.com"
                className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-teal-500 transition-all text-sm"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="••••••••"
                className="w-full pl-12 pr-12 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-teal-500 transition-all text-sm"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 text-red-600 text-xs font-bold p-3 rounded-xl border border-red-100">
              {error}
            </div>
          )}

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-[#1c2b32] text-white rounded-2xl font-bold shadow-lg shadow-gray-200 hover:bg-teal-600 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
          >
            {loading ? "Signing in..." : "Sign In"}
            {!loading && <ArrowRight size={18} />}
          </button>
        </form>

        {/* Footer Links */}
        <div className="mt-8 text-center space-y-3">
          <p className="text-sm text-gray-500">
            Don't have an account?{" "}
            <Link href="/register" className="text-teal-600 font-bold hover:underline">
              Register here
            </Link>
          </p>
          <Link href="/" className="text-xs text-gray-400 hover:text-gray-600 block mt-4 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}