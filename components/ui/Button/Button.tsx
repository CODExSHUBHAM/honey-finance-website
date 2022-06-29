const BUTTON_TYPE = {
  PRIMARY: 'bg-primary text-white shadow-default-mini shadow-black',
  SECONDARY:
    'bg-white text-primary border border-2 border-primary shadow-default-mini shadow-black',
  BLACK: 'bg-black text-white text-sm',
};

const BUTTON_SIZE = {
  md: 'px-9 py-5',
  sm: 'px-5 py-2',
};

type ButtonProps = {
  buttonType?: keyof typeof BUTTON_TYPE;
  buttonSize?: keyof typeof BUTTON_SIZE;
  children?: React.ReactNode;
};

function Button({
  buttonType = 'PRIMARY',
  buttonSize = 'md',
  children,
}: ButtonProps): JSX.Element {
  return (
    <button
      type="button"
      className={`leading-tight tracking-[0.08em] uppercase rounded-sm font-mono ${BUTTON_TYPE[buttonType]} ${BUTTON_SIZE[buttonSize]}`}
    >
      {children}
    </button>
  );
}

export default Button;

//inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
