import type { NextPage } from 'next';
import HeaderSection from '@/components/HeaderSection/HeaderSection';
import Navbar from '@/components/Navbar/Navbar';
import FeaturedSection from '@/components/FeaturedSection/FeaturedSection';
import Section1 from '@/components/Section1/Section1';
import Section2 from '@/components/Section2/Section2';
import Section3 from '@/components/Section3/Section3';
import Section4 from '@/components/Section4/Section4';
import Section5 from '@/components/Section5/Section5';
import Section6 from '@/components/Section6/Section6';
import FooterSection from '@/components/FooterSection/FooterSection';

const Home: NextPage = () => {
  return (
    <div className="relative min-h-full flex flex-col">
      <Navbar />
      <HeaderSection />
      <FeaturedSection />
      <div className="bg-coin">
        <Section1 />
        <Section2 />
      </div>
      <Section3 />
      <div className="bg-coin">
        <Section4 />
        <Section5 />
        <Section6 />
        <FooterSection />
      </div>
    </div>
  );
};

export default Home;
