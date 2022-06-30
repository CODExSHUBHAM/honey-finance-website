import type { NextPage } from 'next';
import HeaderSection from '@/components/HeaderSection/HeaderSection';

const Home: NextPage = () => {
  return (
    <div className="relative min-h-full flex flex-col">
      <HeaderSection />
    </div>
  );
};

export default Home;
