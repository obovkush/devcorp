import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedBrands from "@/components/TrustedBrands";
import Features from "@/components/Features";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TrustedBrands />
      <Features />
      <About />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
