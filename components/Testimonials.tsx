"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Aarav Sharma",
    company: "",
    
    review:
      "Vision Loop completely transformed our Instagram presence. Our engagement increased significantly, and the content quality exceeded our expectations.",
  },
  {
    name: "Aashish thakuri",
    company: "",
    
    review:
      "Professional, creative, and reliable. Their reels and branding helped us attract more customers within weeks.",
  },
  {
    name: "Rahul Verma",
    company: "",
    
    review:
      "Working with Vision Loop has been one of the best investments for our digital marketing. Highly recommended!",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-padding bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="container-custom">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center"
        >

          <span className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-700">
            Client Testimonials
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-black">
            What Our
            <span className="gradient-text">
              {" "}Clients Say
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-700">
            We're proud to help brands grow through creativity, strategy, and
            consistent execution. Here's what some of our clients have to say.
          </p>

        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
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
              className="glass-card rounded-3xl p-8"
            >
              {/* Rating */}

              <div className="flex gap-1">

                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              {/* Review */}

              <p className="mt-6 leading-8 text-gray-700">
                "{testimonial.review}"
              </p>

              {/* Client */}

              <div className="mt-8 flex items-center gap-4">

                

                <div>

                  <h3 className="text-lg font-bold text-black">
                    {testimonial.name}
                  </h3>

                  <p className="text-blue-600">
                    {testimonial.company}
                  </p>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 rounded-[36px] bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 p-12 text-center text-white shadow-2xl"
        >

          <h2 className="text-4xl font-extrabold">
            Ready To Become Our Next Success Story?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Join businesses that trust Vision Loop for creative branding,
            engaging content, and measurable digital growth. Let's build
            something extraordinary together.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <a
              href="#contact"
              className="primary-btn"
            >

            <button className="rounded-full bg-white px-8 py-4 font-semibold text-blue-700 transition duration-300 hover:scale-105">
              Book a Free Consultation
            </button>

          </a>

          <a
              href="#portfolio"
              className="primary-btn"
            >

            <button className="rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-blue-700">
              View Our Portfolio
            </button>
          </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
