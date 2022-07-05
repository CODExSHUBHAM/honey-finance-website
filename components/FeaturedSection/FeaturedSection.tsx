import Image from 'next/image';
import Featured1 from '@/assets/images/featured/Featured1.png';
import Featured2 from '@/assets/images/featured/Featured2.png';
import Featured3 from '@/assets/images/featured/Featured3.png';
import Featured4 from '@/assets/images/featured/Featured4.png';
import Featured5 from '@/assets/images/featured/Featured5.png';

function FeaturedSection(): JSX.Element {
  return (
    <div className="bg-neutral-50 flex flex-col items-center justify-center gap-10 py-4 md:py-10">
      <p className="text-black uppercase text-lg font-normal leading-5">
        As Featured In
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <Image
          src={Featured1}
          alt="Featured1"
          width={250}
          height={40}
          layout="fixed"
        />
        <Image
          src={Featured2}
          alt="Featured2"
          width={250}
          height={60}
          layout="fixed"
        />
        <Image
          src={Featured3}
          alt="Featured3"
          width={250}
          height={100}
          layout="fixed"
        />
        <Image
          src={Featured4}
          alt="Featured4"
          width={250}
          height={50}
          layout="fixed"
        />
        <Image
          src={Featured5}
          alt="Featured5"
          width={250}
          height={40}
          layout="fixed"
        />
      </div>
    </div>
  );
}

export default FeaturedSection;
