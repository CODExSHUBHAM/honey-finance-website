import { COLOR, SIZE } from './constants';

type textProps = {
  size?: keyof typeof SIZE;
  color?: keyof typeof COLOR;
  className?: string;
  children?: React.ReactNode;
};

function Text({
  size = 'md',
  color = 'white',
  className = '',
  children,
}: textProps): JSX.Element {
  return (
    <p
      className={`font-mono font-semibold ${SIZE[size]} ${COLOR[color]} ${className}`}
    >
      {children}
    </p>
  );
}

export default Text;
