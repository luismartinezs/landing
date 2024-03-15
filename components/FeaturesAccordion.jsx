"use client"
import React, { useState } from 'react';

const features = [
  {
    title: 'Emails',
    description: 'Send transactional emails, setup your DNS to avoid spam folder (DKIM, DMARC, SPF in subdomain), and listen to webhook to receive & forward emails',
    mediaType: 'image', // or 'video'
    mediaSrc: 'https://file.hstatic.net/200000695275/article/diem-yeu-cua-gear-5_thumbnail_hobi_9a105767aed14847b0818c739f193165_1024x1024.jpg', // replace with your image path
  },
  {
    title: 'Payments',
    description: 'Reprehenderit sunt Lorem est laboris in duis ad pariatur aliquip laboris ullamco cillum adipisicing fugiat.',
    mediaType: 'image',
    mediaSrc: 'https://file.hstatic.net/200000695275/article/beerus-vi-than-huy-diet-dragon-ball_thumbnail_hobi_bb6f6f8008284783b5ac8570948f82d3_1024x1024.jpg', // replace with your image path
  },
  // ... add other features here
];

const FeaturesAccordion = () => {
  const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(0);

  const toggleFeature = (index) => {
    setSelectedFeatureIndex(index === selectedFeatureIndex ? null : index);
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-10">
        All you need to ship your startup in days, not months
      </h2>
      <div className="flex flex-col md:flex-row items-start">
        <div className="space-y-4 w-full md:w-1/2">
          {features.map((feature, index) => (
            <div key={index}>
              <button
                className={`flex items-center justify-between w-full text-left px-4 py-2 ${selectedFeatureIndex === index ? 'text-blue-600' : 'text-gray-800'} hover:text-blue-600 transition-colors duration-300`}
                onClick={() => toggleFeature(index)}
              >
                <span className="font-medium">{feature.title}</span>
                <span>{selectedFeatureIndex === index ? '-' : '+'}</span>
              </button>
              {selectedFeatureIndex === index && (
                <div className="mt-2 px-4 py-2">
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-6">
          {features[selectedFeatureIndex].mediaType === 'image' && (
            <img
              src={features[selectedFeatureIndex].mediaSrc}
              alt={features[selectedFeatureIndex].title}
              className="rounded-lg shadow-lg"
            />
          )}
          {features[selectedFeatureIndex].mediaType === 'video' && (
            <video
              src={features[selectedFeatureIndex].mediaSrc}
              autoPlay
              muted
              loop
              className="rounded-lg shadow-lg"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturesAccordion;
