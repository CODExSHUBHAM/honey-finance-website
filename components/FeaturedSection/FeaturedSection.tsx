import Image from 'next/image';
import Featured1 from '@/assets/images/featured/Featured1.png';
import Featured2 from '@/assets/images/featured/Featured2.png';
import Featured3 from '@/assets/images/featured/Featured3.png';
import Featured4 from '@/assets/images/featured/Featured4.png';
import Featured5 from '@/assets/images/featured/Featured5.png';

function FeaturedSection(): JSX.Element {
  return (
    <div className="bg-neutral-50 flex flex-col items-center justify-center gap-10 py-4">
      <p className="text-black uppercase text-lg font-normal leading-5">
        As Featured In
      </p>
      <div className="flex flex-col gap-8 w-fit">
        <Image src={Featured1} className="" alt="Featured1" />
        <Image src={Featured2} className="" alt="Featured2" />
        <Image src={Featured3} className="" alt="Featured3" />
        <Image src={Featured4} className="" alt="Featured4" />
        <Image src={Featured5} className="" alt="Featured5" />
      </div>
    </div>
  );
}

export default FeaturedSection;
