import React from "react";
import { motion } from "framer-motion";
import FooterBox from "./FooterBox";

const footerVariations = {
  animate: {
    transition: {
      delayChildren: 1.5,
      staggerChildren: 0.4,
    },
  },
};

function Footer() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={footerVariations}
      className="flex justify-center gap-4 sm:grid sm:grid-cols-3  absolute bottom-0 left-1/2  -translate-x-1/2 w-full  mx-auto z-20 h-[11vh]"
    >
      <FooterBox heading={"110"} subHeading={"Items"}></FooterBox>
      <FooterBox heading={"25"} subHeading={"Countries"}></FooterBox>
      <FooterBox heading={"430"} subHeading={"Shops"}></FooterBox>
    </motion.div>
  );
}

export default Footer;
