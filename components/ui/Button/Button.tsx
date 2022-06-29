import React from 'react';
import { VARIANT, SIZE } from './constants';

type ButtonProps = {
  className?: string;
  variant?: keyof typeof VARIANT;
  size?: keyof typeof SIZE;
  as?: keyof JSX.IntrinsicElements;
  onClick?: () => void;
  href?: string;
  target?: string;
  children?: React.ReactNode;
};

function Button({
  className = '',
  variant = 'primary',
  size = 'md',
  as,
  onClick,
  href,
  target,
  children,
  ...props
}: ButtonProps): JSX.Element {
  const Component = as || ('button' as keyof JSX.IntrinsicElements);

  return (
    <Component
      className={`leading-tight tracking-[0.08em] uppercase rounded-sm font-mono ${VARIANT[variant]} ${SIZE[size]} ${className}`}
      onClick={onClick}
      href={href}
      target={target}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Button;
