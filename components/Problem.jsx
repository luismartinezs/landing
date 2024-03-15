import React from 'react';

const Problem = () => {
  return (
    <div className="bg-gray-800 text-white text-center p-10">
      <h2 className="text-4xl font-bold mb-4">
        80% of startups fail because founders never launch
      </h2>
      <p className="mb-6">
        Emails, DNS records, user authentication... There's so much going on.
      </p>
      <div className="flex justify-center items-center space-x-4">
        <div className="flex flex-col items-center">
          <span className="text-2xl">😰</span>
          <span className="text-sm mt-2">8 hrs to add Stripe</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl">😓</span>
          <span className="text-sm mt-2">Struggle to find time</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl">😌</span>
          <span className="text-sm mt-2">Quit project</span>
        </div>
      </div>
    </div>
  );
};

export default Problem;
