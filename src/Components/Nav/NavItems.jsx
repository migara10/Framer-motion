import React from "react";
import { motion } from "framer-motion";

function NavItems(props) {
  const dynamicClassName = props.css
    ? "sm:bg-gradient-to-t from-rose-500 to-rose-300 rounded-[5px] text-white"
    : "";

  return (
    <div>
      <motion.div
        whileTap={{
          rotate: 10,
        }}
        whileHover={{
          rotate: 10,
        }}
        className={`py-1 px-2 text-white text-[1.2em] font-Poppins ${dynamicClassName} flex justify-center`}
      >
        {props.data}
      </motion.div>
    </div>
  );
}

export default NavItems;
