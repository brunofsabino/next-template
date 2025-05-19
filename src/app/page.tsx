import HeroSection from '@/components/HeroSection';
import WaveTransitionColor from '@/components/WaveTransitionColor';
import AboutUs from '@/components/AboutUs';
import ScrollMarquee from '@/components/ScrollMarquee';
import Products from '@/components/Products';
import Testimonials from '@/components/Testimonials';
import Team from '@/components/Team';
import Location from '@/components/Location';
import CircleTransition from '@/components/CircleTransition';
import CookieConsent from '@/components/CookieConsent';
import { Toaster } from '@/components/ui/sonner';

export default function Home() {
  return (



    < main >
      <HeroSection />
      <WaveTransitionColor />
      <AboutUs />
      <ScrollMarquee />
      <Products />
      <div className="w-full">
        <CircleTransition className="w-full" />
      </div>
      <Testimonials />
      <WaveTransitionColor />
      <Team />
      <Location />
      {/* <Contact /> */}

      <CookieConsent />
      <Toaster />
    </main >
  );
}