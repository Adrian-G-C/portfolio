import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'Api Project',
      deployedLink: 'https://truck-norris.github.io/hoop-wizard/',
      githubLink: 'https://github.com/truck-norris/hoop-wizard',
      screenshot: '../assets/resume.png',
    },
    // {
    //   title: 'Project 2',
    //   description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    //   deployedLink: 'https://example.com/project2',
    //   githubLink: 'https://github.com/user/project2',
    //   screenshot: '/images/project2-screenshot.png', // Local image path for project screenshot
    // },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Portfolio</h2>
      <div className="grid grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-100 p-4">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <img src={project.screenshot} alt={project.title} className="mb-4" />
            <p className="mb-4">{project.description}</p>
            <div className="flex space-x-4">
              <a
                href={project.deployedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Visit
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;