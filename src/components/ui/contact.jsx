"use client";
import React, { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form input changes
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Function to send data to AWS
  const sendToAWS = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
      const response = await fetch("https://dw2g6ymcr6.execute-api.us-east-1.amazonaws.com/prod", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      alert("Form data sent successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send form data!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl flex flex-col md:flex-row w-full max-w-5xl overflow-hidden">
        {/* Left side info */}
        <div className="relative text-white md:w-1/2 p-10 flex flex-col justify-center overflow-hidden">
          <iframe
            title="Google Map"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            src="https://www.google.com/maps/embed/v1/place?q=maruti%20suzuki%20india%20limited%2C%20sector-18%2C%20gurgaon%2C%20haryana%2C%20india&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/110 to-transparent z-0"></div>
        </div>

        {/* Right side form */}
        <div className="md:w-1/2 p-10 bg-white">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <h3 className="mb-6 text-md">Get In Touch!</h3>
          <form className="space-y-6" onSubmit={sendToAWS}>
            <div>
              <label className="block mb-1 text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
