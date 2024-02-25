import React from "react";
import { motion } from "framer-motion";

const boxVariations = {
  initial: {
    y: 100,
  },
  animate: {
    y: 0,
  },
};



function FooterBox(props) {
  return (
    <motion.div
      variants={boxVariations}
      className="uppercase  font-Poppins font-normal text-center rounded-t-md flex flex-col justify-center items-center  h-full p-0"
    >
      <div className="heading lg:text-[2em] 2xl:text-[3em] text-white" >{props.heading}</div>
      <div className="sub-heading lg:text-[0.8em] 2xl:text-[1em] text-white">{props.subHeading}</div>
    </motion.div>
  );
}

export default FooterBox;
