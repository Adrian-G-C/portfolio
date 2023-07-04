import React from 'react';

const Portfolio = () => {
  return (
    <section>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4">Portfolio</h2>
        <div className="grid grid-cols-2 gap-4">
          {/* Replace with your project images */}
          <div>
            <a href="link-to-deployed-app" target="_blank" rel="noopener noreferrer">
              <img src="project-image-1.jpg" alt="Project 1" className="w-full" />
            </a>
            <div className="text-center mt-2">
              <a
                href="link-to-deployed-app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View App
              </a>{' '}
              |{' '}
              <a
                href="link-to-github-repo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                GitHub Repo
              </a>
            </div>
          </div>
          {/* Repeat for other projects */}
          {/* ... */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
