"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { ArrowUpRight } from "lucide-react";

const portfolioItems = [
  {
    title: "Kanki Dham Video Shoot",
    category: "Social Media",
    video: "https://bxtmynkzbpndldeknpaf.supabase.co/storage/v1/object/public/vision/project1.mp4",
  },
  {
    title: "Scotish Public School",
    category: "Branding",
    video: "https://bxtmynkzbpndldeknpaf.supabase.co/storage/v1/object/public/vision/project2.mp4",
  },
  {
    title: "Rajendra Stadium Editing",
    category: "Video Editing",
    video: "https://bxtmynkzbpndldeknpaf.supabase.co/storage/v1/object/public/vision/project3.mp4",
  },
  {
    title: "Don Bosco School Marketing Campaign",
    category: "Marketing",
    video: "https://bxtmynkzbpndldeknpaf.supabase.co/storage/v1/object/public/vision/project4.mp4",
  },
  {
    title: "Bright Career Global School",
    category: "Editing & Recording",
    video: "https://bxtmynkzbpndldeknpaf.supabase.co/storage/v1/object/public/vision/project5.mp4",
  },
  
];

export default function Portfolio() {
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  return (
    <section
      id="portfolio"
      className="section-padding bg-white"
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
            Our Portfolio
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-black">
            Turning Ideas Into
            <span className="gradient-text">
              {" "}Digital Success
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-700">
            Explore a selection of our recent projects showcasing
            creative branding, engaging social media campaigns,
            professional video editing, and impactful digital marketing.
          </p>

        </motion.div>

        {/* Filter Buttons */}

        <div className="mt-14 flex flex-wrap justify-center gap-4">

          {[
            "All",
            "Branding",
            "Design",
            "Marketing",
            "Video Editing",
            "Social Media",
          ].map((filter) => (

            <button
              key={filter}
              className="rounded-full border border-blue-200 bg-white px-6 py-3 font-semibold text-blue-700 transition-all duration-300 hover:bg-blue-600 hover:text-white"
            >
              {filter}
            </button>

          ))}

        </div>

        {/* Portfolio Grid */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                      {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative h-72 overflow-hidden">

                <div
                    onClick={() => setSelectedVideo(item.video)}
                    className="relative h-72 cursor-pointer overflow-hidden"
                    >
                    <video
                        src={item.video}
                        muted
                        autoPlay
                        loop
                        playsInline
                        className="h-full w-full object-cover"
                    />
                    </div>

                </div>

              <div className="p-7">

                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                  {item.category}
                </span>

                <h3 className="mt-5 text-2xl font-bold text-black">
                  {item.title}
                </h3>

                <button className="mt-6 flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-3">
                  Explore Case Study
                  <ArrowUpRight size={20} />
                </button>

              </div>

            </motion.div>
          ))}

        {selectedVideo && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6">
                <button
                onClick={() => setSelectedVideo(null)}
                className="absolute right-6 top-6 text-4xl text-white"
                >
                ×
                </button>

                <video
                src={selectedVideo}
                controls
                autoPlay
                className="max-h-[90vh] max-w-[90vw] rounded-2xl"
                />
            </div>
            )}


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
            Ready to Make Your Brand Stand Out?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Every successful brand starts with a powerful strategy. Let Vision
            Loop create engaging content, grow your audience, and build a
            memorable online presence that delivers measurable results.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            
          <a
              href="#contact"
              className="primary-btn"
            >
            <button className="rounded-full bg-white px-8 py-4 font-semibold text-blue-700 transition duration-300 hover:scale-105">
              Start Your Project
            </button>

          </a>


          <a
              href="#portfolio"
              className="primary-btn"
            >
            <button className="rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-blue-700">
              View All Work
            </button>
          </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
