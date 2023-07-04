import React from 'react';

const Resume = () => {
  const resumeUrl = 'https://docs.google.com/document/d/1u9s6m3kmQ4X1o0LwirGHiY5Cz2AobuYkp2XprRB6TaE/edit?usp=sharing';
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Resume</h2>
      <div className="flex justify-center items-center mb-4">
        <iframe
          src={`https://drive.google.com/file/d/${resumeUrl}/preview`}
          title="Resume Preview"
          width="640"
          height="480"
        ></iframe>
      </div>
      <div className="flex justify-center">
        <a
          href={`https://drive.google.com/uc?export=download&id=${resumeUrl}`}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
