// src/components/Portfolio.jsx
import Project from './Project';

const Portfolio = () => {
  const projects = [
    {
      title: 'Dad-abase',
      image: './src/assets/images/dad-abase.jpeg',
      deployLink: 'https://dad-abase.onrender.com',
      repoLink: 'https://github.com/JohnKihm/Dad-abase',
    },
    {
      title: 'Cinema Quiz',
      image: './src/assets/images/cinema-quiz.jpeg',
      deployLink: 'https://excervantes.github.io/cinema-quiz/',
      repoLink: 'https://github.com/EXCervantes/cinema-quiz',
    },
    {
      title: 'PWA Text Editor',
      image: './src/assets/images/PWA-text-editor.jpeg',
      deployLink: 'https://pwa-text-editor-challenge-in96.onrender.com',
      repoLink: 'https://github.com/Ben-jamin05/PWA-Text-Editor-Challenge',
    },
    {
      title: 'README Generator',
      image: './src/assets/images/README-generator.jpeg',
      deployLink: 'https://github.com/Ben-jamin05/README-generator-challenge',
      repoLink: 'https://github.com/Ben-jamin05/README-generator-challenge',
    },
    {
      title: 'Social Network API',
      image: './src/assets/images/social-network-api.jpeg',
      deployLink: 'https://github.com/Ben-jamin05/Social-Network-API-Challenge',
      repoLink: 'https://github.com/Ben-jamin05/Social-Network-API-Challenge',
    },
    {
      title: 'Note Taker',
      image: './src/assets/images/note-taker.jpeg',
      deployLink: 'https://note-taker-challenge-kn1o.onrender.com',
      repoLink: 'https://github.com/Ben-jamin05/Note-Taker-Challenge',
    },
  ];

  return (
    <section className='projects'>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </section>
  );
};

export default Portfolio;
