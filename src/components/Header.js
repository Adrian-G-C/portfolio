import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">Adrian Ciocan</h1>
        {/* Navigation component will be added here */}
      </div>
    </header>
  );
};

export default Header;
