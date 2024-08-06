import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import FeatureSection from "./components/FeatureSection"
import WorkFlow from "./components/WorkFLow"
import Price from "./components/Price"


function App(){
  return(
    <>
      <Navbar />
      <div className=" mx-auto pt-20 px-6 max-w-7xl">
        <HeroSection />
        <FeatureSection />
        <WorkFlow />
        <Price />
      </div>
      
    </>
  )
}

export default App