import React from 'react';

const Footer = () => {
  const navLinks = [
    { href: '#about', text: 'About' },
    { href: '#experience', text: 'Skills' },
    { href: '#projects', text: 'Projects' },
    { href: '#contact', text: 'Contact' }
  ];

  return (
    <footer>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <p>Copyright &#169; {new Date().getFullYear()} SUDHIR G. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer; 