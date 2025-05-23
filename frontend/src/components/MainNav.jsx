import React from "react";
import { Link } from "react-router-dom";

export const MainNav = () => {
  return (
    <nav className="border border-gray-300 flex justify-between items-center bg-[#FAFAFB] p-4 rounded-2xl shadow-md sticky top-3 z-50 mb-3">
      {/* Left: Logo */}
      <div>
        <Link to="/" className="text-black text-2xl font-bold">
          Angel Scott
        </Link>
      </div>

      {/* Center: Navigation Links */}
      <ul className="flex gap-6 text-black font-medium">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Features</Link>
        </li>
        <li>
          <Link to="/">Projects</Link>
        </li>

        <li>
          <Link to="/">FAQ</Link>
        </li>
      </ul>

      {/* Right: Contact Us */}
      <div>
        <Link to="/" className="text-black font-semibold">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};
