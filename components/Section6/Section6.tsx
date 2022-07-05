import Image from 'next/image';
import Icon from '../ui/Icon/Icon';
import Button from '../ui/Button/Button';
import Heading from '../ui/Heading/Heading';
import Box from '../ui/Box/Box';
import Wormhole from '@/assets/images/Wormhole.png';
import Katana from '@/assets/images/Katana.png';
import Solvent from '@/assets/images/Solvent.png';

function Section6(): JSX.Element {
  return (
    <div className="bg-white bg-opacity-95 py-10 px-2 md:py-20 md:px-20">
      <Box className="py-8 px-2 bg-gray-50 flex flex-col md:flex-row text-center items-center md:justify-between md:px-20">
        <div>
          <Heading variant="black" className="font-bold">
            Partenered with
          </Heading>
          <Button
            as="a"
            className="flex items-center gap-2 w-fit mt-6 "
            variant="gray"
            size="sm"
            href=""
            target="_blank"
          >
            Mirror.xyz
            <Icon icon="LinkArrow" />
          </Button>
        </div>
        <div className="flex flex-col md:flex-row w-fit pt-8 gap-8">
          <Image src={Wormhole} alt="WormholeLogo" width={150} height={150} />
          <Image src={Katana} alt="KatanaLogo" width={150} height={150} />
          <Image src={Solvent} alt="SolventLogo" />
        </div>
      </Box>
    </div>
  );
}

export default Section6;
