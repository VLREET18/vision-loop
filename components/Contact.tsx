"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

import {
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-b from-white via-blue-50 to-white"
    >
      <div className="container-custom">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >

          <span className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">
            Contact Us
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-black">
            Let's Build Something
            <span className="gradient-text">
              {" "}Amazing
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-700">
            Ready to grow your business? Reach out to Vision Loop today.
            We'd love to discuss your project and help your brand stand
            out online.
          </p>

        </motion.div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">

          {/* Contact Information */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <div className="glass-card p-8">

              <h3 className="text-3xl font-bold text-black">
                Get In Touch
              </h3>

              <p className="mt-4 leading-8 text-gray-700">
                We're always excited to collaborate with ambitious brands,
                creators, and businesses.
              </p>

              <div className="mt-10 space-y-6">

                <div className="flex items-center gap-5">

                  <div className="rounded-xl bg-blue-100 p-4">
                    <Mail className="text-blue-600" size={24} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Email
                    </p>

                    <h4 className="font-semibold text-black">
                        visionloop.028@gmail.com
                    </h4>
                  </div>

                </div>

                <div className="flex items-center gap-5">

                  <div className="rounded-xl bg-blue-100 p-4">
                    <Phone className="text-blue-600" size={24} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Phone
                    </p>

                    <h4 className="font-semibold text-black">
                      +91 9135976609
                    </h4>
                  </div>

                </div>

                <div className="flex items-center gap-5">

                  <div className="rounded-xl bg-blue-100 p-4">
                    <MapPin className="text-blue-600" size={24} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Location
                    </p>

                    <h4 className="font-semibold text-black">
                      India
                    </h4>
                  </div>

                </div>

                <div className="flex items-center gap-5">

                  <div className="rounded-xl bg-blue-100 p-4">
                    <Clock className="text-blue-600" size={24} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Working Hours
                    </p>

                    <h4 className="font-semibold text-black">
                      Mon – Sat • 9:00 AM – 7:00 PM
                    </h4>
                  </div>

                </div>

              </div>

              {/* Social Icons */}

              <div className="mt-10 flex gap-4">

                <a
                  href="https://www.instagram.com/vision_loop_01?utm_source=qr&igsh=MW5zbmF3aHNjdzIyMw=="
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition hover:bg-blue-600 hover:text-white"
                >
                  <FaInstagram size={20} />
                </a>

                

                <a
                  href="https://wa.me/919135976609"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white transition hover:bg-green-600"
                >
                  <FaWhatsapp size={20} />
                </a>

              </div>

            </div>

          </motion.div>

          {/* Contact Form */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <div className="glass-card p-8">

              <h3 className="text-3xl font-bold text-black">
                Send a Message
              </h3>

              <form
                    action="https://formsubmit.co/visionloop.028@gmail.com"
                    method="POST"
                    className="mt-8 space-y-6"
                  >
                  

                                <div className="grid gap-6 md:grid-cols-2">

                  <div>
                    <label className="mb-2 block font-medium text-black">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none transition focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block font-medium text-black">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none transition focus:border-blue-500"
                    />
                  </div>

                </div>

                <div className="grid gap-6 md:grid-cols-2">

                  <div>
                    <label className="mb-2 block font-medium text-black">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none transition focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block font-medium text-black">
                      Service Required
                    </label>

                    <select
                      className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none transition focus:border-blue-500"
                    >
                      <option>Social Media Management</option>
                      <option>Video Editing</option>
                      <option>Brand Identity</option>
                      <option>Graphic Design</option>
                      <option>Content Creation</option>
                      <option>Paid Advertising</option>
                    </select>
                  </div>

                </div>

                <div>

                  <label className="mb-2 block font-medium text-black">
                    Your Message
                  </label>

                  <textarea
                    rows={6}
                    placeholder="Tell us about your project..."
                    className="w-full resize-none rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none transition focus:border-blue-500"
                  />

                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-blue-700"
                >

                  <Send size={20} />

                  Send Message

                </button>

              </form>

            </div>

          </motion.div>

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 rounded-[36px] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-12 text-center text-white shadow-2xl"
        >

          <h2 className="text-4xl font-extrabold">
            Ready to Elevate Your Brand?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Whether you're starting from scratch or scaling your business,
            Vision Loop is ready to help you create impactful content,
            grow your audience, and achieve measurable digital success.
          </p>

          <a
            href="https://wa.me/919135976609"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center rounded-full bg-white px-8 py-4 font-semibold text-blue-700 transition duration-300 hover:scale-105"
          >
            Chat on WhatsApp
          </a>

        </motion.div>

      </div>
    </section>
  );
}
           