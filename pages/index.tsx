import type { NextPage } from 'next';
import HeaderSection from '@/components/HeaderSection/HeaderSection';
import Navbar from '@/components/Navbar/Navbar';

const Home: NextPage = () => {
  return (
    <div className="relative min-h-full flex flex-col">
      <Navbar />
      <HeaderSection />
    </div>
  );
};

export default Home;
