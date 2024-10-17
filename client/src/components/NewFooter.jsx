import React from 'react'
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const NewFooter = () => {
  return (
    <div className='bg-slate-100 text-gray-500 p-10 leading-10'>
        <div className='grid grid-cols-3 font-sans text-lg leading-10 '>
            <div>
                <ul>
                    <li className='text-green-900'><b>Support</b></li>
                    <li>Report a Bug</li>
                    <li>Feedback</li>
                    <li>Blogs</li>
                    <li>Source Code</li>

                </ul>
            </div>
            <div>
                <ul>
                    <li className='text-green-900'><b>Useful Links</b></li>
                    <li>Hire for Projects</li>
                    <li>Connect</li>
                    <li>Freelance Services</li>
                    <li>FAQs</li>

                </ul>
            </div>
            <div>
                <ul>
                    <li className='text-green-900'><b>Follow Me</b></li>
                    <li><a href="https://x.com/wasted_Coder" className="text-black hover:text-gray-600"><XIcon size={24}/></a> Twitter</li>
                    <li><a href="https://github.com/SanDevil23" className="text-black hover:text-gray-600"><GitHubIcon size={24} /></a> Github</li>
                    <li><a href="https://www.linkedin.com/in/sankalp-adhya-67914621b/" className="text-black hover:text-gray-600"><LinkedInIcon size={24} /></a> LinkedIn</li>
                    <li><a href="https://www.instagram.com/sankalp.23/" className="text-black hover:text-gray-600"><InstagramIcon size={24} /></a> Instagram</li>
                </ul>
            </div>
        </div>
        
        <div>
            <p className='text-green-950 font-semibold'>&copy; 2024 SanDevil23 Github.com All rights reserved.</p>
        </div>
      
    </div>
  )
}

export default NewFooter
