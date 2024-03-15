import React from 'react';

// Dummy avatar URLs - replace these with the actual URLs of customer images
const avatarUrls = [
  '/avatar.jpeg',
  '/avatar.jpeg', '/avatar.jpeg', '/avatar.jpeg', '/avatar.jpeg',
];

const Star = () => (<svg className="text-yellow-400 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
  {/* Inline SVG for star */}
  {/* Repeat this block for each star */}
  <path d="M10 15l-5.878 3.09 1.121-6.545-4.764-4.635 6.522-.949L10 .4l2.999 6.156 6.522.949-4.764 4.635 1.121 6.545z" />
  <path d="M10 15l-5.878 3.09 1.121-6.545-4.764-4.635 6.522-.949L10 .4l2.999 6.156 6.522.949-4.764 4.635 1.121 6.545z" />
  <path d="M10 15l-5.878 3.09 1.121-6.545-4.764-4.635 6.522-.949L10 .4l2.999 6.156 6.522.949-4.764 4.635 1.121 6.545z" />
  <path d="M10 15l-5.878 3.09 1.121-6.545-4.764-4.635 6.522-.949L10 .4l2.999 6.156 6.522.949-4.764 4.635 1.121 6.545z" />
  <path d="M10 15l-5.878 3.09 1.121-6.545-4.764-4.635 6.522-.949L10 .4l2.999 6.156 6.522.949-4.764 4.635 1.121 6.545z" />
</svg>)

const TestimonialsAvatars = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex -space-x-1 overflow-hidden">
        {avatarUrls.map((url, index) => (
          <img
            key={index}
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white ring-inset"
            src={url}
            alt={`Customer ${index + 1}`}
          />
        ))}
      </div>
      <div className="flex justify-start flex-col items-start">
        <div className="flex items-center">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
        <div className="text-gray-600">32 makers ship faster</div>
      </div>
    </div>
  );
};

export default TestimonialsAvatars;
