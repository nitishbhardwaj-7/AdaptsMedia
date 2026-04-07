function PageThree() {

  return (
    <div
      id="page-3"
      className="relative sm:h-screen w-full overflow-hidden"
    >
      {/* Video */}
      <video
  src="https://www.pexels.com/download/video/6930347/"
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-contain sm:object-cover object-center"
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
          
          {/* Responsive Icon */}
          <div className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl">
            <i className="ri-play-fill"></i>
          </div>

          {/* Responsive Text */}
          <h5 className="mt-1 sm:mt-2 text-[10px] sm:text-xs md:text-sm lg:text-lg">
            
          </h5>

        </div>
      </div>
    </div>
  );
}

export default PageThree;