import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Domains from '@/components/Domains';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>FourLoops - Infinite Support for Cutting-Edge Student Projects</title>
        <meta 
          name="description" 
          content="End-to-end academic project development in AI, ML, Data Science, Cyber Security & more. Get code, reports, PPTs, and viva preparation with continuous support." 
        />
        <meta name="keywords" content="student projects, academic projects, machine learning projects, AI projects, data science, final year project, college project help" />
        <link rel="canonical" href="https://fourloops.dev" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <Domains />
          <Services />
          <WhyChooseUs />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
