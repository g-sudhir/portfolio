import React from 'react';

const Experience = () => {
  const proficiencies = [
    { title: 'Frontend Development', level: 'Intermediate' },
    { title: 'Backend Development', level: 'Basic' },
    { title: 'Database Management', level: 'Basic' },
    { title: 'UI/UX Design', level: 'Intermediate' }
  ];

  const tools = [
    'React.js (Frontend)',
    'Node.js (Backend)',
    'MongoDB (Database)',
    'Git (Version Control)'
  ];

  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Skills</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Technical Skills</h2>
            <div className="article-container">
              {proficiencies.map((skill, index) => (
                <article key={index}>
                  <img src="/assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>{skill.title}</h3>
                    <p>{skill.level}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Technologies & Tools</h2>
            <div className="article-container">
              {tools.map((tool) => (
                <article key={tool}>
                  <img src="/assets/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>{tool}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => window.location.href='./#projects'}
      />
    </section>
  );
};

export default Experience; 