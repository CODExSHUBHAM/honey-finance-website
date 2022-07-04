import type { NextPage } from 'next';
import HeaderSection from '@/components/HeaderSection/HeaderSection';
import Navbar from '@/components/Navbar/Navbar';
import FeaturedSection from '@/components/FeaturedSection/FeaturedSection';
import Section1 from '@/components/Section1/Section1';
import Section2 from '@/components/Section2/Section2';

const Home: NextPage = () => {
  return (
    <div className="relative min-h-full flex flex-col">
      <Navbar />
      <HeaderSection />
      <FeaturedSection />
      <Section1 />
      <Section2 />
    </div>
  );
};

export default Home;
