/* Founder.tsx */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Briefcase } from "lucide-react";
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Founder() {
  return (
    <section
      id="founder"
      className="section-padding bg-gradient-to-b from-white via-blue-50 to-white"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">
            Meet the Founder
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-black">
            The Vision Behind
            <span className="gradient-text"> Vision Loop</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            Vision Loop was founded to help brands grow through creativity,
            strategy, and consistent digital marketing.
          </p>
        </motion.div>

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="absolute h-80 w-80 rounded-full bg-blue-300/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-full border-8 border-white shadow-2xl">
              <Image
                src="/founder.png"
                alt="Founder"
                width={420}
                height={420}
                priority
                className="h-[420px] w-[420px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl font-bold text-black">
              Hi, I'm <span className="text-blue-600">Kushal Raj</span>
            </h3>

            <p className="mt-6 leading-8 text-gray-700">
              I founded Vision Loop to help businesses create meaningful online
              experiences that generate trust, engagement, and growth.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="glass-card p-6">
                <Award className="text-blue-600" size={34} />
                <h4 className="mt-4 text-xl font-bold">Creative Strategy</h4>
                <p className="mt-2 text-gray-600">
                  Brand identity, content planning and storytelling.
                </p>
              </div>

              <div className="glass-card p-6">
                <Briefcase className="text-blue-600" size={34} />
                <h4 className="mt-4 text-xl font-bold">Business Growth</h4>
                <p className="mt-2 text-gray-600">
                  Results-focused social media and marketing.
                </p>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                ["100", "Projects"],
                ["25+", "Clients"],
                ["96%", "Satisfaction"],
              ].map(([n, t]) => (
                <div key={t} className="rounded-2xl bg-blue-50 p-5 text-center">
                  <h3 className="text-3xl font-bold text-blue-600">{n}</h3>
                  <p className="mt-2 text-sm text-gray-700">{t}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="https://www.instagram.com/vision_loop_01?utm_source=qr&igsh=MW5zbmF3aHNjdzIyMw==" className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition">
                <FaInstagram size={22} />
              </a>

              <a href="https://wa.me/9135976609" className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600 transition">
                <FaWhatsapp size={22} />
              </a>
              <a href="mailto:visionloop.028@gmail.com" className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition">
                <MdEmail size={22} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 rounded-[32px] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-10 text-center text-white"
        >
          <h3 className="text-4xl font-bold">
            Let's Build Your Brand Together
          </h3>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-blue-100">
            Ready to grow your brand? Let's create something amazing together.
          </p>
          
        </motion.div>
      </div>
    </section>
  );
}
