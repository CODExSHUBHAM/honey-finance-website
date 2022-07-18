import Featured1 from '@/assets/images/featured/Featured1.svg';
import Featured2 from '@/assets/images/featured/Featured2.png';
import Featured3 from '@/assets/images/featured/Featured3.png';
import Featured4 from '@/assets/images/featured/Featured4.png';
import Featured5 from '@/assets/images/featured/Featured5.svg';

function FeaturedSection(): JSX.Element {
  return (
    <div className="bg-neutral-50 flex flex-col items-center justify-center gap-10 py-20 md:py-10">
      <p className="font-mono text-black uppercase text-lg font-normal leading-5">
        As Featured In
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center md:justify-around w-full gap-12 md:w-[90vw]">
        <img src={Featured1.src} alt="Company logo" className="h-10 w-auto " />
        <img src={Featured2.src} alt="NFT nyc Logo" className="h-12 w-auto " />
        <img
          src={Featured3.src}
          alt="Web3 wire Logo"
          className="h-20 w-auto "
        />
        <img src={Featured4.src} alt="Superteam logo" className="h-8 w-auto " />
        <img src={Featured5.src} alt="Company logo" className="h-10 w-auto " />
      </div>
    </div>
  );
}

export default FeaturedSection;
