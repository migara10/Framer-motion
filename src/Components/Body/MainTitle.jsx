import React from "react";
import { motion } from "framer-motion";

function MainTitle() {
  return (
    <motion.div
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
      className="absolute z-20 top-[25%] left-[5%] sm:top-[25%] sm:left-[15%]"
    >
      <div className="heading font-Poppins text-[1em] sm:text-[2em] md:text-[3em] lg:text-[3.5em] 2xl:text-[5em] font-semibold text-orange-500">
        YOUR GAME, <br />
      </div>
      <p className="text-white heading font-Poppins text-[1em] sm:text-[2em] md:text-[3em] lg:text-[5em] 2xl:text-[6em] font-semibold">
        VICTORY
      </p>
      <p className="text-gray-400 text-lg font-Poppins font-semibold pl-0 sm:pl-1 md:pl-2">
        Dominate the Game, Embrace the <br />
        Cold: Northern Wolf Sports Essentials
      </p>
      <div>
        <button className="mt-6 font-Poppins font-semibold text-white border border-amber-400 rounded-full bg-amber-400 px-4 py-2">
          Shop Now
        </button>
      </div>
    </motion.div>
  );
}

export default MainTitle;
