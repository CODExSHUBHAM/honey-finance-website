import type { NextPage } from 'next';
import HeaderSection from '@/components/HeaderSection/HeaderSection';
import Navbar from '@/components/Navbar/Navbar';
import FeaturedSection from '@/components/FeaturedSection/FeaturedSection';

const Home: NextPage = () => {
  return (
    <div className="relative min-h-full flex flex-col">
      <Navbar />
      <HeaderSection />
      <FeaturedSection />
    </div>
  );
};

export default Home;
