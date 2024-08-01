import React from 'react';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
  
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-7">
      <div className="flex items-center justify-evenly max-w-4xl mx-auto">
        <p>&copy; 2024 @SanDevil23 Github.com All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://x.com/wasted_Coder" className="text-gray-300 hover:text-white">
            <XIcon size={24} />
          </a>
          <a href="https://github.com/SanDevil23" className="text-gray-300 hover:text-white">
            <GitHubIcon size={24} />
          </a>
          <a href="https://www.linkedin.com/in/sankalp-adhya-67914621b/" className="text-gray-300 hover:text-white">
            <LinkedInIcon size={24} />
          </a>
          <a href="/" className="text-gray-300 hover:text-white">
            <InstagramIcon size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;