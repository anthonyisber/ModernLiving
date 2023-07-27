import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsDiscord, BsFacebook, BsTwitter, BsWhatsapp } from 'react-icons/bs';

const Footer = () => {
  const location = useLocation();

  if (location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/dashboard') {
    return null;
  }


  return (
    <footer >
      <div className='p-10 bg-gray-800 text-gray-200'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
            <div className='mb-5'>
              <h4 className='text-2xl pb-4 text-cyan-300'>Modern Living</h4>
              <p className='text-gray-500'>
                ModerLiving House rental website<br></br>
                since 2023<br></br>
                Lebanon<br></br>
                <strong>Phone:</strong>+961 76 102700<br></br>
                <strong>Email:</strong>ModernLiving@gmail.com<br></br>
              </p>

            </div>
            <div className='mb-5'>
              <h4 className='text-cyan-300 pb-4'>Useful Links</h4>
              <ul className='text-gray-500'>
                <li className='pb-4'><Link to="/" className='hover:text-cyan-300'>Home</Link></li>
                <li className='pb-4'><Link to="/aboutus" className='hover:text-cyan-300'>About Us</Link></li>
                <li className='pb-4'><Link to="/tos" className='hover:text-cyan-300'>Terms of Sevices</Link></li>
                <li className='pb-4'><Link to="/privacy" className='hover:text-cyan-300'>Privacy Policy</Link></li>
              </ul>
            </div>
            <div className='mb-5'>
              <h4 className='text-cyan-300 pb-4'>Our Properties</h4>
              <ul className='text-gray-500'>
                <li className='pb-4'><a href='#' className='hover:text-cyan-300'>Villas</a></li>
                <li className='pb-4'><a href='#' className='hover:text-cyan-300'>Apartment</a></li>
                <li className='pb-4'><a href='#' className='hover:text-cyan-300'>Small houses</a></li>

              </ul>
            </div>
            <div className='mb-5  '>
              <h4 className='pb-4 text-cyan-300'>Join Our Socials</h4>
              <p className='text-gray-500 pb-2'>Join us to be one of The Modern Living family</p>
              <div className='flex flex-row gap-5'>
                <Link > <BsDiscord /></Link>
                <Link > <BsFacebook /></Link>
                <Link > <BsTwitter /></Link>
                <Link > <BsWhatsapp /></Link>
              </div>
            </div>


          </div>
        </div>

      </div>




    </footer>
  );
};

export default Footer;
