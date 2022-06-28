import React from "react";

const SHADOW_TYPE = {
  LIGHT: 'shadow-primary',
  DARK: 'border border-black shadow-primary',
  BLACK: 'shadow-black'
}

type BoxProps = {
  shadowType?: keyof typeof SHADOW_TYPE;
  children?: React.ReactNode;
}

function Box({shadowType = "LIGHT", children }: BoxProps): JSX.Element {
  return (
    <div className={`m-5 rounded bg-white shadow-default ${SHADOW_TYPE[shadowType]}`}>
      {children}
    </div>
  );
}

export default Box;