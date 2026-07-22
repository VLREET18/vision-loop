"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";


const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Developer", href: "#developer" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Founder", href: "#founder" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-md"
            : "bg-white/70 backdrop-blur-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 h-20">

          {/* Logo */}
              
                <Image
                  src="/logo.png" // Replace with your logo filename
                  alt="Vision Loop Logo"
                  width={44}
                  height={44}
                  className="rounded-xl object-contain"
                  priority
                />

                <div>
                  <h1 className="text-2xl font-extrabold tracking-wide text-black">
                    VISION LOOP
                  </h1>

                  <p className="text-xs text-gray-600 -mt-1">
                    Social Media Agency
                  </p>
                </div>
             

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-gray-700 transition duration-300 hover:text-blue-600"
              >
                {link.name}
              </a>
            ))}


            
            
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden"
          >
            {menuOpen ? (
              <X size={30} className="text-black" />
            ) : (
              <Menu size={30} className="text-black" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 left-0 w-full bg-white shadow-xl lg:hidden z-40"
          >
            <div className="flex flex-col p-6 gap-5">

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg font-medium text-gray-800 hover:text-blue-600 transition"
                >
                  {link.name}
                </a>
              ))}


              
              <button className="btn-primary mt-3">
                Book a Call
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}