import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/api/auth/signin", // আপনার সাইন-ইন পেজটি এখানে বলে দিন
  },
});

// এই matcher-টি খুব সাবধানে দিতে হবে
export const config = { 
  matcher: [
    /*
     * ড্যাশবোর্ড বা প্রোফাইল পেজ প্রটেক্ট করুন।
     * কিন্তু খেয়াল রাখুন এখানে যেন মেইন হোম পেজ (/) বা লগইন এপিআই না থাকে।
     */
    "/dashboard/:path*", 
    "/setting/:path*",
    "/products/:path*"
  ] 
};