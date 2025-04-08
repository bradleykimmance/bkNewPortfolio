import { ThemeContext } from '../../contexts/ThemeContext/ThemeContext.ts';
import './Header.css';
import React, { useContext } from 'react';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="sticky top-0 w-full h-[75px] flex justify-between items-center px-5">
      <div className="flex justify-between w-full max-w-[1000px] mx-auto items-center">
        <a href="/">
          <h1 className="cursor-pointer m-0 text-3xl font-bold active:scale-115 transition-transform duration-75">
            BK
          </h1>
        </a>
        <div className="navigation-links">
          <a href="/about">
            <button type="button">About</button>
          </a>
          <a
            className=""
            href="/projects"
          >
            <button type="button">Projects</button>
          </a>
          <a href="/cv">
            <button type="button">CV</button>
          </a>
          <a href="/contact">
            <button type="button">Contact</button>
          </a>
          <button
            onClick={toggleTheme}
            type="button"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
