"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  CheckCircle,
  TrendingUp,
  Users,
  BarChart3,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-36 pb-24"
    >
      {/* Background Blur */}
      <div className="absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-blue-300/20 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="container-custom relative z-10 grid items-center gap-16 lg:grid-cols-2">

        

        {/* Left Side */}

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
        >

          <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            
            🚀 Social Media Growth Partner
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-black md:text-7xl">
            

            We Turn
      
            <span className="gradient-text">
              {" "}Content
            </span>

            <br />

            Into

            <span className="gradient-text">
              {" "}Business Growth.
            </span>

          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-700">

            Vision Loop helps businesses grow through strategic
            social media management, branding, creative content,
            video production and performance marketing.

          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href="#contact"
              className="primary-btn"
            >
              <button className="btn-secondary flex items-center gap-2">

                <PlayCircle size={20} />
                
                Book Free Consultation

              </button>
              
            </a>

          <a
              href="#portfolio"
              className="primary-btn"
            >
            <button className="btn-secondary flex items-center gap-2">

              <PlayCircle size={20} />

              View Portfolio

            </button>
          </a>

          </div>

          {/* Features */}

          <div className="mt-10 space-y-4">

            <div className="flex items-center gap-3">

              <CheckCircle className="text-blue-600" />

              <span className="text-gray-700">
                Creative Content Strategy
              </span>

            </div>

            <div className="flex items-center gap-3">

              <CheckCircle className="text-blue-600" />

              <span className="text-gray-700">
                Professional Social Media Management
              </span>

            </div>

            <div className="flex items-center gap-3">

              <CheckCircle className="text-blue-600" />

              <span className="text-gray-700">
                Monthly Analytics Reports
              </span>

            </div>

          </div>

        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >

          <div className="glass-card p-8">

            <div className="flex items-center justify-between">

              <h3 className="text-2xl font-bold text-black">
                Growth Dashboard
              </h3>

              <TrendingUp className="text-blue-600" />

            </div>

            <div className="mt-8 space-y-6">

              {/* Instagram */}

              <div>

                <div className="mb-2 flex justify-between">

                  <span className="font-medium text-black">
                    Instagram Growth
                  </span>

                  <span className="font-bold text-blue-600">
                    88%
                  </span>

                </div>

                <div className="h-3 rounded-full bg-gray-200">

                  <div className="h-3 w-[88%] rounded-full bg-blue-600"></div>

                </div>

              </div>

              {/* Reach */}

              <div>

                <div className="mb-2 flex justify-between">

                  <span className="font-medium text-black">
                    Reach
                  </span>

                  <span className="font-bold text-blue-600">
                    82%
                  </span>

                </div>

                <div className="h-3 rounded-full bg-gray-200">

                  <div className="h-3 w-[82%] rounded-full bg-blue-500"></div>

                </div>

              </div>

              {/* Engagement */}

              <div>

                <div className="mb-2 flex justify-between">

                  <span className="font-medium text-black">
                    Engagement
                  </span>

                  <span className="font-bold text-cyan-600">
                    94%
                  </span>

                </div>

                <div className="h-3 rounded-full bg-gray-200">

                  <div className="h-3 w-[94%] rounded-full bg-cyan-500"></div>

                </div>

              </div>
                          </div>

            {/* Stats */}

            <div className="mt-10 grid grid-cols-2 gap-4">

              <div className="rounded-2xl bg-blue-50 p-5 text-center">
                <BarChart3 className="mx-auto mb-3 text-blue-600" size={28} />
                <h2 className="text-3xl font-extrabold text-blue-600">
                  100
                </h2>
                <p className="text-gray-700">
                  Projects
                </p>
              </div>

              <div className="rounded-2xl bg-blue-50 p-5 text-center">
                <Users className="mx-auto mb-3 text-blue-600" size={28} />
                <h2 className="text-3xl font-extrabold text-blue-600">
                  25+
                </h2>
                <p className="text-gray-700">
                  Clients
                </p>
              </div>

              <div className="rounded-2xl bg-blue-50 p-5 text-center">
                <TrendingUp className="mx-auto mb-3 text-blue-600" size={28} />
                <h2 className="text-3xl font-extrabold text-blue-600">
                  50K+
                </h2>
                <p className="text-gray-700">
                  Reach
                </p>
              </div>

              <div className="rounded-2xl bg-blue-50 p-5 text-center">
                <CheckCircle className="mx-auto mb-3 text-blue-600" size={28} />
                <h2 className="text-3xl font-extrabold text-blue-600">
                  96%
                </h2>
                <p className="text-gray-700">
                  Satisfaction
                </p>
              </div>

            </div>

          </div>

          {/* Floating Card 1 */}

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="absolute -top-8 -left-8 hidden rounded-2xl bg-white p-5 shadow-xl lg:block"
          >
            <p className="text-sm text-gray-500">
              Monthly Growth
            </p>

            <h3 className="mt-1 text-3xl font-bold text-blue-600">
              +38%
            </h3>
          </motion.div>

          {/* Floating Card 2 */}

          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute -bottom-8 -right-8 hidden rounded-2xl bg-blue-600 p-5 text-white shadow-2xl lg:block"
          >
            <p className="text-sm text-blue-100">
              Active Campaigns
            </p>

            <h3 className="mt-1 text-3xl font-bold">
              20+
            </h3>
          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}