import React from 'react';

const CTA = () => {
  return (
    <div
      className="relative flex items-center justify-center w-full h-screen text-white bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(https://images.unsplash.com/photo-1710267224190-39b059315983?q=80&w=1748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)` }}
    >
      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50" />

      {/* Content */}
      <div className="z-10 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold mb-4">
          Boost your app, launch, earn
        </h1>
        <p className="mb-8">
          Don&apos;t waste time integrating APIs or designing a pricing section...
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded">
          Get ShipFast
        </button>
      </div>
    </div>
  );
};

export default CTA;