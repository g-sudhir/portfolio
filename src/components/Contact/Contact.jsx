import React from 'react';

const Contact = () => {
  const contactInfo = [
    {
      type: 'email',
      icon: '/assets/email.png',
      link: 'mailto:sudhirgovindaraj24@gmail.com',
      text: 'sudhirgovindaraj24@gmail.com',
      iconClass: 'email-icon'
    },
    {
      type: 'linkedin',
      icon: '/assets/linkedin.png',
      link: 'http://linkedin.com/in/sudhir-g-233a4424b',
      text: 'LinkedIn'
    }
  ];

  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        {contactInfo.map((info, index) => (
          <div key={index} className="contact-info-container">
            <img 
              src={info.icon} 
              alt={`${info.type} icon`} 
              className={`icon contact-icon ${info.iconClass || ''}`}
            />
            <p>
              <a href={info.link}>{info.text}</a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact; 