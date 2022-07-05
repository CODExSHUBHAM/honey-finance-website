import Image from 'next/image';
import Heading from '../ui/Heading/Heading';
import Button from '../ui/Button/Button';
import Icon from '../ui/Icon/Icon';
import Twitter from '@/assets/images/Twitter.png';
import Telegram from '@/assets/images/Telegram.png';
import Discord from '@/assets/images/Discord.png';
import Logo from '@/assets/images/logo/LogoIcon.png';
import Potion from '@/assets/images/potion.png';
import Box from '../ui/Box/Box';

function FooterSection(): JSX.Element {
  return (
    <div className="bg-white px-2 py-4 md:p-20 flex flex-col md:flex-row items-center text-center md:text-left">
      <div>
        <Heading size="sm" variant="black" className="font-bold">
          Honey Finance is run by our DAO and operated by Honey Labs.
        </Heading>
        <div className="flex flex-col md:flex-row md:gap-10 items-center">
          <Button
            as="a"
            className="flex items-center gap-2 w-fit mt-6 "
            variant="gray"
            size="sm"
            href=""
            target="_blank"
          >
            Documentation
            <Icon icon="LinkArrow" />
          </Button>
          <Button
            as="a"
            className="flex items-center gap-2 w-fit mt-6 "
            variant="gray"
            size="sm"
            href=""
            target="_blank"
          >
            Whitepaper
            <Icon icon="LinkArrow" />
          </Button>
        </div>
        <div className="flex items-center gap-8 w-fit mt-6 md:mt-20">
          <Image src={Discord} alt="Discord Icon" />
          <Image src={Telegram} alt="Telegram Icon" />
          <Image src={Twitter} alt="Twitter Icon" />
        </div>
      </div>
      <div className="md:flex">
        <Box shadowType="DARK" className="py-6 px-2 flex flex-col items-center">
          <Image src={Logo} alt="Honey Logo" />
          <Heading size="sm" variant="black" className="font-bold pt-3">
            Honey DAO
          </Heading>
          <p className="font-mono text-sm font-medium leading-5 text-gray-400 pt-4">
            Governed by the Honey token, the DAO allows stakeholders to decide
            vote on strategy, treasury, emissions, and insurance funds of the
            protocol.
          </p>
        </Box>
        <Box shadowType="DARK" className="py-6 px-2 flex flex-col items-center">
          <Image src={Potion} alt="Honey Logo" />
          <Heading size="sm" variant="black" className="font-bold pt-3">
            Honey Labs
          </Heading>
          <p className="font-mono text-sm font-medium leading-5 text-gray-400 pt-4">
            Honey Labs builds the protocol and proposes changes to the DAO. It
            oversees day to day operations and implements changes to the
            protocol.
          </p>
        </Box>
      </div>
    </div>
  );
}

export default FooterSection;
