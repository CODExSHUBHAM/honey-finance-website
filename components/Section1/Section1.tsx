import Image from 'next/image';
import Box from '../ui/Box/Box';
import Heading from '../ui/Heading/Heading';
import Illustration1 from '@/assets/Illustrations/Illustration1.png';

function Section1(): JSX.Element {
  return (
    <div className="bg-white bg-opacity-95 flex flex-col justify-center items-center gap-5 py-4 px-4 md:py-32">
      <Heading size="sm" variant="black" className="font-bold">
        Borrow against your NFTs
      </Heading>
      <p className="font-mono font-medium text-xl text-gray-500 md:w-[55%] md:text-center">
        Our protocol enables NFTs and metaverse assets to be used as collateral
        on loans. Honey allows users to participate in DeFi using their illiquid
        assets.
      </p>
      <div className="md:grid md:grid-cols-2 md:grid-rows-2 w-fit">
        <Box
          shadowType="DARK"
          shadowDirection="left"
          className="p-5 md:row-start-1 md:row-end-4 w-fit"
        >
          <Image src={Illustration1} alt="Illustration" />
          <Heading size="sm" variant="black" className="font-bold pt-6">
            NFT Loans
          </Heading>
          <p className="font-mono text-gray-500 font-semibold">
            Easier than ever
          </p>
        </Box>
        <Box shadowType="DARK" className="p-5 md:col-start-2 md:col-end-4">
          <Heading size="sm" variant="black" className="font-bold">
            Metaverse Liquidity
          </Heading>
        </Box>
        <Box shadowType="DARK" className="p-5 ">
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
