"use client";

import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Sparkles,
  TrendingUp,
  Users,
  ShieldCheck,
} from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Client Partnership",
    description:
      "We work as an extension of your team, building long-term relationships based on trust and transparency.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description:
      "We stay ahead of trends, using fresh ideas and modern strategies to keep your brand relevant.",
  },
  {
    icon: TrendingUp,
    title: "Growth Mindset",
    description:
      "Every decision we make is focused on increasing your reach, engagement, and business growth.",
  },
  {
    icon: ShieldCheck,
    title: "Consistency",
    description:
      "Success comes from consistency. We deliver quality content and maintain a strong online presence every month.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-b from-white via-blue-50 to-white"
    >
      <div className="container-custom">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            About Vision Loop
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-black md:text-5xl">
            We Don't Just Manage Social Media.
            <br />
            <span className="gradient-text">
              We Build Brands That Last.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-700">
            Vision Loop is a creative social media management company
            dedicated to helping businesses grow through strategic
            content, branding, digital marketing and meaningful audience
            engagement. We combine creativity with data-driven strategies
            to deliver measurable results.
          </p>
        </motion.div>

        {/* Mission & Vision */}

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="glass-card p-8"
          >

            <Target
              className="text-blue-600"
              size={42}
            />

            <h3 className="mt-6 text-3xl font-bold text-black">
              Our Mission
            </h3>

            <p className="mt-5 text-gray-700 leading-8">
              Our mission is to empower businesses through
              innovative social media strategies, compelling
              content, and creative branding that strengthen
              customer relationships and drive sustainable
              business growth.
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="glass-card p-8"
          >

            <Eye
              className="text-blue-600"
              size={42}
            />

            <h3 className="mt-6 text-3xl font-bold text-black">
              Our Vision
            </h3>

            <p className="mt-5 text-gray-700 leading-8">
              Our vision is to become one of the most trusted
              digital growth partners, helping businesses build
              memorable brands and achieve lasting success
              through creativity, innovation and consistency.
            </p>

          </motion.div>

        </div>

        {/* Statistics */}

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {[
            ["100", "Projects Completed"],
            ["25+", "Happy Clients"],
            ["50K - 100K", "Audience Reach"],
            ["96%", "Client Satisfaction"],
          ].map(([number, title], index) => (

            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .6,
                delay: index * .1,
              }}
              className="glass-card p-8 text-center"
            >

              <h3 className="text-5xl font-extrabold text-blue-600">
                {number}
              </h3>

              <p className="mt-3 text-gray-700">
                {title}
              </p>

            </motion.div>

          ))}

        </div>

        {/* Core Values */}

        <div className="mt-24">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Why Choose Us
            </span>

            <h2 className="mt-6 text-4xl font-bold text-black">
              Our Core Values
            </h2>

          </motion.div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
                      {values.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
              }}
              className="glass-card p-8 transition-all duration-300"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                <item.icon className="text-blue-600" size={34} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-black">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-gray-700">
                {item.description}
              </p>
            </motion.div>
          ))}

          </div>
        </div>

        {/* CTA Banner */}

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 overflow-hidden rounded-[36px] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-12 text-center text-white shadow-2xl"
        >
          <ShieldCheck
            className="mx-auto"
            size={54}
          />

          <h2 className="mt-6 text-4xl font-extrabold">
            Let's Build Something Amazing Together
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            Whether you're a startup, local business, creator, or growing
            company, Vision Loop is here to help you build a powerful online
            presence with creativity, consistency, and measurable results.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

           <a
              href="#contact"
              className="primary-btn"
            >
            <button className="rounded-full bg-white px-8 py-4 font-semibold text-blue-700 transition duration-300 hover:scale-105">
              Get Started
            </button>
            </a>


          <a
              href="#portfolio"
              className="primary-btn"
            >
            <button className="rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-blue-700">
              View Our Services
            </button>
          </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}