import Navbar from "../components/Navbar";
import HeroSection from "../components/Herosection";
import FeaturesSection from "../components/FeatureSection";
import Footer from "../components/Footer";
function Home(){
    return (
        <>
        <div>
            <Navbar/>
            <HeroSection/>
            <FeaturesSection/>
            <Footer/>
        </div>
        </>
    )
}

export default Home;