import React, { useRef, useState } from 'react'
// import { Assets } from '../assets/assets'
import ajWp from '../assets/icons/aj-weapon.png'
import deviWp from '../assets/icons/devi-weapon.png'
import { motion, useScroll, useTransform } from "framer-motion";

function Hero2() {
   const [innerAnimationComplete1, setInnerAnimationComplete1] = useState(false);
   const [innerAnimationComplete2, setInnerAnimationComplete2] = useState(false);

   const ref = useRef(null);
   // Use Framer Motion's scroll progress
   const { scrollYProgress } = useScroll({
     target: ref,
     offset: ["start start", "end end"], // Start animation when the element starts entering the viewport
   });
 
   // Map scroll progress to motion values (reversed for forward movement)
   const x = useTransform(scrollYProgress, [0, 1], ["-50vw", "50vw"]); // Move from left to right
   const y = useTransform(scrollYProgress, [0, 1], ["-50vh", "50vh"]); // Move from top to bottom
 
   const handleTouchStart = () => {
    setInnerAnimationComplete1(true)
    setInnerAnimationComplete2(true); // Mark the touch event
  };
  return (
    <div className="main-container" ref={ref} onWheel={handleTouchStart}
    onTouchStart={handleTouchStart}>
    <div className="content">
      <h4 className="headText" >Brace Yourself for</h4>
      <h3 className="titleText">The Battle of Perspectives! </h3>
      <p className="headp">What’s right? What’s wrong? Who’s to decide? A soulful tale that explores bonds, ideologies, purposes and ambitions.</p>
    </div>
    <motion.div
        className="right-img"
        initial={{ x: "0vw", y: "0vh" }} // Start from the right
        whileInView={innerAnimationComplete1 ? { x: "100vw", y: "-10vh" }:{}} // Move to the center
        viewport={{
          once: false, // Run the animation only once
          amount: 0.5, // Trigger when 50% of the element is in view
        }}
        transition={{
          duration: 2, // Speed of animation
          ease: "easeInOut",
        }}
        onAnimationComplete={() => {
          setTimeout(()=>{
            console.log(window.scrollY);
              setInnerAnimationComplete1(false)    
          },3000)
          }}
          style={{
            x, // Dynamic horizontal movement based on scroll
            y, // Dynamic vertical movement based on scroll
          }}
      >
    <motion.div
        className="right-img"
        initial={{ x: "0vw", y: "0vh" }} // Start from the right
        whileInView={{ x: "-20vw", y: "-34vh" }} // Move to the center
        viewport={{
          once: false, // Run the animation only once
          amount: 0.5, // Trigger when 50% of the element is in view
        }}
        transition={{
          duration: 2, // Speed of animation
          ease: "easeInOut",
        }}
        // onAnimationComplete={() => {
        //   setTimeout(()=>{
        //     console.log(window.scrollY);
        //       setInnerAnimationComplete1(true)    
        //   },3000)
        //   }}
      >
<div className="right1-img" style={{height:innerAnimationComplete2?'450px':'270px'}}>
        <img src={deviWp} alt="" className="h21-weapon" 
        style={{
          width:innerAnimationComplete1?'230px':'169px'
        }}/>
        </div> 
      </motion.div>
      </motion.div>
      <motion.div
        initial={{ x: "0vw", y: "0vh" }} // Start from the left
        whileInView={innerAnimationComplete2?{ x: "0vw", y: "90vh" }:{}} // Move to the center
        viewport={{
          once: true, // Run the animation only once
          amount: 0.5, // Trigger when 50% of the element is in view
        }}
        transition={{
          duration: 2, // Speed of animation
          ease: "easeInOut",
        }}
        onAnimationComplete={() => {
          setTimeout(()=>{
              setInnerAnimationComplete2(false)    
          },3000)
          }}
      >
      <motion.div
        initial={{ x: "20vw", y: "0vh" }} // Start from the left
        whileInView={{ x: "-3vw", y: "0vh" }} // Move to the center
        viewport={{
          once: false, // Run the animation only once
          amount: 0.5, // Trigger when 50% of the element is in view
        }}
        transition={{
          duration: 2, // Speed of animation
          ease: "easeInOut",
        }}
        // onAnimationComplete={() => {
        //   setTimeout(()=>{
        //     console.log(window.scrollY);
        //       setInnerAnimationComplete2(true)    
        //   },3000)
        //   }}
      >
 <div className="left1-img" >
        <img src={ajWp} alt="" className="h2-weapon" style={{width:innerAnimationComplete2?'500px':'124px',
          // opacity:innerAnimationComplete2?'0.6':'1'
        }}/>
        </div>  
      </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero2
