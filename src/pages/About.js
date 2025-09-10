import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-chapBlack to-chapGray text-white py-24 px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="max-w-4xl mx-auto p-10 rounded-2xl border border-chapGreen shadow-xl backdrop-blur-sm bg-white/5"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <h2 className="text-5xl font-black mb-6 drop-shadow-neon text-chapGreen text-center">
          👨🏽‍💻 Meet InternetChap
        </h2>
        <p className="text-chapWhite/90 text-lg leading-relaxed mb-6">
          I’m not your average dev. I’m the code-slingin’, coffee-powered architect behind digital experiences that hit hard and look hotter. Whether you’re launching a startup, rebranding a legacy, or just want a site that feels like it was made by a *tech sorcerer* — you’ve found your guy.
        </p>
        <p className="text-chapWhite/90 text-lg leading-relaxed mb-6">
          With a taste for sleek UI, buttery smooth UX, and a borderline unhealthy obsession with animations, I design and build with a vision: make the web feel like art... but with a loading speed faster than your ex running from accountability.
        </p>
        <p className="text-chapWhite/90 text-lg leading-relaxed">
          When I’m not taming APIs or battling CSS bugs, I’m crafting strategies, branding kits, and spicy memes that make users *feel something*. Because on this side of the screen, it's all about vibe + function. Let’s build something dangerously good.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
