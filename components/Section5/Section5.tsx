import Image from 'next/image';
import Heading from '../ui/Heading/Heading';
import FindingMan from '@/assets/Illustrations/FindingMan.png';
import Button from '../ui/Button/Button';
import Icon from '@/components/ui/Icon/Icon';

function Section5(): JSX.Element {
  return (
    <div className="bg-black px-6 py-16 md:flex md:items-center md:justify-around md:p-10">
      <div className="text-center flex flex-col items-center">
        <Image src={FindingMan} alt="FindingMan Illustration" />
        <Heading size="sm" variant="white" className="font-bold pt-4">
          How it works?
        </Heading>
        <Button
          as="a"
          className="flex items-center justify-center w-10/12 gap-2 mt-4"
          variant="white"
          size="sm"
          href=""
          target="_blank"
        >
          Read Docs
          <Icon icon="LinkArrow" />
        </Button>
      </div>
      <div className="flex flex-col md:flex-row items-center md:gap-10">
        <div className="md:w-48 text-center">
          <p className="font-mono text-white text-xl font-bold pt-8">
            Onboarding
          </p>
          <p className="font-mono text-sm font-medium leading-5 text-gray-400 pt-2 ">
            Honey brings lending and borrowing to NFTs, allowing you to utilize
            capital stored away in your NFT collection.
          </p>
        </div>
        <div className="md:w-48 text-center">
          <p className="font-mono text-white text-xl font-bold pt-8">
            Lending Flow
          </p>
          <p className="font-mono text-sm font-medium leading-5 text-gray-400 pt-2 ">
            Lenders lock up liquidity in exchange for HONEY, which can be staked
            for protocol fees.
          </p>
        </div>
        <div className="md:w-48 text-center">
          <p className="font-mono text-white text-xl font-bold pt-8">
            Borrow Flow
          </p>
          <p className="font-mono text-sm font-medium leading-5 text-gray-400 pt-2 ">
            Borrowers stake NFT as collateral and pay interest, which is
            distributed to HONEY holders
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section5;
