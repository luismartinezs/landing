import React from 'react';

const Header = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a className="font-bold text-xl text-purple-600" href="/">
          ShipFast
        </a>
        <div className="flex space-x-4">
          <a className="text-gray-600 hover:text-gray-900" href="/pricing">Pricing</a>
          <a className="text-gray-600 hover:text-gray-900" href="/reviews">Reviews</a>
          <a className="text-gray-600 hover:text-gray-900" href="/faq">FAQ</a>
        </div>
        <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Header;
