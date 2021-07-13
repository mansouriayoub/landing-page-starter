import React, { ReactNode } from 'react';

type IBackgroundProps = {
  children: ReactNode;
  color: string;
};

const Background = (props: IBackgroundProps) => {
  return <div className={props.color}>{props.children}</div>
};

export { Background };
