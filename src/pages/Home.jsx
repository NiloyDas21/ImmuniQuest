import Navbar from "../components/Navbar";
import HeroSection from "../components/Herosection";
import FeaturesSection from "../components/FeatureSection";
function Home(){
    return (
        <>
        <div>
            <Navbar/>
            <HeroSection/>
            <FeaturesSection/>
        </div>
        </>
    )
}

export default Home;