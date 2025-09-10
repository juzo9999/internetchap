import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const AdminDashboard = () => {
  const [passcode, setPasscode] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [emailDetails, setEmailDetails] = useState({
    to: "",
    subject: "",
    message: "",
  });

  const handleUnlock = () => {
    if (passcode === "internetchap2025") {
      setUnlocked(true);
    } else {
      alert("🚫 Wrong passcode, chap. Try again.");
    }
  };

  const sendEmail = () => {
    emailjs
      .send("your_service_id", "your_template_id", emailDetails, "your_public_key")
      .then(() => alert("✅ Email sent!"))
      .catch((error) => alert("❌ Email failed: " + error.text));
  };

  return (
    <motion.div
      className="bg-chapBlack min-h-screen py-20 px-6 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      {!unlocked ? (
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-chapGreen drop-shadow-neon">
            🔒 Admin Access
          </h2>
          <input
            type="password"
            placeholder="Enter passcode..."
            className="px-4 py-2 rounded w-full text-black"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
          />
          <button
            onClick={handleUnlock}
            className="mt-4 px-6 py-2 bg-chapGreen text-black rounded-full hover:bg-transparent hover:text-chapGreen hover:border hover:border-chapGreen transition"
          >
            Unlock
          </button>
        </div>
      ) : (
        <motion.div
          className="max-w-2xl mx-auto bg-white/5 p-8 rounded-xl border border-chapGreen shadow-neon"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-4 text-chapGreen">📧 Send Custom Email</h3>
          <input
            type="email"
            placeholder="To (recipient@domain.com)"
            className="w-full mb-4 px-4 py-2 text-black rounded"
            value={emailDetails.to}
            onChange={(e) => setEmailDetails({ ...emailDetails, to: e.target.value })}
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full mb-4 px-4 py-2 text-black rounded"
            value={emailDetails.subject}
            onChange={(e) => setEmailDetails({ ...emailDetails, subject: e.target.value })}
          />
          <textarea
            rows="5"
            placeholder="Your message..."
            className="w-full mb-6 px-4 py-2 text-black rounded"
            value={emailDetails.message}
            onChange={(e) => setEmailDetails({ ...emailDetails, message: e.target.value })}
          ></textarea>
          <button
            onClick={sendEmail}
            className="w-full px-6 py-3 bg-chapGreen text-black rounded-full hover:bg-transparent hover:text-chapGreen hover:border hover:border-chapGreen transition"
          >
            ✉️ Send Email
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default AdminDashboard;
