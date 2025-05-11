"use client";
import React from "react";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl flex flex-col md:flex-row w-full max-w-5xl overflow-hidden">
        
        {/* Left side info */}
        <div className="relative text-white md:w-1/2 p-10 flex flex-col justify-center overflow-hidden">
  {/* Background Map */}
  <iframe
    title="Google Map"
    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
    src="https://www.google.com/maps/embed/v1/place?q=maruti%20suzuki%20india%20limited%2C%20sector-18%2C%20gurgaon%2C%20haryana%2C%20india&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"

  ></iframe>
   <div className="absolute inset-0 bg-gradient-to-r from-white/100 via-white/70 to-transparent z-0" />

  {/* Overlay Content */}
  <div className="relative z-10 text-black ">
    <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
    <h3 className="mb-6 text-md">
      Get In Touch!
    </h3>
    <div className="space-y-4 text-sm">
      <div>
        <p className="font-semibold">Email</p>
        <p>hello@yourcompany.com</p>
      </div>
      <div>
        <p className="font-semibold">Phone</p>
        <p>+1 (555) 123-4567</p>
      </div>
      <div>
        <p className="font-semibold">Address</p>
        <p>123 Main Street, Suite 500<br />New York, NY 10001</p>
      </div>
    </div>
  </div>
</div>

        {/* Right side form */}
        <div className="md:w-1/2 p-10 bg-white">
          <form className="space-y-6">
            <div>
              <label className="block mb-1 text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Message</label>
              <textarea
                className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
