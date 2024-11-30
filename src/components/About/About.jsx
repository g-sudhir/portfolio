import React from 'react';

const About = () => {
  const educationDetails = {
    degree: 'B.E. in Computer Science and Engineering',
    institution: 'Kongu Engineering College'
  };

  const aboutText = `Passionate about creating seamless web applications with both frontend and backend technologies. 
  Currently exploring the vast world of web development with a focus on modern JavaScript frameworks, responsive design, 
  and server-side architecture. I enjoy solving complex problems and turning ideas into functional, user-friendly applications. 
  My goal is to become a proficient full-stack developer who can build scalable and efficient web solutions.`;

  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img src="/assets/about img.png" alt="Profile picture" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img 
                src="/assets/experience.png" 
                alt="Experience icon" 
                className="icon" 
              />
              <h3>Skills in Progress</h3>
              <p>
                <br />
                Frontend & Backend Development, Database Management
              </p>
            </div>
            <div className="details-container">
              <img 
                src="/assets/education.png" 
                alt="Education icon" 
                className="icon" 
              />
              <h3>Education</h3>
              <p>{educationDetails.degree}</p>
              <p>{educationDetails.institution}</p>
            </div>
          </div>
          <div className="text-container">
            <p>{aboutText}</p>
          </div>
        </div>
      </div>
      <img
        src="/assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => window.location.href='./#experience'}
      />
    </section>
  );
};

export default About; 