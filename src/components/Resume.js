import React from 'react';
import resumePDF from '../assets/Resume.pdf';


const Resume = () => {
  return (
    <div className="card-container">
      <div className="card-content">
        <h2 className="text-xl font-bold mb-2">Resume</h2>
        <div className="flex flex-col items-center mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-black font-bold py-2 px-4 rounded mb-2"
            onClick={() => window.open(resumePDF, '_blank')}
          >
            Open Preview
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-black font-bold py-2 px-4 rounded"
            onClick={() => window.open(resumePDF, '_blank')}
          >
            Download Resume
          </button>
        </div>
        <div className="h-screen-1/2 border border-gray-400 mb-4">
          <embed src={resumePDF} type="application/pdf" width="100%" height="100%" />
        </div>
        <ul>
          {/* <li>Proficiency 1</li>
          <li>Proficiency 2</li>
          <li>Proficiency 3</li>
          <li>Proficiency 4</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Resume;
