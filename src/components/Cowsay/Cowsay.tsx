import React, { FC } from 'react';
// @ts-ignore
import cowsay from 'cowsay-browser';

type CowsayProps = {
  text: string;
  think?: boolean;
};

const Cowsay: FC<CowsayProps> = ({ text, think = false, children }) => {
  const getText = () => {
    const content = children || text;
    if (content === undefined) {
      return 'Cowsay needs some text! Please add some to the text prop or as children.';
    } else if (typeof content !== 'string') {
      return 'Cowsay can only accept a string x.x';
    }
    return content;
  };

  const getAction = () => {
    return think ? 'think' : 'say';
  };

  const getOptions = () => {
    return Object.assign(
      {
        text: getText()
      },
      { W: 40 }
    );
  };

  const cow = cowsay[getAction()](getOptions());
  return <pre style={{ textAlign: 'left' }}>{cow}</pre>;
};
export default Cowsay;
