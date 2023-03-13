import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../../images/logobook.png";
import {HiOutlineMenuAlt3} from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/action';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);
  const dispatch = useDispatch();


  const admin=useSelector(state=>state.login.admin);

  const handleLogOut = () => {
    window.localStorage.removeItem('email');
    window.location.pathname = "/book";

  }
  return (
    <nav className='navbar' id = "navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to = "/" className='navbar-brand flex'>
            <img style={{width: '257px'}} width={'257px'} src = {logoImg} alt = "site logo" />
          </Link>
          <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <HiOutlineMenuAlt3 size = {35} style = {{
              color: `${toggleMenu ? "#fff" : "#010101"}`
            }} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav">
            <li className='nav-item'>
              <Link to = "/book" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to = "/about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>about</Link>
            </li>
            {/* { !window.localStorage.getItem('email') ?<> */}
            { admin === ''  ?<>
            <li className='nav-item'>
              <Link to = "/login" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Login</Link>
            </li>
            <li className='nav-item'>
              <Link to = "/register" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Register</Link>
            </li>
            </>
            :
            <>
            <li className='nav-item'>
              <Link to = "/account" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Account</Link>
            </li>
            <li className='nav-item'>
              <Link  onClick={()=>dispatch(logout())}  className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Logout</Link>
              {/* <Link  onClick={handleLogOut} className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Logout</Link> */}
            </li>
            </>
}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar