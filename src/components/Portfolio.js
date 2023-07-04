import React from 'react';
import project1Thumbnail from '../assets/project1.png';
// import project2Thumbnail from '../images/project2-thumbnail.png';

const projects = [
  {
    id: 1,
    title: 'Hoop Wizard',
    image: project1Thumbnail,
    github: 'https://github.com/truck-norris/hoop-wizard',
  },
  // {
  //   id: 2,
  //   title: 'Project 2',
  //   image: project2Thumbnail,
  //   github: '',
  // },

];

const Portfolio = () => {
  return (
    <div className="card-container">
      <div className="card-content">
        <h2 className="text-xl font-bold mb-2">Portfolio</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {projects.map((project) => (
            <div key={project.id} className="cursor-pointer">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} className="w-full rounded-lg" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
