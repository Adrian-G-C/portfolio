import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-bg py-4">
      <div className="container mx-auto flex justify-center items-center">
        <a href="https://github.com/Adrian-G-C" className="footer-link">
          <i className="fab fa-github" style={{ color: '#ffffff' }}></i>
        </a>
        <a href="https://www.linkedin.com/in/adrian-g-ciocan/" className="footer-link">
          <i className="fab fa-linkedin" style={{ color: '#ffffff' }}></i>
        </a>
        <a href="https://www.instagram.com/adrian_maybe_adi/" className="footer-link">
          <i className="fab fa-instagram" style={{ color: '#ffffff' }}></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
