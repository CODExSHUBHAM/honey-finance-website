import type { NextPage } from 'next';
import Button from '@/components/ui/Button/Button';
import Icon from '@/components/ui/Icon/Icon';
import Title from '@/components/ui/Title/Title';

const Home: NextPage = () => {
  const handleClickEvent = () => {
    alert('Clicked here!');
  };

  return (
    <div className="p-5 bg-blue-100">
      <div className="flex items-center justify-center mt-10">
        <Button>Explore App</Button>
      </div>
      <div className="flex items-center justify-center mt-10">
        <Button variant="secondary" onClick={handleClickEvent}>
          Watch Demo
        </Button>
      </div>
      <div className="flex items-center justify-center mt-10">
        <Button
          as="a"
          className="flex items-center gap-2"
          variant="black"
          size="sm"
          href="//app.honey.finance/farm"
          target="_blank"
        >
          Go to App
          <Icon icon="LinkArrow" />
        </Button>
      </div>
      <div className="flex items-center justify-center mt-10">
        <Button
          as="a"
          className="flex items-center gap-2 capitalize"
          variant="white"
          size="sm"
          href="//app.honey.finance/farm"
          target="_blank"
        >
          Read Docs
          <Icon icon="LinkArrow" />
        </Button>
      </div>
      <div className="flex items-center justify-center mt-10">
        <Button
          as="a"
          className="flex items-center gap-2 capitalize"
          variant="gray"
          size="sm"
          href="//app.honey.finance/farm"
          target="_blank"
        >
          Mirror.xyz
          <Icon icon="LinkArrow" />
        </Button>
      </div>
      <div className="flex items-center justify-center mt-10">
        <Title variant="black" size="lg" className="font-semibold">
          Making NFT Lending and Staking easy.
        </Title>
      </div>
      <div className="flex items-center justify-center mt-10">
        <Title variant="black" size="md" className="font-bold">
          NFT Liquidation Solution
        </Title>
      </div>
      <div className="flex items-center justify-center mt-10">
        <Title variant="black" size="sm" className="font-bold">
          DegenApe
        </Title>
      </div>
    </div>
  );
};

export default Home;
