import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

function BasketBall() {
  const isSmallScreen = useMediaQuery({ maxWidth: 640 });
  const isMediumScreen = useMediaQuery({ minWidth: 641, maxWidth: 768 });
  const isLargeScreen = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const isExtraLargeScreen = useMediaQuery({ minWidth: 1025, maxWidth: 1280 });
  const isDoubleExtraLargeScreen = useMediaQuery({ minWidth: 1281, maxWidth: 1536 });

  let initialProperties, animateProperties, imageSize;

  switch (true) {
    case isSmallScreen:
      imageSize = { width: "200px", height: "200px" };
      initialProperties = { x: 200, y: 0, ...imageSize };
      animateProperties = { y: 400, ...imageSize };
      break;
    case isMediumScreen:
      imageSize = { width: "250px", height: "250px" };
      initialProperties = { x: 200, y: 0, ...imageSize };
      animateProperties = { y: 370, ...imageSize };
      break;
    case isLargeScreen:
      imageSize = { width: "300px", height: "300px" };
      initialProperties = { x: 200, y: 0, ...imageSize };
      animateProperties = { y: 680, ...imageSize };
      break;
    case isExtraLargeScreen:
      imageSize = { width: "300px", height: "300px" };
      initialProperties = { x: 200, y: 0, ...imageSize };
      animateProperties = { y: 320, ...imageSize };
      break;
    case isDoubleExtraLargeScreen:
      imageSize = { width: "400px", height: "400px" };
      initialProperties = { x: 0, y: 0, ...imageSize };
      animateProperties = { y: 250, ...imageSize };
      break;
    default:
      imageSize = { width: "300px", height: "300px" };
      initialProperties = { x: 0, y: 0, ...imageSize };
      animateProperties = { y: 350, ...imageSize };
  }

  return (
    <div>
      <motion.img
        initial={{
          y: -600,
          x: initialProperties.x,
          y: initialProperties.y,
          width: initialProperties.width,
          height: initialProperties.height,
        }}
        animate={{
          y: animateProperties.y,
        }}
        transition={{
          delay: 0.5,
          duration: 5,
          type: "spring",
          stiffness: 600,
          damping: 5,
        }}
        src="basket2.png"
        alt=""
        className="foot-ball relative z-20"
      />
    </div>
  );
}

export default BasketBall;
