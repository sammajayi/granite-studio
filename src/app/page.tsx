import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SocialProof from '@/components/SocialProof';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import Results from '@/components/Results';
import Faq from '@/components/Faq';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="bg-stone-100">
      <Navbar />
      <Hero />
      <SocialProof />
      <Services />
      <HowItWorks />
      <Results />
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
}
