import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import ServicesSection from './components/ServicesSection';
import EngineeringSection from './components/EngineeringSection';
import ProcessTimeline from './components/ProcessTimeline';
import MaterialsSection from './components/MaterialsSection';
import CustomerBenefits from './components/CustomerBenefits';
import ProjectsGallery from './components/ProjectsGallery';
import WhyChooseUs from './components/WhyChooseUs';
import InteractiveHouse from './components/InteractiveHouse';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <IntroSection />
        <ServicesSection />
        <EngineeringSection />
        <ProcessTimeline />
        <MaterialsSection />
        <CustomerBenefits />
        <ProjectsGallery />
        <WhyChooseUs />
        <InteractiveHouse />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
