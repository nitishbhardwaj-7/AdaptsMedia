import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function PageThree() {

  return (
    <div
      id="page-3"
      
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Video */}
      <video
       
        src="https://www.pexels.com/download/video/6930347/"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />

      {/* Cursor UI */}
      <div
       
        className="page3-center absolute pointer-events-none text-white"
        style={{
          top: 0,
          left: 0,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="flex flex-col items-center">
          <div className="text-8xl">
            <i className="ri-play-fill"></i>
          </div>
          <h5 className="mt-2 text-lg">
            
          </h5>
        </div>
      </div>
    </div>
  );
}

export default PageThree;