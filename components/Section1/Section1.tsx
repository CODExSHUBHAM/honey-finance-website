import Box from '../ui/Box/Box';
import Heading from '../ui/Heading/Heading';
import Illustration1 from '@/assets/Illustrations/Illustration1.png';
import Illustration2 from '@/assets/Illustrations/Illustration2.png';
import Illustration3 from '@/assets/Illustrations/Illustration3.png';

function Section1(): JSX.Element {
  return (
    <div className="bg-white bg-opacity-[0.98] flex flex-col justify-center items-center gap-5 py-28 px-4 md:py-32">
      <Heading size="md" variant="black" className="font-bold text-center">
        Borrow against your NFTs
      </Heading>
      <p className="font-mono font-medium text-xl text-gray-500 md:w-[55%] text-center">
        Our protocol enables NFTs and metaverse assets to be used as collateral
        on loans. Honey allows users to participate in DeFi using their illiquid
        assets.
      </p>
      <div className="md:grid md:grid-cols-2 md:grid-rows-2 w-fit mt-10">
        <div className="static text-center">
          <img
            src={Illustration1.src}
            alt="Illustration"
            className="absolute z-10 -left-1.5"
          />
          <Box
            shadowType="DARK"
            shadowDirection="left"
            className="p-5 md:row-start-1 md:row-end-4 relative z-1 h-[25rem] flex flex-col justify-end"
          >
            <Heading size="sm" variant="black" className="font-bold pt-6">
              NFT Loans
            </Heading>
            <p className="font-mono text-gray-500 font-semibold">
              Easier than ever
            </p>
          </Box>
        </div>
        <div className="static text-center">
          <img
            src={Illustration2.src}
            alt="Illustration"
            className="absolute z-10"
          />
          <Box
            shadowType="DARK"
            shadowDirection="left"
            className="p-5 md:row-start-1 md:row-end-4 relative z-1 h-[25rem] flex flex-col justify-end"
          >
            <Heading size="sm" variant="black" className="font-bold pt-6">
              Metaverse Liquidity
            </Heading>
          </Box>
        </div>
        <div className="static text-center">
          <img
            src={Illustration3.src}
            alt="Illustration"
            className="absolute z-10 -left-1.5"
          />
          <Box
            shadowType="DARK"
            shadowDirection="left"
            className="p-5 md:row-start-1 md:row-end-4 relative z-1 h-[25rem] flex flex-col justify-start"
          >
            <Heading size="sm" variant="black" className="font-bold pt-6">
              NFT Pools
            </Heading>
          </Box>
        </div>
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
