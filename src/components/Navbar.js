import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/5 backdrop-blur-sm border border-chapGreen px-6 py-3 rounded-full shadow-neon flex gap-6">
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className={`text-sm font-bold transition ${
            location.pathname === item.path
              ? "text-chapGreen"
              : "text-white hover:text-chapGreen"
          }`}
        >
          {item.name}
        </Link>
      ))}

      <Link
        to="/order"
        className="ml-4 bg-chapGreen text-black px-4 py-1.5 rounded-full text-sm font-bold hover:bg-transparent hover:text-chapGreen hover:border hover:border-chapGreen transition"
      >
        🚀 Order
      </Link>
    </nav>
  );
};

export default Navbar;
