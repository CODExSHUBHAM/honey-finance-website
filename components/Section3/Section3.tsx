import Image from 'next/image';
import Box from '../ui/Box/Box';
import Heading from '../ui/Heading/Heading';
import Ape from '@/assets/images/Ape.png';
import God from '@/assets/images/God.png';
import Phunk from '@/assets/images/Phunk.png';
import Azuki from '@/assets/images/Azuki.png';

function Section3(): JSX.Element {
  return (
    <div className="bg-black bg-hex bg-opacity-95 p-4 text-center ">
      <p className="font-mono font-semibold text-2xl text-gray-500 pt-4 uppercase ">
        tvl
      </p>
      <Heading size="md" variant="white" className="font-bold tracking-widest">
        3M+
      </Heading>
      <p className="font-mono font-semibold text-2xl text-gray-500 pt-4">
        NFTs Deposited
      </p>
      <Heading size="md" variant="white" className="font-bold tracking-widest">
        40 k
      </Heading>
      <p className="font-mono font-semibold text-2xl text-gray-500 pt-4 uppercase ">
        Daily Transactions
      </p>
      <Heading size="md" variant="white" className="font-bold tracking-widest">
        10.5k+
      </Heading>

      <Box shadowType="BLACK" className="py-4 px-3 text-left">
        <div className="flex items-center justify-between">
          <p className="font-mono font-bold text-2xl text-gray-700">DegenApe</p>
          <p className="font-mono font-normal text-base text-gray-500 ">
            @ 98BD86
          </p>
        </div>
        <div className="pt-6">
          <Image src={Ape} alt="ApeImage" width={300} height={300} />
        </div>
        <p className="font-mono font-normal text-base text-gray-500 pt-4 ">
          Avg. Value
        </p>
        <p className="font-mono text-xl font-medium text-gray-800">168 SOL</p>
      </Box>
      <Box shadowType="BLACK" className="py-4 px-3 text-left">
        <div className="flex items-center justify-between">
          <p className="font-mono font-bold text-2xl text-gray-700">DeGods</p>
          <p className="font-mono font-normal text-base text-gray-500 ">
            @ super
          </p>
        </div>
        <div className="pt-6">
          <Image src={God} alt="ApeImage" width={300} height={300} />
        </div>
        <p className="font-mono font-normal text-base text-gray-500 pt-4 ">
          Avg. Value
        </p>
        <p className="font-mono text-xl font-medium text-gray-800">1380 SOL</p>
      </Box>
      <Box shadowType="BLACK" className="py-4 px-3 text-left">
        <div className="flex items-center justify-between">
          <p className="font-mono font-bold text-2xl text-gray-700">Phunk</p>
          <p className="font-mono font-normal text-base text-gray-500 ">
            @ AshM
          </p>
        </div>
        <div className="pt-6">
          <Image src={Phunk} alt="ApeImage" width={300} height={300} />
        </div>
        <p className="font-mono font-normal text-base text-gray-500 pt-4 ">
          Avg. Value
        </p>
        <p className="font-mono text-xl font-medium text-gray-800">
          1.0324 ETH
        </p>
      </Box>
      <Box shadowType="BLACK" className="py-4 px-3 text-left">
        <div className="flex items-center justify-between">
          <p className="font-mono font-bold text-2xl text-gray-700">Azuki</p>
          <p className="font-mono font-normal text-base text-gray-500 ">
            @ manchanda
          </p>
        </div>
        <div className="pt-6">
          <Image src={Azuki} alt="ApeImage" width={300} height={300} />
        </div>
        <p className="font-mono font-normal text-base text-gray-500 pt-4 ">
          Avg. Value
        </p>
        <p className="font-mono text-xl font-medium text-gray-800">10.03 ETH</p>
      </Box>
    </div>
  );
}

export default Section3;
