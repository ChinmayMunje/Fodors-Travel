import React from 'react'
import '../Footer/footer.css'
import { Link } from 'react-router-dom'
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PlaceIcon from '@mui/icons-material/Place';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {

  const year = new Date().getFullYear();

  const quick__links = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/about",
      display: "About",
    },
    {
      path: "/tours",
      display: "Tours",
    },
  ];


  const quick__links2 = [
    {
      path: "/gallery",
      display: "Gallery",
    },
    {
      path: "/login",
      display: "Login",
    },
    {
      path: "/register",
      display: "Register",
    },
  ];

  return (
    <>
      <footer className='footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3'>
              <div className='logo'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOfkCKs1BIGqPnNSJZha-rsAF9K__erG54Yw&usqp=CAU' alt='logo_Img' />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className='social__links d-flex align-items-center gap-4'>
                  <span>
                    <Link to="/"><YouTubeIcon /></Link>
                  </span>
                  <span>
                    <Link to="/"><FacebookIcon /></Link>
                  </span>
                  <span>
                    <Link to="/"><TwitterIcon /></Link>
                  </span>
                  <span>
                    <Link to="/"><InstagramIcon /></Link>
                  </span>
                </div>

              </div>
            </div>

            <div className='col-lg-3'>
              <h5 className='footer__link-title'>Discover</h5>

              <div className='listgroup footer__quick-links'>
                {quick__links.map((item, index) => {
                  return (
                    <div key={index} className='ps-0 border-0'>
                      <Link to={item.path}>{item.display}</Link>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className='col-lg-3'>
              <h5 className='footer__link-title'>Discover</h5>

              <div className='listgroup footer__quick-links'>
                {quick__links2.map((item, index) => {
                  return (
                    <div key={index} className='ps-0 border-0'>
                      <Link to={item.path}>{item.display}</Link>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className='col-lg-3'>
              <h5 className='footer__link-title'>Contact</h5>

              <div className='listgroup footer__quick-links'>

                <div className='ps-0 border-0 d-flex align-items-center gap-3'>
                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span><PlaceIcon /></span>
                    Address:
                  </h6>
                  <p className='mb-0'>Syhlet, Australia</p>
                </div>


                <div className='ps-0 border-0 d-flex align-items-center gap-3'>
                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span><MailOutlineIcon /></span>
                    Email:
                  </h6>
                  <p className='mb-0'>joshnDoe@gmail.com</p>
                </div>



                <div className='ps-0 border-0 d-flex align-items-center gap-3'>
                  <h6 className='mb-0 d-flex align-items-center gap-2'>
                    <span><PhoneIcon /></span>
                    Phone:
                  </h6>
                  <p className='mb-0'>+0217-764538</p>
                </div>
              </div>
            </div>

            <div className='col-lg-12 text-center pt-5'>
              <p className='copyright'>CopyRight {year}, design and Developed by Chinmay Munje. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer