import React, { useRef, useState } from "react";
import weaponhero1 from "../assets/icons/krishi-weapon.png";
import { motion, useScroll, useTransform } from "framer-motion";
function Hero1() {
  const ref = useRef(null);
  // Use Framer Motion's scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"], // Start animation when the element starts entering the viewport
  });

  // Map scroll progress to motion values (reversed for forward movement)
  const x = useTransform(scrollYProgress, [0, 1], ["-50vw", "50vw"]); // Move from left to right
  const y = useTransform(scrollYProgress, [0, 1], ["-50vh", "50vh"]); // Move from top to bottom

  return (
    <>
    <div className="main-container" ref={ref} >
      <div className="content">
        <h4 className="headText">Welcome to the Realm! Where</h4>
        <h3 className="titleText">THE Divine Meets the Ordinary</h3>
        <p className="headp">India’s first original global superhero series.</p>
      </div>

      {/* Motion div tied to scroll */}
      <motion.div
        className="right-img"
        style={{
          x, // Dynamic horizontal movement based on scroll
          y, // Dynamic vertical movement based on scroll
        }}
      >
         <motion.div
          className="right-img"
          initial={{ x: "10vw", y: "10vh" }} // Initial state for page load animation
          animate={{ x: "-15vw", y: "-30vh" }} // Trigger on page load
          transition={{
            duration: 2, // Duration of the animation
            ease: "easeInOut",
          }}
       
        >
          <img src={weaponhero1} alt="Weapon Hero" className="weapon" />
        </motion.div>
      </motion.div>
    </div>
    </>
  );
}

export default Hero1;
