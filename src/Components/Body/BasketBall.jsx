import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

function BasketBall() {
  const isSmallScreen = useMediaQuery({ maxWidth: 640 });
  const isMediumScreen = useMediaQuery({ minWidth: 641, maxWidth: 768 });
  const isLargeScreen = useMediaQuery({ minWidth: 769, maxWidth: 899 });
  const isLargeScreen2 = useMediaQuery({ minWidth: 900, maxWidth: 1024 });
  const isExtraLargeScreen = useMediaQuery({ minWidth: 1025, maxWidth: 1280 });
  const isDoubleExtraLargeScreen = useMediaQuery({ minWidth: 1281, maxWidth: 1380 });
  const isDoubleExtraLargeScreen2 = useMediaQuery({ minWidth: 1381, maxWidth: 1650 });
  const isDoubleExtraLargeScreen3 = useMediaQuery({ minWidth: 1381 });

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
      animateProperties = { y: 500, ...imageSize }; // mini
      break;
    case isLargeScreen:
      imageSize = { width: "300px", height: "300px" };
      initialProperties = { x: 200, y: 0, ...imageSize };
      animateProperties = { y: 600, ...imageSize }; // air
      break;
    case isLargeScreen2:
      imageSize = { width: "300px", height: "300px" };
      initialProperties = { x: 200, y: 0, ...imageSize };
      animateProperties = { y: 850, ...imageSize }; // pro
      break;
    case isExtraLargeScreen:
      imageSize = { width: "300px", height: "300px" };
      initialProperties = { x: 100, y: 0, ...imageSize };
      animateProperties = { y: 320, ...imageSize };
      break;
    case isDoubleExtraLargeScreen:
      imageSize = { width: "300px", height: "300px" };
      initialProperties = { x: 0, y: 0, ...imageSize };
      animateProperties = { y: 120, ...imageSize }; // laptop screen
      break;
    case isDoubleExtraLargeScreen2:
      imageSize = { width: "400px", height: "400px" };
      initialProperties = { x: 0, y: 0, ...imageSize };
      animateProperties = { y: 250, ...imageSize }; // main screen
      break;
    case isDoubleExtraLargeScreen3:
      imageSize = { width: "400px", height: "400px" };
      initialProperties = { x: 0, y: 0, ...imageSize };
      animateProperties = { y: 300, ...imageSize };
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
