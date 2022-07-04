import Image from 'next/image';
import Box from '../ui/Box/Box';
import Heading from '../ui/Heading/Heading';
import key from '@/assets/Illustrations/key.png';
import chain from '@/assets/Illustrations/link.png';
import safe from '@/assets/Illustrations/safe.png';

function Section2(): JSX.Element {
  return (
    <div className="bg-primary bg-opacity-95 border border-black">
      <Box
        shadowType="BLACK"
        shadowDirection="right"
        className="p-1 text-center bg-opacity-90"
      >
        <Heading variant="black" className="font-bold">
          NFT Liquidation Solution
        </Heading>
        <div>
          <Box shadowType="BLACK" shadowDirection="right" className="p-2">
            <Image src={key} alt="key Illustration" />
            <Heading
              size="sm"
              variant="black"
              className="font-bold pt-2 text-center"
            >
              Opportunity Cost
            </Heading>
            <p className="font-mono text-gray-500 font-normal pt-2">
              Invest in crypto anytime, anywhere with our safe, secure, and easy
              to use online platform
            </p>
          </Box>
          <Box shadowType="BLACK" shadowDirection="right" className="p-2">
            <Image src={chain} alt="key Illustration" />
            <Heading
              size="sm"
              variant="black"
              className="font-bold pt-2 text-center"
            >
              Non-fungibility
            </Heading>
            <p className="font-mono text-gray-500 font-normal pt-2">
              We have thousands of ATMs located across the U.S. where you can
              easily convert cash to crypto
            </p>
          </Box>
          <Box shadowType="BLACK" shadowDirection="right" className="p-2">
            <Image src={safe} alt="key Illustration" />
            <Heading
              size="sm"
              variant="black"
              className="font-bold pt-2 text-center"
            >
              Unrealized Gains
            </Heading>
            <p className="font-mono text-gray-500 font-normal pt-2">
              Store your growing investments in our non-custodial wallet that
              gives you access to a full suite of DeFi services in one place
            </p>
          </Box>
        </div>
      </Box>
    </div>
  );
}

export default Section2;
