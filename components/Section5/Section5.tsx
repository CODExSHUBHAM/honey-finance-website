import Image from 'next/image';
import Heading from '../ui/Heading/Heading';
import FindingMan from '@/assets/Illustrations/FindingMan.png';
import Button from '../ui/Button/Button';
import Icon from '@/components/ui/Icon/Icon';

function Section5(): JSX.Element {
  return (
    <div className="bg-black p-4">
      <div className="">
        <Image src={FindingMan} alt="FindingMan Illustration" />
        <Heading size="sm" variant="white" className="font-bold pt-4">
          How it works?
        </Heading>
        <Button
          as="a"
          className="flex items-center gap-2 w-fit mt-4"
          variant="white"
          size="sm"
          href=""
          target="_blank"
        >
          Read Docs
          <Icon icon="LinkArrow" />
        </Button>
        <p className="font-mono text-white text-xl font-bold pt-8">
          Onboarding
        </p>
        <p className="font-mono text-sm font-medium leading-5 text-gray-400 pt-2 ">
          Honey brings lending and borrowing to NFTs, allowing you to utilize
          capital stored away in your NFT collection.
        </p>
        <p className="font-mono text-white text-xl font-bold pt-8">
          Lending Flow
        </p>
        <p className="font-mono text-sm font-medium leading-5 text-gray-400 pt-2 ">
          Lenders lock up liquidity in exchange for HONEY, which can be staked
          for protocol fees.
        </p>
        <p className="font-mono text-white text-xl font-bold pt-8">
          Borrow Flow
        </p>
        <p className="font-mono text-sm font-medium leading-5 text-gray-400 pt-2 ">
          Borrowers stake NFT as collateral and pay interest, which is
          distributed to HONEY holders
        </p>
      </div>
    </div>
  );
}

export default Section5;
