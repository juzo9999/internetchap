import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      className="text-white py-24 px-6 min-h-screen bg-gradient-to-br from-chapBlack to-chapGray"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="max-w-3xl mx-auto text-center p-10 rounded-2xl border border-chapGreen shadow-xl backdrop-blur-sm bg-white/5"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <h2 className="text-5xl font-black mb-6 drop-shadow-neon text-chapGreen">
          ✨ Let’s Connect
        </h2>
        <p className="text-chapWhite/90 text-lg mb-8">
          Whether you’re ready to launch your dream site, need digital magic, or just want to chat — InternetChap is only one click away.
        </p>

        <div className="space-y-6 text-left text-chapWhite/80">
          <div>
            <h4 className="text-chapGreen text-xl font-semibold">📧 Email:</h4>
            <a
              href="mailto:internetchap@webwizardry.io"
              className="text-white text-lg hover:underline hover:text-green-400"
            >
              internetchap@webwizardry.io
            </a>
          </div>

          <div>
            <h4 className="text-chapGreen text-xl font-semibold">📱 Social:</h4>
            <p className="text-white">@internetchap everywhere that matters.</p>
          </div>

          <div>
            <h4 className="text-chapGreen text-xl font-semibold">🌍 Location:</h4>
            <p className="text-white">Operating from Lagos, Nigeria – Serving the world 🌐</p>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="/order"
            className="inline-block bg-chapGreen text-black px-6 py-3 rounded-full font-bold text-lg shadow-neon hover:bg-transparent hover:border hover:text-chapGreen hover:border-chapGreen transition"
          >
            🚀 Request a Project
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;

