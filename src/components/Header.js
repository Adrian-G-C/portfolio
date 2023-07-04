import React from 'react';

const Header = () => {
  return (
    <header className="header-bg py-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4">
        <h1 className="text-2xl font-bold text-center lg:text-left lg:mb-0 lg:mr-4 header-text">
          Adrian Ciocan
        </h1>
        {/* Navigation component will be added here */}
      </div>
    </header>
  );
};

export default Header;
