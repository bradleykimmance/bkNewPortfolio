import React from 'react';

type AnimatedTextProperties = {
  readonly text: string;
};

const AnimatedText: React.FC<AnimatedTextProperties> = ({
  text,
}: AnimatedTextProperties) => {
  return (
    <>
      {text.split('').map((letter: string) => (
        <span
          className="inline-block hover:scale-115 transition-transform duration-75"
          key={crypto.randomUUID()}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </>
  );
};

export default AnimatedText;
