import React,{useContext, useState } from "react";
import { useSpring, animated, config} from "@react-spring/web";
// import { Assets } from "./assets/assets";
import stLoader from '../assets/videos/loader.mp4'
import { DataContext } from "../context/DataContext";

function StartLoader() {
  const [isScrolling, setIsScrolling] = useState(false);
  const {showHero,setShowHero,activeIdRef}=useContext(DataContext);

  const handleZoomComplete = () => {
    setShowHero(true); // Switch to HeroComp when zoom completes
    activeIdRef.current=true;
  };
  // Spring animation for zoom
   const [styles, api] = useSpring(() => ({
    scale: 1,
    config: config.slow,
    // config:{ duration: 2000 }

  }));

  const handleScroll = (e) => {
    if (isScrolling) return;

    setIsScrolling(true); // Prevent further scroll events

  //   // Trigger zoom animation
    api.start({
      scale: 5, // Zoom to 5x
      onRest: handleZoomComplete, // Callback after animation completes
    });
  };
  const handleScrollOrTouch = () => {
    if (isScrolling) return;

    setIsScrolling(true); // Prevent further events

    // Trigger zoom animation
    api.start({
      scale: 5, // Zoom to 5x
      onRest: handleZoomComplete, // Callback after animation completes
    });
  };
  
  return (
    <div
      className="loader-container"
      onWheel={handleScroll} // Handle scroll event
      onTouchMove={handleScrollOrTouch} // For mobile
    >
      <animated.video
        className="videoloader"
        autoPlay
        loop
        muted
        style={{
          transform: styles.scale.to((scale) => `scale(${scale})`),
        }}
      >
        <source src={stLoader} type="video/mp4" />
      </animated.video>
    </div>
  );
}

export default StartLoader;