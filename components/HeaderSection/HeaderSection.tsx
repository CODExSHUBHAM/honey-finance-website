import Heading from '@/components/ui/Heading/Heading';
import Button from '../ui/Button/Button';
import HeaderImage from '@/assets/images/header-image.png';

function HeaderSection(): JSX.Element {
  return (
    <div className="header-section md:min-h-screen bg-cover bg-right-top bg-no-repeat flex flex-col justify-center items-center mt-10 px-4 pb-16 ">
      <div className="flex flex-col gap-2  md:flex-row-reverse md:items-center md:gap-4 max-w-7xl lg:max-w-full mx-auto md:w-[80vw]">
        <div>
          <img
            src={HeaderImage.src}
            alt="Header-Image"
            className="w-full h-auto z-0"
          />
        </div>
        <div className="flex flex-col gap-4 md:gap-6 mt-[-30px]">
          <Heading
            variant="black"
            size="sm"
            className="font-semibold md:text-6xl md:w-2/3"
          >
            Making NFT Lending and Staking easy.
          </Heading>
          <p className="font-mono text-lg font-medium text-gray-500 md:w-3/5 ">
            Honey’s mission is to empower NFT users with simple financial tools.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-start gap-3 md:gap-10">
            <Button className="w-full md:w-fit">Explore app</Button>
            <Button variant="secondary" className="w-full md:w-fit">
              Watch demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
