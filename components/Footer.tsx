"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUp,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (

    <footer className="relative overflow-hidden bg-[#081B3A] text-white">

      {/* Background Glow */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,.25),transparent_40%)]" />

      <div className="container-custom relative py-20">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Brand */}

          <motion.div
            initial={{ opacity:0,y:30 }}
            whileInView={{ opacity:1,y:0 }}
            viewport={{ once:true }}
            transition={{ duration:.6 }}
          >

            <h2 className="text-4xl font-black">
              VISION
              <span className="text-blue-400">
                {" "}LOOP
              </span>
            </h2>

            <p className="mt-6 leading-8 text-blue-100">
              Helping businesses grow with premium social media management,
              creative branding, engaging content, and high-performing digital
              strategies.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition hover:bg-blue-600"
              >
                <FaInstagram size={20}/>
              </a>

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition hover:bg-red-600"
              >
                <FaYoutube size={20}/>
              </a>

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition hover:bg-green-600"
              >
                <FaWhatsapp size={20}/>
              </a>

            </div>

          </motion.div>

          {/* Quick Links */}

          <motion.div
            initial={{ opacity:0,y:30 }}
            whileInView={{ opacity:1,y:0 }}
            viewport={{ once:true }}
            transition={{ delay:.1,duration:.6 }}
          >

            <h3 className="mb-6 text-xl font-bold">
              Quick Links
            </h3>

            <div className="space-y-4">

              <Link href="/" className="block text-blue-100 hover:text-white">
                Home
              </Link>

              <Link href="#about" className="block text-blue-100 hover:text-white">
                About
              </Link>

              <Link href="#services" className="block text-blue-100 hover:text-white">
                Services
              </Link>

              <Link href="#portfolio" className="block text-blue-100 hover:text-white">
                Portfolio
              </Link>

              <Link href="#contact" className="block text-blue-100 hover:text-white">
                Contact
              </Link>

            </div>

          </motion.div>

          {/* Services */}

          <motion.div
            initial={{ opacity:0,y:30 }}
            whileInView={{ opacity:1,y:0 }}
            viewport={{ once:true }}
            transition={{ delay:.2,duration:.6 }}
          >

            <h3 className="mb-6 text-xl font-bold">
              Services
            </h3>

            <div className="space-y-4 text-blue-100">

              <p>Social Media Management</p>
              <p>Video Editing</p>
              <p>Content Creation</p>
              <p>Brand Identity</p>
              <p>Graphic Design</p>
              <p>Paid Advertising</p>

            </div>

          </motion.div>

          {/* Contact */}

          <motion.div
            initial={{ opacity:0,y:30 }}
            whileInView={{ opacity:1,y:0 }}
            viewport={{ once:true }}
            transition={{ delay:.3,duration:.6 }}
          >

            <h3 className="mb-6 text-xl font-bold">
              Contact
            </h3>

            <div className="space-y-6">

              <div className="flex gap-4">

                <Mail className="mt-1 text-blue-400"/>

                <div>
                  <p className="text-blue-100">
                    hello@visionloop.com
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <Phone className="mt-1 text-blue-400"/>

                <div>
                  <p className="text-blue-100">
                    +91 98765 43210
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <MapPin className="mt-1 text-blue-400"/>

                <div>
                  <p className="text-blue-100">
                    India
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

        </div>
                {/* Divider */}

        <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Bottom Bar */}

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center text-sm text-blue-100"
          >
            © {new Date().getFullYear()} <span className="font-semibold text-white">VISION LOOP</span>. All Rights Reserved.
            <br className="md:hidden" />
            <span className="hidden md:inline"> • </span>
            Crafted with ❤️ to help brands grow.
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{
              scale: 1.08,
              y: -3,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="group flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 shadow-xl transition hover:bg-blue-500"
            aria-label="Back to top"
          >
            <ArrowUp
              size={22}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />
          </motion.button>

        </div>

      </div>

      {/* Decorative Bottom Glow */}

      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400" />

    </footer>
  );
}