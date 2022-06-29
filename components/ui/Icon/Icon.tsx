import { Icons } from './icons';

type IconProps = {
  icon: keyof typeof Icons;
};

function Icon({ icon }: IconProps): JSX.Element {
  const Component = Icons[icon];

  return <Component />;
}

export default Icon;
