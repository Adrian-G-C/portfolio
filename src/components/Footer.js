import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-center">
        <a
          href="link-to-github-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 mx-2"
        >
          GitHub
        </a>
        <a
          href="link-to-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 mx-2"
        >
          LinkedIn
        </a>
        <a
          href="link-to-instagram-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 mx-2"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
