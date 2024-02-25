import React from "react";
import "./Body.scss";
import { motion } from "framer-motion";
import MainTitle from "./MainTitle";
import { useMediaQuery } from "react-responsive";
import Review from "../Review/Review";
import BasketBall from "./BasketBall";

function BackGround1() {
  return (
    <div className="background1">
      <p className="absolute hidden top-[30%] left-[60%] z-30 text-[3em] text-rose-500 font-Satisfy">
        Northern Wolf Sports
      </p>
      <div className="absolute top-[55%] sm:top-[50%] md:top-[30%] right-[20%] sm:right-[5%] md:right-[15%] z-30 text-[3em] review">
        <Review />
      </div>
      <BasketBall />
      <div className="flex flex-col">
        <MainTitle />
      </div>
      <motion.div
        initial={{
          width: 0,
        }}
        animate={{
          width: "100vw",
        }}
        transition={{
          duration: 1.1,
          ease: "easeInOut",
          delay: 0.2,
        }}
        className="bg-gradient-to-b from-amber-200 to-amber-500 h-screen z-0 absolute left-0 top-0"
      ></motion.div>

      <motion.div
        initial={{
          width: 0,
        }}
        animate={{
          width: "90vw",
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 0.7,
        }}
        className="bg-gray-800 h-[12vh] z-10 absolute left-0 bottom-0  rounded-tr-lg"
      ></motion.div>
      <motion.div
        initial={{
          x: "-100vw",
          rotateZ: 20,
        }}
        animate={{
          x: 0,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 0.9,
        }}
        className="bg-gray-800  h-[170vh] w-[65vw] z-10 absolute -left-[26vw] sm:-left-[10vw] -top-[50vh]"
      ></motion.div>
      <motion.div
        initial={{
          x: "-100vw",
          rotateZ: 20,
        }}
        animate={{
          x: 0,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          delay: 0.9,
        }}
        className="bg-gradient-to-r from-rose-400 to-rose-700  h-[170vh] w-[60vw] z-10 absolute -left-[26vw] sm:-left-[10vw] -top-[50vh] "
      ></motion.div>
    </div>
  );
}

export default BackGround1;
