import AnimatedText from '../AnimatedText/AnimatedText.tsx';
import React from 'react';

const Home: React.FC = () => {
  return (
    <section className="grid place-items-center w-full h-[calc(100vh-175px)] mt-0">
      <div className="w-[80%] sm:w-[60%]">
        <h1 className="text-3xl md:text-5xl lg:text-7xl text-left mb-0 md:mb-2 md:text-nowrap lg:text-nowrap">
          <AnimatedText text="Bradley Kimmance." />
        </h1>
        <h1 className="text-xl md:text-2xl text-left">
          <AnimatedText text="Software Engineer." />
        </h1>
        <p className="mb-2 text-left">Based in Biggleswade, United Kingdom.</p>
      </div>
    </section>
  );
};

export default Home;
