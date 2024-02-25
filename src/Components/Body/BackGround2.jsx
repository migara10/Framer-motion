import React from "react";
import "./Body.scss";
import { motion } from "framer-motion";

function BackGround2() {
  return (
    
    <div className="flex absolute z-20 top-[70%] sm:top-[60%] w-full justify-center">
      <motion.img
        initial={{
          x: -30,
        }}
        animate={{
          x: 20,
        }}
        transition={{
          delay: 0.5,
          duration: 10,
          type: "linear",
          stiffness: 600,
          damping: 0,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        src="3.png"
        className="w-36 h-36 md:w-52 md:h-52"
        alt=""
      />
      <motion.img
        initial={{
          y: 40,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          delay: 0.6,
          duration: 10,
          type: "linear",
          stiffness: 600,
          damping: 0,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        src="1.png"
        className="w-36 h-36 md:w-52 md:h-52"
        alt=""
      />
      <motion.img
        initial={{
          y: 40,
          x: 40,
        }}
        animate={{
          y: 0,
          x: 0,
        }}
        transition={{
          delay: 0.3,
          duration: 10,
          type: "linear",
          stiffness: 600,
          damping: 0,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        src="5.png"
        className="w-36 h-36 md:w-52 md:h-52 hidden sm:flex"
        alt=""
      />
    </div>
  );
}

export default BackGround2;