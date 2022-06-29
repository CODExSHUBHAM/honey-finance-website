import { TITLE_VARIANT, TITLE_SIZE } from '../Button/constants';

type titleProps = {
  variant?: keyof typeof TITLE_VARIANT;
  size?: keyof typeof TITLE_SIZE;
  children?: React.ReactNode;
  className?: string;
};

function Title({
  size = 'md',
  variant = 'white',
  className = '',
  children,
}: titleProps): JSX.Element {
  return (
    <p
      className={`font-mono ${TITLE_VARIANT[variant]} ${TITLE_SIZE[size]} ${className}`}
    >
      {children}
    </p>
  );
}

export default Title;
