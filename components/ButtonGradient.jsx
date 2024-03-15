import React from 'react';

const ButtonGradient = ({ text = 'Gradient Button', gradientColors = ['#f75990', '#8456ec'] }) => {
  // Customize your gradient and animation by adjusting these values
  const backgroundAnimation = `bg-gradient-to-r from-${gradientColors[0]} to-${gradientColors[1]} hover:from-${gradientColors[1]} hover:to-${gradientColors[0]}`;

  return (
    <button
      className={`text-white font-bold py-2 px-4 rounded-full animate-gradient-x ${backgroundAnimation}`}
      style={{
        backgroundImage: `linear-gradient(90deg, ${gradientColors.join(', ')})`,
      }}
    >
      {text}
    </button>
  );
};

export default ButtonGradient;

// Add custom CSS for the animation in your global styles
// .animate-gradient-x {
//   background-size: 200% 200%;
//   animation: gradientX 8s ease infinite;
// }
// @keyframes gradientX {
//   0% { background-position: 100% 50%; }
//   50% { background-position: 0% 50%; }
//   100% { background-position: 100% 50%; }
// }
