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
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="relative min-h-full flex flex-col">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
        <title>Honey Finance</title>
      </Head>
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
