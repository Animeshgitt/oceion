import Navbar from "../_components/Navbar"
import Hero from "./_components/Hero"
import Philosophy from "./_components/Philosophy";
import VisionMission from "./_components/Mission";
import CoreValues from "./_components/CoreValues";
import PhilosophySection from "./_components/PhilosophySection";
import SpecialistKnowledge from "./_components/Specialist";
import GlobalReach from "./_components/GlobalReach";
import CredentialsSection from "./_components/Credentials";
import Footer from "../_components/Footer";
import FooterBanner from "../_components/FooterBanner";

export default function About(){
    return (
        <>
        <Navbar />
        <Hero/>
        <Philosophy/>
        <VisionMission/>
        <CoreValues/>
        <PhilosophySection/>
        <SpecialistKnowledge/>
        <GlobalReach/>
        <CredentialsSection/>
        <FooterBanner/>
        <Footer/>
        </>
    );
};