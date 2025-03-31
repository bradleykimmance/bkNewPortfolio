import reactLogo from './assets/react.svg';
import { useState } from 'react';
import './App.css';
import Home from './components/Home.tsx';
import Layout from './components/Layout.tsx';

const App = () => {
  return (
    <>
      <div>
        <a
          href="https://vite.dev"
          rel="noreferrer"
          target="_blank"
        >
          <img
            alt="Vite logo"
            className="logo"
            src="./vite.svg"
          />
        </a>
        <a
          href="https://react.dev"
          rel="noreferrer"
          target="_blank"
        >
          <img
            alt="React logo"
            className="logo react"
            src={reactLogo}
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => setCount((counter) => counter + 1)}
          type="button"
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
      <Layout>
        <Home />
      </Layout>
  );
};

export default App;
