import Box from '../ui/Box/Box';
import Heading from '../ui/Heading/Heading';
import key from '@/assets/Illustrations/key.png';
import chain from '@/assets/Illustrations/link.png';
import safe from '@/assets/Illustrations/safe.png';

function Section2(): JSX.Element {
  return (
    <div className="bg-primary bg-opacity-[0.95] border border-black py-16 md:py-20 md:flex md:flex-col md:items-center">
      <Box
        shadowType="BLACK"
        shadowDirection="right"
        className="py-16 text-center bg-opacity-90 md:w-fit md:p-20 md:flex md:flex-col md:items-center"
      >
        <Heading variant="black" className="font-bold">
          NFT Liquidation Solution
        </Heading>
        <div className="md:flex md:pt-20 pt-12">
          <Box
            shadowType="BLACK"
            shadowDirection="right"
            className="p-2 md:w-96 md:h-72 flex flex-col items-center py-6"
          >
            <img src={key.src} alt="key Illustration" className="w-24" />
            <Heading
              size="sm"
              variant="black"
              className="font-bold pt-2 md:pt-4 text-center text-3xl"
            >
              Opportunity Cost
            </Heading>
            <p className="font-mono text-gray-500 font-normal pt-2 md:pt-8 text-sm">
              Invest in crypto anytime, anywhere with our safe, secure, and easy
              to use online platform
            </p>
          </Box>
          <Box
            shadowType="BLACK"
            shadowDirection="right"
            className="p-2 md:w-96 md:h-72 flex flex-col items-center py-6"
          >
            <img src={chain.src} alt="key Illustration" className="w-24" />
            <Heading
              size="sm"
              variant="black"
              className="font-bold pt-2 md:pt-4 text-center text-3xl"
            >
              Non-fungibility
            </Heading>
            <p className="font-mono text-gray-500 font-normal pt-2 md:pt-8 text-sm">
              We have thousands of ATMs located across the U.S. where you can
              easily convert cash to crypto
            </p>
          </Box>
          <Box
            shadowType="BLACK"
            shadowDirection="right"
            className="p-2 md:w-96 md:h-72 flex flex-col items-center py-6"
          >
            <img src={safe.src} alt="key Illustration" className="w-24 mb-4" />
            <Heading
              size="sm"
              variant="black"
              className="font-bold pt-2 md:pt-4 text-center text-3xl"
            >
              Unrealized Gains
            </Heading>
            <p className="font-mono text-gray-500 font-normal pt-2 md:pt-8 text-sm">
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
