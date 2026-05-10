import Navbar from "../_components/Navbar"
import Hero from "./_components/Hero"
import FeaturesBanner from "./_components/FeaturesBanner";
import HowWeWork from "./_components/HowWeWork"
import Portfolio from "./_components/Portfolio";
import Industries from "../_components/Industries";
import Engage from "./_components/Engage";
import Featured from "./_components/Featured";
import EngagementModels from "./_components/EngangementModel";
import Quote from "./_components/Quote";
import Footer from "../_components/Footer";
import FooterBanner from "../_components/FooterBanner";

export default function Services(){
    return (
        <>
        <Navbar />
        <Hero />
        <FeaturesBanner/>
        <HowWeWork/>
        <Portfolio/>
        <Featured/>
        <Industries/>
         <EngagementModels/>
        <Engage/>
        <Quote/>
        <FooterBanner/>
        <Footer/>
        </>
    );
};