import React, { useState } from 'react'
// import { Assets } from '../assets/assets'
import hanuWp from '../assets/icons/hanu-weapon.png'
import sarasWp from '../assets/icons/saras-weapon.png'
import { motion, useScroll } from "framer-motion";

function Hero3() {
     const [innerAnimationComplete3, setInnerAnimationComplete3] = useState(false);
     const [innerAnimationComplete4, setInnerAnimationComplete4] = useState(false);
     
     const handleTouchStart = () => {
      setInnerAnimationComplete3(true)
      setInnerAnimationComplete4(true); // Mark the touch event
    };
  return (
    <div className="main-container "  onWheel={handleTouchStart}
    onTouchStart={handleTouchStart}>
         <motion.div
       initial={{ x: "0vw", y: "0vh" }} // Start from the right
       whileInView={innerAnimationComplete3?{ x: "100vw", y: "40vh" }:{}} // Move to the center
        viewport={{
          once:true, // Run the animation only once
          amount: 0.5, // Trigger when 50% of the element is in view
        }}
        transition={{
          duration: 2, // Speed of animation
          ease: "easeInOut",
        }}
        onAnimationComplete={() => {
          setTimeout(()=>{
              setInnerAnimationComplete3(false)    
          },3000)
          }}
      >
           <motion.div
       initial={{ x: "20vw", y: "10vh" }} // Start from the right
       whileInView={{ x: "3vw", y: "20vh" }} // Move to the center
        viewport={{
          once: false, // Run the animation only once
          amount: 0.5, // Trigger when 50% of the element is in view
        }}
        transition={{
          duration: 2, // Speed of animation
          ease: "easeInOut",
        }}
      >
  <div className="left2-img">
        <img src={hanuWp} alt="" className="h3-weapon" style={{width:innerAnimationComplete3?'230px':'160px',
          opacity:innerAnimationComplete3?'0.9':'1'
        }}/>
        </div> 
      </motion.div>
      </motion.div>
    <div className="content">
      <h4 className="headText" >Discover a Fresh Genre </h4>
      <h3 className="titleText" >Sci-Soul </h3>
      <p className="headp" >An outward quest to discover the world. An inward journey to discover the self.
</p>
    </div>
    <motion.div
        className="right-img"
        initial={{ x: "0vw", y: "0vh" }} // Start from the right
        whileInView={innerAnimationComplete4?{x: "-50vw", y: "-20vh" }:{}} // Move to the center
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
            console.log(window.scrollY);
              setInnerAnimationComplete4(false)    
          },3000)
          }}
      >
        <motion.div
        className="right-img"
        initial={{ x: "0vw", y: "0vh" }} // Start from the right
        whileInView={{ x: "0vw", y: "-16vh" }} // Move to the center
        viewport={{
          once: false, // Run the animation only once
          amount: 0.5, // Trigger when 50% of the element is in view
        }}
        transition={{
          duration: 2, // Speed of animation
          ease: "easeInOut",
        }}
     
      >
 <div className="right2-img">
        <img src={sarasWp} alt="" className="h31-weapon" style={{width:innerAnimationComplete4?'230px':'160px',
          opacity:innerAnimationComplete4?'0.9':'1'
        }}/>
        </div>  
     
      </motion.div>
      </motion.div>
          
    </div>
  );
}

export default Hero3
