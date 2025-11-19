"use client";

import { User, Mail, ChevronDown, MessageSquare, Phone, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-20 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

        {/* LEFT FORM CARD */}
        <div className="border border-gray-200 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-semibold">Leave A Reply</h2>
          <p className="text-gray-500 text-sm mt-1">
            Fill-up The Form and Message us of your amazing question
          </p>

          <form className="mt-8 space-y-5">

            {/* NAME + EMAIL */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="border border-gray-200 rounded-lg px-4 py-3 flex items-center justify-between">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="outline-none w-full text-sm"
                />
                <User size={16} className="text-gray-400" />
              </div>

              <div className="border border-gray-200 rounded-lg px-4 py-3 flex items-center justify-between">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="outline-none w-full text-sm"
                />
                <Mail size={16} className="text-gray-400" />
              </div>
            </div>

            {/* SUBJECT */}
            <div className="border border-gray-200 rounded-lg px-4 py-3 flex items-center justify-between">
              <input
                type="text"
                placeholder="Select Subject"
                className="outline-none w-full text-sm"
              />
              <ChevronDown size={18} className="text-gray-400" />
            </div>

            {/* MESSAGE */}
            <div className="border border-gray-200 rounded-lg px-4 py-3 flex items-start gap-2">
              <textarea
                placeholder="Message"
                className="outline-none w-full text-sm h-28 resize-none"
              ></textarea>
              <MessageSquare size={18} className="text-gray-400 mt-1" />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-medium transition"
            >
              Submit Message
            </button>
          </form>
        </div>

        {/* RIGHT INFORMATION CARD */}
        <div className="border border-gray-200 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-semibold">Office Information</h2>
          <p className="text-gray-500 text-sm mt-1 mb-6">
            Completely recapitalize 24/7 communities via standards compliant metrics whereas.
          </p>

          <div className="space-y-8">

            {/* PHONE */}
            <div>
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-10 h-10 bg-[#E8FFF7] rounded-full flex items-center justify-center">
                  <Phone className="text-teal-600" size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Phone Number & Email</h4>
                  <p className="text-sm text-gray-600">(+65) - 48596 - 5789</p>
                  <p className="text-sm text-gray-600">hello@edecare.com</p>
                </div>
              </div>
              <hr className="mt-4 border-gray-200" />
            </div>

            {/* ADDRESS */}
            <div>
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-10 h-10 bg-[#E8FFF7] rounded-full flex items-center justify-center">
                  <MapPin className="text-teal-600" size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Our Office Address</h4>
                  <p className="text-sm text-gray-600">2690 Hilton Street Victoria Road,</p>
                  <p className="text-sm text-gray-600">New York, Canada</p>
                </div>
              </div>
              <hr className="mt-4 border-gray-200" />
            </div>

            {/* WORK TIME */}
            <div>
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-10 h-10 bg-[#E8FFF7] rounded-full flex items-center justify-center">
                  <Clock className="text-teal-600" size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Official Work Time</h4>
                  <p className="text-sm text-gray-600">Monday - Friday: 09:00 - 20:00</p>
                  <p className="text-sm text-gray-600">Sunday & Saturday: 10:30 - 22:00</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}