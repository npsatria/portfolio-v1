import React from 'react';

const ProjectCard = ({ title, description, tags }) => (
  <div className="bg-white p-6 rounded-xl shadow-2xl border border-gray-100 hover:shadow-indigo-500/50 transition duration-300">
    <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <span key={index} className="text-xs font-medium bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default ProjectCard;
