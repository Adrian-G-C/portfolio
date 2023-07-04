import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-bg py-4">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center">
        <a href="https://github.com" className="footer-link">
          <img
            src="https://example.com/github-logo.png"
            alt="GitHub Logo"
            className="inline-block h-6 w-6 mb-2 lg:mb-0 lg:mr-2"
          />
        </a>
        <a href="https://linkedin.com" className="footer-link">
          <img
            src="https://example.com/linkedin-logo.png"
            alt="LinkedIn Logo"
            className="inline-block h-6 w-6 mb-2 lg:mb-0 mx-2"
          />
        </a>
        <a href="https://instagram.com" className="footer-link">
          <img
            src="https://example.com/instagram-logo.png"
            alt="Instagram Logo"
            className="inline-block h-6 w-6 mb-2 lg:mb-0 lg:ml-2"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
