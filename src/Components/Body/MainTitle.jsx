import React from "react";
import { motion } from "framer-motion";

function MainTitle() {
  return (
    <motion.div className="absolute z-20 top-[25%] w-full sm:w-1/2 flex flex-col items-start ml-10">
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 0.9,
        }}
        className="heading font-Poppins text-[2em] sm:text-[2em] md:text-[3 lg:text-[3.5em] 2xl:text-[5em] font-semibold text-orange-500"
      >
        YOUR GAME, <br />
      </motion.div>
      <motion.p
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="text-white heading font-Poppins text-[3em] sm:text-[2em] md:text-[3em] lg:text-[5em] 2xl:text-[6em] font-semibold"
      >
        VICTORY
      </motion.p>
      <motion.p
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 2.1,
        }}
        className="text-white text-[1em] font-Poppins font-semibold"
      >
        Dominate the Game, <br />Embrace the Cold:<br /> Northern Wolf Sports Essentials
      </motion.p>
      <motion.div
        initial={{
          opacity: 0,
          x: -100,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 2.7,
        }}
        className=""
      >
        <button className="mt-6 font-Poppins text-[0.8em] sm:text-[1em] text-white  rounded-full bg-gradient-to-b from-amber-400 to-amber-800 px-4 py-2">
          Shop Now
        </button>
      </motion.div>
    </motion.div>
  );
}

export default MainTitle;
