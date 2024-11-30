import React from 'react';

const Projects = () => {
  const projects = [
    {
      img: '/assets/project-11.png',
      title: 'E-Commerce Platform',
      github: 'https://github.com/SRIDHARKK37/Consultancy.git',
      demo: 'https://united-aqua-tec.vercel.app/',
      description: 'Full-stack e-commerce application built with MERN stack'
    },
    {
      img: '/assets/project-12.webp',
      title: 'Password Generator',
      github: 'https://github.com/SRIDHARKK37/random-password-generator.git',
      demo: 'https://password-generator-demo.vercel.app/',
      description: 'React-based secure password generator with customization options'
    },
    {
      img: '/assets/project-13.png',
      title: 'Task Management App',
      github: 'https://github.com/yourusername/task-manager',
      demo: 'https://task-manager-demo.vercel.app',
      description: 'Full-stack task management application with user authentication'
    }
  ];

  const handleProjectClick = (url) => {
    if (url) window.location.href = url;
  };

  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {projects.map((project, index) => (
            <div key={index} className="details-container color-container">
              <div className="article-container">
                <img src={project.img} alt={`Project ${index + 1}`} className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">{project.title}</h2>
              <div className="btn-container">
                <button 
                  className="btn btn-color-2 project-btn" 
                  onClick={() => handleProjectClick(project.github)}
                  disabled={!project.github}
                >
                  Github
                </button>
                <button 
                  className="btn btn-color-2 project-btn" 
                  onClick={() => handleProjectClick(project.demo)}
                  disabled={!project.demo}
                >
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img
        src="/assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => window.location.href='./#contact'}
      />
    </section>
  );
};

export default Projects; 