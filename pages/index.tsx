import type { NextPage } from 'next';
import Button from '@/components/ui/Button/Button';
import Icon from '@/components/ui/Icon/Icon';

const Home: NextPage = () => {
  const handleClickEvent = () => {
    alert('Clicked here!');
  };

  return (
    <div className="p-5">
      <div className="flex items-center justify-center pt-10">
        <Button>Explore App</Button>
      </div>
      <div className="flex items-center justify-center pt-10">
        <Button variant="secondary" onClick={handleClickEvent}>
          Watch Demo
        </Button>
      </div>
      <div className="flex items-center justify-center pt-10">
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
    </div>
  );
};

export default Home;
