import React, { useState } from "react";
import "./NavBar.scss";
import NavItems from "./NavItems";
import { AnimatePresence, motion } from "framer-motion";

function NavBar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [iconColor, setIconColor] = useState("currentColor");

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
    setIconColor(mobileMenu ? "currentColor" : "white");
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
            className="menu-icon flex justify-end relative z-50"
            onClick={toggleMobileMenu}
          >
            <svg
              dataSlot="icon"
              fill="none"
              strokeWidth={1.5}
              stroke={iconColor}
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
                className="flex flex-col absolute right-0 top-0 w-full h-screen mobile-menu-bg items-center pt-40"
              >
                <div className="flex items-center justify-between w-[120px]">
                  <NavItems css={false} data="Home" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="white"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </div>
                <div className="flex items-center justify-between w-[120px]">
                  <NavItems css={false} data="Shop" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="white"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                </div>
                <div className="flex items-center justify-between w-[120px]">
                  <NavItems css={false} data="About" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="white"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                    />
                  </svg>
                </div>
                <div className="flex items-center justify-between w-[120px]">
                  <NavItems css={true} data="Contact" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="white"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
