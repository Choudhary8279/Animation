import React, { useContext, useEffect, useState } from "react";
// import { useSpring, animated } from "@react-spring/web";
// import { useInView } from "react-intersection-observer";
import Header from "./Header";
import Hero1 from "./Hero1";
import Hero2 from "./Hero2";
import Hero3 from "./Hero3";
// import { Assets } from "../assets/assets";
import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
import mobBg from '../assets/icons/bg-mob.png'
import ComicBook from "./ComicBook";
import StartLoader from "./StartLoader";
import { div } from "framer-motion/client";
import { DataContext } from "../context/DataContext";

function HeroComp() {
 const {setShowHero,showHero,activeIdRef}=useContext(DataContext)
console.log("show hero in hero",showHero)


  return (
   <div>
        {showHero && <Header />}
     <Fullpage 
      >
        <FullPageSections>
        {!showHero ? (
            <FullpageSection
              style={{
                height: "100vh",
                position: "relative",
                overflow: "hidden",
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <StartLoader/>
            </FullpageSection>
          ):(
            <div>
          <FullpageSection style={{
            // backgroundColor: 'lime',
            height: '100vh',
            position:'relative',
            overflow: 'hidden',
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <Hero1 />
          </FullpageSection>
          <FullpageSection style={{
            // backgroundColor: 'coral',
            height: '100vh',
            position:'relative',
            overflow: 'hidden',
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <Hero2 />
          </FullpageSection>
          <FullpageSection style={{
            // backgroundColor: 'coral',
            height: '100vh',
            position:'relative',
            overflow: 'hidden',
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
            
          }}>
            <Hero3 />
          </FullpageSection>
          <FullpageSection  className="comic-section" style={{
            // backgroundColor: 'firebrick',
           
          }}>
        <ComicBook/>
          </FullpageSection>
          </div>
          )}
        </FullPageSections>

      </Fullpage>
      </div>
  );
}

export default HeroComp;
