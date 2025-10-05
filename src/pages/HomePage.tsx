import React from 'react';

const HomePage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center p-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
          Welcome to The New Townhouse Dashboard
        </h1>
        <p className="text-lg md:text-xl font-raleway text-gray-300">
          Your modular homebuying tools start here
        </p>
      </div>
    </div>
  );
};

export default HomePage;