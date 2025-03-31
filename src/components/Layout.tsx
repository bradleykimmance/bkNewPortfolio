import React from 'react';

type LayoutProperties = {
  readonly children: React.ReactNode;
};

const Layout: React.FC<LayoutProperties> = ({ children }) => {
  return (
    <div className="w-full max-w-[1000px] mx-auto px-4 md:px-6 md:p-0">
      {children}
      <footer className="h-[100px] flex justify-center items-center">
        <p>Built by Bradley Kimmance | {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Layout;
