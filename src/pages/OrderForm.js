import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    details: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("your_service_id", "your_template_id", formData, "your_public_key")
      .then(() => alert("✅ Order placed! We’ll reach out soon."))
      .catch((err) => alert("❌ Failed to send: " + err.text));
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-chapBlack to-chapGray text-white py-24 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-3xl mx-auto p-10 rounded-2xl border border-chapGreen shadow-xl backdrop-blur-sm bg-white/5">
        <h2 className="text-5xl font-black mb-6 text-center text-chapGreen drop-shadow-neon">
          🛠️ Place an Order
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded text-black"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded text-black"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="What service do you need?"
            className="w-full px-4 py-3 rounded text-black"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            required
          />
          <textarea
            placeholder="Tell us about your project..."
            rows="5"
            className="w-full px-4 py-3 rounded text-black"
            value={formData.details}
            onChange={(e) => setFormData({ ...formData, details: e.target.value })}
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-chapGreen text-black font-bold text-lg py-3 rounded-full shadow-neon hover:bg-transparent hover:text-chapGreen hover:border hover:border-chapGreen transition"
          >
            🚀 Send Order
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default OrderForm;
