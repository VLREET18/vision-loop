"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const icons = [
  { Icon: FaInstagram, top: "15%", left: "70%" },
  { Icon: FaFacebookF, top: "65%", left: "85%" },
  { Icon: FaLinkedinIn, top: "20%", left: "90%" },
  { Icon: FaYoutube, top: "75%", left: "65%" },
];

export default function FloatingIcons() {
  return (
    <>
      {icons.map(({ Icon, top, left }, index) => (
        <motion.div
          key={index}
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
          }}
          className="absolute rounded-2xl bg-white p-4 shadow-xl"
          style={{ top, left }}
        >
          <Icon className="text-3xl text-blue-600" />
        </motion.div>
      ))}
    </>
  );
}