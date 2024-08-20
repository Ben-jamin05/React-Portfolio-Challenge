// src/components/Project.jsx
const Project = ({ title, image, deployLink, repoLink }) => {
    return (
      <div>
        <h3>{title}</h3>
        <img src={image} alt={title} />
        <p>
          <a href={deployLink} target="_blank" rel="noopener noreferrer">Deployed App</a> | 
          <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </p>
      </div>
    );
  };
  
  export default Project;
  