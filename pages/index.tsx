import type { NextPage } from 'next';
import HeaderSection from '@/components/HeaderSection/HeaderSection';
import Navbar from '@/components/Navbar/Navbar';
import FeaturedSection from '@/components/FeaturedSection/FeaturedSection';
import Section1 from '@/components/Section1/Section1';
import Section2 from '@/components/Section2/Section2';
import Section3 from '@/components/Section3/Section3';

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
    </div>
  );
};

export default Home;
