import React, { useState } from "react";
import "./NavBar.scss";
import NavItems from "./NavItems";
import { AnimatePresence, motion } from "framer-motion";

function NavBar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div className="nav-bar sm:px-4">
      <div className="content flex justify-between items-center max-w-[1024px] min-w-[200px] mx-auto pt-8 z-40 relative text-black">
        <div className="logo px-10 sm:px-0">
          <motion.img
            initial={{
              width: "200px",
            }}
            animate={{
              width: "120px",
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              delay: 0.7,
            }}
            src="logo.png"
            alt=""
            className="w-[120px] h-[100%]"
          />
        </div>

        {/* desktop menu */}
        <div className="menu justify-between w-[300px] hidden sm:flex">
          <NavItems css={false} data="Home" />
          <NavItems css={false} data="Shop" />
          <NavItems css={false} data="About" />
          <NavItems css={true} data="Contact" />
        </div>

        {/* mobile menu */}
        <div className="menu-mobile flex flex-col w-[300px] sm:hidden px-10">
          <div
            className="menu-icon flex justify-end relative"
            onClick={toggleMobileMenu}
          >
            <svg
              dataSlot="icon"
              fill="none"
              strokeWidth={1.5}
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </div>
          <AnimatePresence>
            {mobileMenu && (
              <motion.div
                initial={{ x: 300 }}
                animate={{ x: 0 }}
                exit={{ x: 300 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                className="flex flex-col absolute right-0 top-20 w-2/3 h-screen mobile-menu-bg"
              >
                <NavItems css={false} data="Home" />
                <NavItems css={false} data="Shop" />
                <NavItems css={false} data="About" />
                <NavItems css={true} data="Contact" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
