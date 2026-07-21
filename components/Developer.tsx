"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Code2,
  Sparkles,
  Globe,
  ArrowRight,
} from "lucide-react";

import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaAndroid,
} from "react-icons/fa";

const skills = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "TypeScript",
  "Framer Motion",
  "Node.js",
  "Firebase",
  "Supabase",
  "Gamer",
  "Coder",
  "Editor",
  "Generative AI",
];

const stats = [
  {
    number: "20+",
    title: "Projects Built",
  },
  {
    number: "100%",
    title: "Responsive",
  },
  {
    number: "99%",
    title: "Performance",
  },
  {
    number: "24/7",
    title: "Support",
  },
];

export default function Developer() {
  return (
    <section
      id="developer"
      className="relative overflow-hidden bg-[#06152E] py-28"
    >
      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />

      </div>

      <div className="container-custom relative">

        {/* Heading */}

        <motion.div
          initial={{ opacity:0,y:40 }}
          whileInView={{ opacity:1,y:0 }}
          viewport={{ once:true }}
          transition={{ duration:.7 }}
          className="text-center"
        >

          <span className="rounded-full border border-blue-500/40 bg-blue-500/10 px-6 py-2 font-semibold text-blue-300">
            Meet The Developer
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Crafted With
            <span className="text-blue-400">
              {" "}Passion
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Behind Vision Loop is a modern web experience built with
            performance, premium UI, and attention to every detail.
          </p>

        </motion.div>

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity:0,x:-50 }}
            whileInView={{ opacity:1,x:0 }}
            viewport={{ once:true }}
            transition={{ duration:.7 }}
          >

            <div className="glass-card rounded-[35px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

              <div className="flex flex-col items-center text-center">

                <Image
                  src="/developer.jpeg"
                  alt="Reet"
                  width={170}
                  height={170}
                  className="rounded-full border-4 border-blue-500 object-cover shadow-2xl"
                />

                <h3 className="mt-6 text-4xl font-black text-white">
                  REET
                </h3>

                <p className="mt-2 text-black-300">
                  Full Stack Developer • UI/UX Designer
                </p>

                <div className="mt-8 flex gap-4">

                  <a
                    href="https://www.instagram.com/rg_ks18?igsh=MWJvYWFsOGh3YWhvZg=="
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition hover:bg-blue-600"
                  >
                    <FaInstagram size={20}/>
                  </a>

                  <a
                    href="https://wa.me/9798406286"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition hover:bg-blue-600"
                  >
                    <FaWhatsapp size={20}/>
                  </a>

                  <a
                    href="https://guns.lol/ks_reet18_"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition hover:bg-blue-600"
                  >
                    <FaAndroid size={20}/>
                  </a>

                </div>

              </div>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity:0,x:50 }}
            whileInView={{ opacity:1,x:0 }}
            viewport={{ once:true }}
            transition={{ duration:.7 }}
          >

            <div className="flex items-center gap-3">

              <Code2 className="text-blue-400"/>

              <h3 className="text-3xl font-bold text-white">
                About Me
              </h3>

            </div>

            <p className="mt-8 text-lg leading-9 text-blue-100">
              Hi, I'm <span className="font-semibold text-white">Reet</span>,
              a passionate Full Stack Developer and UI/UX Designer who loves
              building premium websites with modern technologies.
            </p>

            <p className="mt-6 text-lg leading-9 text-blue-100">
              Vision Loop was designed and developed completely from scratch
              using Next.js, Tailwind CSS, and Framer Motion with a strong
              focus on performance, responsiveness, and creating a memorable
              user experience.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
                              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.4,
                  }}
                  whileHover={{
                    y: -4,
                    scale: 1.05,
                  }}
                  className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-200 backdrop-blur-md transition-all hover:border-blue-400 hover:bg-blue-600 hover:text-white"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* Stats */}

            <div className="mt-14 grid grid-cols-2 gap-5">

              {stats.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                  }}
                  whileHover={{
                    y: -5,
                    scale: 1.03,
                  }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
                >
                  <h4 className="text-4xl font-black text-blue-400">
                    {item.number}
                  </h4>

                  <p className="mt-2 text-blue-100">
                    {item.title}
                  </p>
                </motion.div>
              ))}

            </div>

            {/* CTA */}

            <div className="mt-14 flex flex-wrap gap-5">

              

              <a
                href="https://wa.me/9798406286"
                className="group inline-flex items-center gap-3 rounded-full border border-blue-400/30 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-lg transition-all duration-300 hover:border-blue-400 hover:bg-blue-600"
              >
                <Sparkles size={20} />
                Hire Me
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}