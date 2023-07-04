import React from 'react';

const AboutMe = () => {
  return (
    <div className="card-container">
      <div className="card-content">
        <img
          src="https://example.com/profile-image.png"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h2 className="text-xl font-bold mb-2">About Me</h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          hendrerit eu risus et tristique. Nullam posuere consectetur ligula,
          eget blandit purus finibus sed. Quisque quis sollicitudin tortor.
          Donec dictum sapien a mi feugiat, et consectetur mauris facilisis.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
