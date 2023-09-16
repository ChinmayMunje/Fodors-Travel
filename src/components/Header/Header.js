import React, { useEffect, useRef, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./header.css"
import MenuIcon from '@mui/icons-material/Menu';
import { AuthContext } from './../../context/AuthContext';

const Header = () => {

  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);

  const logOut = () => {
    dispatch({ type: 'LOGOUT' });
    navigate("/");
  }

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header')
      } else {
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(() => {
    stickyHeaderFunc()
    return window.removeEventListener('scroll', stickyHeaderFunc);
  }, [])

  const toggleMenu = ()=> menuRef.current.classList.toggle('show__menu')

  return (
    <>
      <header className='header' style={{}} ref={headerRef}>
        <div className='container'>
          <div className='row'>
            <div className='d-flex align-items-center justify-content-between'>
              <div className='logo'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOfkCKs1BIGqPnNSJZha-rsAF9K__erG54Yw&usqp=CAU' alt='logo_Img' />
              </div>


              <div className='navigation' ref={menuRef} onClick={toggleMenu}>
                <ul className='menu d-flex align-items-center gap-5'>
                  <li className='nav__item'>
                    <Link to="/" className={navClass => navClass.isActive ? "active__Link" : ""}>Home</Link>
                  </li>
                  <li className='nav__item'>
                    <Link to="/about" className={navClass => navClass.isActive ? "active__Link" : ""}>About</Link>
                  </li>
                  <li className='nav__item'>
                    <Link to="/tours" className={navClass => navClass.isActive ? "active__Link" : ""}>Tours</Link>
                  </li>
                </ul>
              </div>


              <div className='nav__right d-flex align-items-right gap-4'>
                <div className='nav__btn align-items-right gap-4'>
                  {user ?
                    <>
                      <h5 className='mb-0'>{user.username}</h5>
                      <button className='btn btn-dark' onClick={logOut}>Logout</button>
                    </> :
                    (
                      <>
                        <button className='btn'>
                          <Link to="/login">Login</Link>
                        </button>

                        <button className='btn' style={{ backgroundColor: "#e28743" }}>
                          <Link to="/register" style={{ color: "black", fontWeight: "bold" }}>Register</Link>
                        </button>
                      </>
                    )}
                </div>

                <span className='mobile_menu' onClick={toggleMenu}>
                  <i className='ri-menu-line'><MenuIcon /></i>
                </span>
              </div>
            </div>


          </div>
        </div>
      </header>
    </>
  )
}

export default Header