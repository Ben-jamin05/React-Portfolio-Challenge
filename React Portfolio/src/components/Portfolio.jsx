// src/components/Portfolio.jsx
import Project from './Project';

const Portfolio = () => {
  const projects = [
    {
      title: 'Project 1',
      image: 'path/to/image1.jpg',
      deployLink: 'https://deployedapp1.com',
      repoLink: 'https://github.com/username/project1',
    },
    {
      title: 'Project 1',
      image: 'path/to/image1.jpg',
      deployLink: 'https://deployedapp1.com',
      repoLink: 'https://github.com/username/project1',
    },
    {
      title: 'Project 1',
      image: 'path/to/image1.jpg',
      deployLink: 'https://deployedapp1.com',
      repoLink: 'https://github.com/username/project1',
    },
    {
      title: 'Project 1',
      image: 'path/to/image1.jpg',
      deployLink: 'https://deployedapp1.com',
      repoLink: 'https://github.com/username/project1',
    },
    {
      title: 'Project 1',
      image: 'path/to/image1.jpg',
      deployLink: 'https://deployedapp1.com',
      repoLink: 'https://github.com/username/project1',
    },
    {
      title: 'Project 1',
      image: 'path/to/image1.jpg',
      deployLink: 'https://deployedapp1.com',
      repoLink: 'https://github.com/username/project1',
    },
  ];

  return (
    <section>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
};

export default Portfolio;
