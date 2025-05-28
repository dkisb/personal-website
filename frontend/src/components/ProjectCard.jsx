import React, { useState } from 'react';

const ProjectCard = ({ title, image, description, tech, github, demo, isNew }) => {
  const [tags, setTags] = useState(tech);

  const handleTagEdit = (index, value) => {
    const updated = [...tags];
    updated[index] = value;
    setTags(updated);
  };

  const handleCardClick = () => {
    window.open(demo || github, '_blank');
  };

  return (
    <div
      className="card bg-base-100 w-96 shadow-sm cursor-pointer transition-transform hover:scale-[1.02]"
      onClick={handleCardClick}
    >
      <figure>
        <img src={image} alt={title} className="h-60 object-cover w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          {isNew && <div className="badge badge-secondary">NEW</div>}
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-start flex-wrap gap-2 mt-2">
          {tags.map((tag, i) => (
            <input
              key={i}
              type="text"
              value={tag}
              onChange={(e) => handleTagEdit(i, e.target.value)}
              className="input input-xs input-bordered w-auto"
              onClick={(e) => e.stopPropagation()}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
