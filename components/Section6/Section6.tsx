import Icon from '../ui/Icon/Icon';
import Button from '../ui/Button/Button';
import Heading from '../ui/Heading/Heading';
import Box from '../ui/Box/Box';
import Wormhole from '@/assets/images/Wormhole.png';
import Katana from '@/assets/images/Katana.png';
import Solvent from '@/assets/images/Solvent.png';

function Section6(): JSX.Element {
  return (
    <div className="bg-white bg-opacity-[0.95] py-20 md:px-20">
      <Box className="py-16 px-2 bg-gray-50 flex flex-col md:flex-row text-center items-center md:justify-between md:px-20">
        <div className="flex flex-col justify-center items-center">
          <Heading variant="black" className="font-bold">
            Partenered with
          </Heading>
          <Button
            as="a"
            className="flex items-center gap-2 justify-center mt-14 w-10/12 "
            variant="gray"
            size="sm"
            href=""
            target="_blank"
          >
            Mirror.xyz
            <Icon icon="LinkArrow" />
          </Button>
        </div>
        <div className="flex flex-col md:flex-row items-center pt-16  gap-12">
          <img src={Wormhole.src} alt="WormholeLogo" className="w-48" />
          <img src={Katana.src} alt="KatanaLogo" className="w-48" />
          <img src={Solvent.src} alt="SolventLogo" className="w-48" />
        </div>
      </Box>
    </div>
  );
}

export default Section6;
