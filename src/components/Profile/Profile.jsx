import React from 'react';

const Profile = () => {
  const handleCVDownload = () => {
    window.open('/assets/resume nt.pdf');
  };

  const handleSocialClick = (url) => {
    window.location.href = url;
  };

  return (
    <section id="profile">
      <div className="section__pic-container">
        <img 
          src="/assets/profile img.png" 
          className="centerImage" 
          alt="SUDHIR G profile picture" 
          style={{ float: 'left' }}
        />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">SUDHIR</h1>
        <p className="section__text__p2">ASPIRING FULL-STACK DEVELOPER</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={handleCVDownload}
          >
            Download CV
          </button>
          <button 
            className="btn btn-color-1" 
            onClick={() => handleSocialClick('./#contact')}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src="/assets/linkedin.png"
            alt="My LinkedIn profile"
            className="icon"
            onClick={() => handleSocialClick('http://linkedin.com/in/sudhir-g-233a4424b')}
          />
          <img
            src="/assets/github.png"
            alt="My Github profile"
            className="icon"
            onClick={() => handleSocialClick('https://github.com/g-sudhir')}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile; 