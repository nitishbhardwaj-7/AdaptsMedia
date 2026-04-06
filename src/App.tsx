import { useEffect} from "react";
import React from 'react'
import Navbar from './components/layout/NavBar'
import LandingPage from './components/LandingPage'
import PageTwo from './components/PageTwo'
import PageThree from './components/PageThree'
import PageFour from './components/PageFour'
import PageFive from './components/PageFive'
import PageSix from './components/PageSix'
import AwardsSection from './components/AwardsSection'
import TestimonialsSection from './components/TestimonialsSection'
import Footer from './components/layout/Footer'
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";


const App = () => {

useEffect(() => {
  const lenis = new Lenis();

  const ticker = (time: number) => lenis.raf(time * 1000);
  gsap.ticker.add(ticker);
  gsap.ticker.lagSmoothing(0);

  return () => {
    gsap.ticker.remove(ticker);
    lenis.destroy();
  };
}, []);


  return (
    <main>
      <nav className="px-6 max-w-screen-2xl mx-auto">
        <Navbar/>
      </nav>
  <div>
    <LandingPage/>
    </div>
    <div >
      <PageTwo/>
      </div>
    <div>
     <PageThree/>
    </div>
    <div>
      <PageFour/>
      </div>
      <div>
        <PageFive/>
      </div>
      <div>
        <PageSix/>
      </div>
      <div>
        <AwardsSection/>
      </div>

      <div>
        <TestimonialsSection/>
      </div>

      <div>
<Footer/>        
      </div>
    </main>
    
  )
}

export default App