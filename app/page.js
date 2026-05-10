import Navbar from "./_components/Navbar"
import Hero from "./_components/Hero";
import Features from "./_components/Features";
import About from "./_components/About";
import Services from "./_components/Services";
import Lifecycle from "./_components/Lifecycle";
import Choose from "./_components/Choose";
import Pillars from "./_components/Pillars";
import Industries from "./_components/Industries";
import FormSection from "./_components/FormSection";
import FormSectionText from "./_components/FormSectionText";
import Banner from "./_components/Banner";
import FooterBanner from "./_components/FooterBanner";
import Footer from "./_components/Footer";
import Modal from "./_components/Modal";


export default function Home() {
  return (
    <>
    
    <Navbar></Navbar>
    <Hero></Hero>
    <Features></Features>
    <About></About>
    <Services></Services>
    <Lifecycle></Lifecycle>
    <Choose></Choose>
    <Pillars></Pillars>
    <Industries></Industries>
    <div className="flex flex-col lg:flex-row justify-center items-center md:w-[70%] mx-auto mt-10 ">
        <FormSectionText></FormSectionText>
        <FormSection></FormSection>
    </div>
    <Banner></Banner>
    <FooterBanner></FooterBanner>
    <Footer></Footer>
    <Modal></Modal>
    </>
  );
};
