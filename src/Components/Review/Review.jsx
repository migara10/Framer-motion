import React from "react";
import Star from "./Star";
import { motion } from "framer-motion";

const reviewVariations = {
  animate: {
    transition: {
      delayChildren: 1.5,
      staggerChildren: 0.4,
    },
  },
};

function Review() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={reviewVariations}
      className="flex flex-col"
    >
      <div className="flex">
        <Star color={"#dc2626"} />
        <Star color={"#dc2626"} />
        <Star color={"#dc2626"} />
        <Star color={"#dc2626"} />
        <Star color={"#f87171"} />
      </div>
      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 0.9,
        }}
        className="text-lg text-white font-Poppins font-semibold"
      >
        1000+ Users feedback
      </motion.p>
    </motion.div>
  );
}

export default Review;
/* #fca5a5
400
#f87171 */
