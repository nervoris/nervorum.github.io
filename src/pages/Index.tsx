import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ResearchSection from '@/components/ResearchSection';
import FindingsSection from '@/components/FindingsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ResearchSection />
      <FindingsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
