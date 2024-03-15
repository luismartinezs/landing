// ref https://shipfa.st/docs/components/hero
import React from 'react';
import ButtonLead from '@/components/ButtonLead';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 p-4">
      <span className="text-xs text-gray-500">Product of the day</span>
      <h1 className="mt-2 text-4xl font-bold text-center text-gray-900">Ship your startup in days, not weeks</h1>
      <p className="mt-4 text-center text-gray-600">
        The NextJS boilerplate with all you need to build your SaaS, AI tool, or any other web app. From idea to production in 5 minutes.
      </p>
      <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
        Get ShipFast
      </button>
      <div className="flex items-center mt-4">
        {/* Icons would be imported SVGs or components */}
        <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
        <span className="ml-2 text-gray-600">32 makers ship faster</span>
      </div>
      <ButtonLead />
    </div>
  );
};

export default Hero;
