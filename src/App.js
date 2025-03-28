import logo from './logo.svg';
import './App.css';
import StartLoader from "./components/StartLoader.jsx";
import bgVd from './assets/videos/bg-video.mp4'
import ComicBook from "./components/ComicBook";
import HeroComp from "./components/HeroComp.jsx";
import { useState } from 'react';
function App() {
  // const [showHero, setShowHero] = useState(false); // State to control switching between components
  
  const handleZoomComplete = () => {
    // setShowHero(true); // Switch to HeroComp when zoom completes
  };

  return (
    <div className="container-fluid gx-0">
      <div id="background-video">
        <video className="videoTag" autoPlay loop muted>
          <source src={bgVd} type="video/mp4" />
        </video>
      </div>

      {/* {!showHero ? ( */}
        {/* <StartLoader 
        // onZoomComplete={handleZoomComplete} 
        /> */}
   {/* ) : ( */}
        <div>
        <HeroComp />

        {/* <HeroSec/> */}
        </div>
    {/* )} */}
    </div>
  );
}

export default App;
