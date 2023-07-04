import React from 'react';
import profileImage from '../assets/sticker.png';

const AboutMe = () => {
  return (
    <div className="card-container">
      <div className="card-content flex flex-col center">
        <div className="flex items-center justify-center">
          <img
            src={profileImage}
            alt="Profile"
            className="w-24 h-auto max-w-30% rounded-30% mb-4"
            style={{ maxWidth: '30%' }}
          />
        </div>
        <h2 className="text-xl font-bold mb-2">About Me</h2>
        <p className="text-gray-700">
          Hi, my name is Adrian. 
          I am a recent transplant to the world of programming.
          With a backround in home remodeling, it's safe to say I am treading into a new world. I am excitred to begin my journery into coding and hope
          to expand my knowledge during and after my coding bootcamp. 
        </p>
      </div>
    </div>
  );
};

export default AboutMe;