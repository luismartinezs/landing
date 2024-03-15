import React from 'react';
// Import your logo or use an inline SVG

const Footer = () => {
  return (
    <footer className="w-full bg-white py-8">
      <div className="container mx-auto px-4 md:flex md:justify-start md:items-center gap-32">
        <div className="mb-6 md:mb-0">
          <img src="shipfast-logo.webp" alt="ShipFast Logo" className="w-12 h-12 mb-2" /> {/* Adjust size as needed */}
          <p className="text-gray-600 text-sm">Ship your startup in days, not weeks</p>
          <p className="text-gray-600 text-sm mt-2">Copyright © 2023 - All rights reserved</p>
        </div>
        <div>
          <h6 className="font-semibold text-gray-700 uppercase mb-2">Links</h6>
          <ul className="text-gray-600 text-sm">
            <li className="mb-2">Support</li>
            <li className="mb-2">Pricing</li>
            <li className="mb-2">Affiliates</li>
          </ul>
        </div>
        <div>
          <h6 className="font-semibold text-gray-700 uppercase mb-2">Legal</h6>
          <ul className="text-gray-600 text-sm">
            <li className="mb-2">Terms of service</li>
            <li className="mb-2">Privacy policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer


