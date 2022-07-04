import Image from 'next/image';
import Box from '../ui/Box/Box';
import Heading from '../ui/Heading/Heading';
import Illustration1 from '@/assets/Illustrations/Illustration1.png';

function Section1(): JSX.Element {
  return (
    <div className="flex flex-col gap-5  py-4 px-4">
      <Heading size="sm" variant="black" className="font-bold">
        Borrow against your NFTs
      </Heading>
      <p className="font-mono font-medium text-xl text-gray-500">
        Our protocol enables NFTs and metaverse assets to be used as collateral
        on loans. Honey allows users to participate in DeFi using their illiquid
        assets.
      </p>
      <div>
        <Box shadowType="DARK" shadowDirection="left" className="p-5">
          <Image src={Illustration1} alt="Illustration" />
          <Heading size="sm" variant="black" className="font-bold pt-6">
            NFT Loans
          </Heading>
          <p className="font-mono text-gray-500 font-semibold">
            Easier than ever
          </p>
        </Box>
        <Box shadowType="DARK" className="p-5">
          <Heading size="sm" variant="black" className="font-bold">
            Metaverse Liquidity
          </Heading>
        </Box>
        <Box shadowType="DARK" className="p-5">
          <Heading size="sm" variant="black" className="font-bold">
            NFT Pools
          </Heading>
        </Box>
        <Box shadowType="DARK" className="p-5 text-center">
          <Heading
            size="sm"
            variant="primary"
            className="font-bold text-center"
          >
            $HONEY
          </Heading>
          <Heading
            size="sm"
            variant="black"
            className="font-bold pt-2 text-center"
          >
            Liquid Assets in DeFi
          </Heading>
          <p className="font-mono text-gray-500 font-semibold pt-1">HoneyDAO</p>
        </Box>
      </div>
    </div>
  );
}

export default Section1;
