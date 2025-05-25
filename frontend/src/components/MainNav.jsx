import React, { useState } from "react";
import { Link } from "react-router-dom";

export const MainNav = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu toggle

  return (
    <nav className="bg-[#FAFAFB] border border-gray-300 p-4 rounded-2xl shadow-md sticky top-3 z-50 mb-3">
      {/* Top nav bar */}
      <div className="flex justify-between items-center">
        {/* Left: Logo */}
        <Link to="/" className="text-2xl font-bold text-black">
          Angel Scott
        </Link>

        {/* Right: Hamburger/X icon (mobile only) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-black focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Center: Navigation links (desktop only) */}
        <ul className="hidden md:flex gap-6 font-medium text-black">
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

        {/* Contact button (desktop only) */}
        <div className="hidden md:block">
          <Link to="/" className="font-semibold text-black">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile Menu - overlay dropdown */}
      {menuOpen && (
        <div className="absolute left-0 top-[72px] w-full bg-[#FAFAFB] border border-green-700 rounded-b-2xl shadow-md md:hidden z-40">
          <div className="flex flex-col justify-center items-center p-4 gap-3 font-medium text-black">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Features
            </Link>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Projects
            </Link>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              FAQ
            </Link>
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="font-semibold pt-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
