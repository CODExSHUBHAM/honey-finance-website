import Box from '../ui/Box/Box';
import Heading from '../ui/Heading/Heading';
import Ape from '@/assets/images/Ape.png';
import God from '@/assets/images/God.png';
import Phunk from '@/assets/images/Phunk.png';
import Azuki from '@/assets/images/Azuki.png';

function Section3(): JSX.Element {
  return (
    <div className="bg-black bg-hex bg-opacity-95 px-4 py-16 text-center">
      <div className="grid items-baseline w-fit m-auto h-fit">
        <div className="md:flex md:gap-32 md:col-start-1 md:col-end-4 h-fit md:text-left md:p-6">
          <div>
            <p className="font-mono font-semibold text-2xl text-gray-300 pt-4 uppercase md:pb-2 ">
              tvl
            </p>
            <Heading
              size="md"
              variant="white"
              className="font-bold tracking-widest"
            >
              3M+
            </Heading>
          </div>
          <div>
            <p className="font-mono font-semibold text-2xl text-gray-300 pt-4 md:pb-2">
              NFTs Deposited
            </p>
            <Heading
              size="md"
              variant="white"
              className="font-bold tracking-widest"
            >
              40 k
            </Heading>
          </div>
          <div>
            <p className="font-mono font-semibold text-2xl text-gray-300 pt-4 uppercase md:pb-2 ">
              Daily Transactions
            </p>
            <Heading
              size="md"
              variant="white"
              className="font-bold tracking-widest"
            >
              10.5k+
            </Heading>
          </div>
        </div>

        <Box
          shadowType="BLACK"
          className="mt-16 py-4 px-3 text-left w-fit z-10"
        >
          <div className="flex items-center justify-between">
            <p className="font-mono font-bold text-2xl text-gray-700">
              DegenApe
            </p>
            <p className="font-mono font-normal text-base text-gray-500 ">
              @ 98BD86
            </p>
          </div>
          <div className="pt-6">
            <img src={Ape.src} alt="ApeImage" className="w-72 md:w-64" />
          </div>
          <p className="font-mono font-normal text-base text-gray-500 pt-4 ">
            Avg. Value
          </p>
          <p className="font-mono text-xl font-medium text-gray-800">168 SOL</p>
        </Box>
        <Box shadowType="BLACK" className="py-4 px-3 text-left w-fit z-10">
          <div className="flex items-center justify-between">
            <p className="font-mono font-bold text-2xl text-gray-700">DeGods</p>
            <p className="font-mono font-normal text-base text-gray-500 ">
              @ super
            </p>
          </div>
          <div className="pt-6">
            <img src={God.src} alt="ApeImage" className="w-72 md:w-64" />
          </div>
          <p className="font-mono font-normal text-base text-gray-500 pt-4 ">
            Avg. Value
          </p>
          <p className="font-mono text-xl font-medium text-gray-800">
            1380 SOL
          </p>
        </Box>
        <Box shadowType="BLACK" className="py-4 px-3 text-left w-fit z-10">
          <div className="flex items-center justify-between">
            <p className="font-mono font-bold text-2xl text-gray-700">Phunk</p>
            <p className="font-mono font-normal text-base text-gray-500 ">
              @ AshM
            </p>
          </div>
          <div className="pt-6">
            <img src={Phunk.src} alt="ApeImage" className="w-72 md:w-64" />
          </div>
          <p className="font-mono font-normal text-base text-gray-500 pt-4 ">
            Avg. Value
          </p>
          <p className="font-mono text-xl font-medium text-gray-800">
            1.0324 ETH
          </p>
        </Box>
        <Box
          shadowType="BLACK"
          className="py-4 md:h-[-webkit-fill-available] px-3 text-left w-fit md:row-start-1 md:row-end-3 md:col-start-4 z-10"
        >
          <div className="flex items-center justify-between">
            <p className="font-mono font-bold text-2xl md:text-4xl text-gray-700">
              Azuki
            </p>
            <p className="font-mono font-normal text-base md:text-xl text-gray-500 ">
              @ manchanda
            </p>
          </div>
          <div className="pt-6">
            <img
              src={Azuki.src}
              alt="ApeImage"
              className="w-72 md:w-[22rem] md:py-5"
            />
          </div>
          <p className="font-mono font-normal text-base md:text-xl text-gray-500 pt-4 ">
            Avg. Value
          </p>
          <p className="font-mono text-xl md:text-2xl font-medium text-gray-800">
            10.03 ETH
          </p>
        </Box>
      </div>
    </div>
  );
}

export default Section3;
