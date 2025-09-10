import React from "react";
import { motion } from "framer-motion";
import chapAvatar from "../assets/internetchap-avatar.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-chapBlack to-chapGray text-white px-6 py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-16">
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 drop-shadow-neon text-chapGreen">
            Welcome to InternetChap
          </h1>
          <p className="text-chapWhite/90 text-lg mb-8">
            The digital wizard behind bold websites, high-impact branding, and UI/UX so smooth it might make your keyboard blush.
          </p>
          <div className="space-x-4">
            <Link
              to="/projects"
              className="bg-chapGreen text-black px-6 py-3 rounded-full font-bold shadow-neon hover:bg-transparent hover:border hover:text-chapGreen hover:border-chapGreen transition"
            >
              🔍 See Projects
            </Link>
            <Link
              to="/order"
              className="bg-transparent text-chapGreen border border-chapGreen px-6 py-3 rounded-full font-bold hover:bg-chapGreen hover:text-black transition"
            >
              🚀 Start a Project
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center"
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <img
            src={chapAvatar}
            alt="InternetChap Avatar"
            className="w-[300px] md:w-[400px] rounded-xl border-4 border-chapGreen shadow-neon"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
