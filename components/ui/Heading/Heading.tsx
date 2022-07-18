import { VARIANT, SIZE } from './constants';

type titleProps = {
  variant?: keyof typeof VARIANT;
  size?: keyof typeof SIZE;
  children?: React.ReactNode;
  className?: string;
};

function Heading({
  size = 'md',
  variant = 'white',
  className = '',
  children,
}: titleProps): JSX.Element {
  return (
    <p className={`font-mono ${VARIANT[variant]} ${SIZE[size]} ${className}`}>
      {children}
    </p>
  );
}

export default Heading;
