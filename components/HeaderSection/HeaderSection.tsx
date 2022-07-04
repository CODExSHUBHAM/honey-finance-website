import Image from 'next/image';
import Heading from '@/components/ui/Heading/Heading';
import Button from '../ui/Button/Button';
import HeaderImage from '@/assets/images/header-image.png';
import Text from '@/components/ui/Text/Text';

function HeaderSection(): JSX.Element {
  return (
    <div className="header-section min-h-screen bg-cover bg-right-top bg-no-repeat flex flex-col justify-center items-center">
      <div className="flex flex-col  md:flex-row-reverse md:items-center gap-4 max-w-7xl lg:max-w-full mx-auto px-4 md:px-0">
        <div>
          <Image
            src={HeaderImage}
            alt="Header-Image"
            className="w-full h-auto z-0"
          ></Image>
        </div>
        <div className="flex flex-col gap-6">
          <Heading variant="black">
            Making NFT Lending and Staking easy.
          </Heading>
          <Text color="gray" size="md" className="leading-7">
            Honey’s mission is to empower NFT users with simple financial tools.
          </Text>
          <div className="flex flex-col md:flex-row items-center justify-start gap-6 md:gap-10">
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
