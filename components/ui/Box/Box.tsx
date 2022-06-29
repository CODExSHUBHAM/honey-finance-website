import React from 'react';

const SHADOW_TYPE = {
  LIGHT: 'shadow-primary',
  DARK: 'border border-black shadow-primary',
  BLACK: 'shadow-black',
};

const SHADOW_DIRECTION = {
  left: 'shadow-default-left',
  right: 'shadow-default',
};

type BoxProps = {
  className?: string;
  shadowType?: keyof typeof SHADOW_TYPE;
  shadowDirection?: keyof typeof SHADOW_DIRECTION;
  children?: React.ReactNode;
};

function Box({
  shadowType = 'LIGHT',
  shadowDirection = 'right',
  children,
  className = '',
}: BoxProps): JSX.Element {
  return (
    <div
      className={`m-5 rounded bg-white ${SHADOW_DIRECTION[shadowDirection]} ${SHADOW_TYPE[shadowType]} ${className}`}
    >
      {children}
    </div>
  );
}

export default Box;
