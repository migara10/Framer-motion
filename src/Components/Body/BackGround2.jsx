import React from "react";
import "./Body.scss";
import { motion } from "framer-motion";

function BackGround2() {
  return (
    <div className="absolute z-30 top-[65%] -left-[5%] sm:top-[65%] sm:left-[30%] flex">
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
        className="w-36 h-36"
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
        className="w-36 h-36"
        alt=""
      />
      <motion.img  initial={{
          y: 40,
          x:40
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
        }} src="5.png" className="w-44 h-44" alt="" />
    </div>
  );
}

export default BackGround2;
