import React from 'react';
import PropTypes from 'prop-types';

const BetterIcon = ({ icon, color }) => {
  // Create a lighter tint of the provided color
  // This is a simple approximation using the `color` prop with lower opacity
  const lighterColor = `${color}33`; // `33` is hex for 20% opacity
  const size = '30px';

  return (
    <div className="flex items-center justify-center">
      <div
        className="rounded-full p-4 flex items-center justify-center"
        style={{
          backgroundColor: lighterColor,
          color: color,
          width: size,
          height: size,
        }}
      >
        {/* Assuming `icon` is a JSX element or string. If it's an SVG, it can be rendered directly */}
        {icon}
      </div>
    </div>
  );
};

BetterIcon.propTypes = {
  icon: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
};

export default BetterIcon;
