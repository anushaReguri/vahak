import React,{useEffect} from 'react';
import menuIcon from '../assets/icons/menuIcon.png'
import profileIcon from '../assets/icons/profileTop.png'
import carLogo from '../assets/icons/carLogo.png'

function Header(props) {
const pathname = window.location.href
  return (
    <div className='p-10 card header'>
      <img
                      className="pointer m-l-10 float-left"
                        title="Menu"
                        src={menuIcon}
                        alt={'menu-icon'}
                    ></img>
                    {pathname.split('/').reverse()[0]==='honda'&& <img
                        className="pointer"
                        src={carLogo}
                        alt={'logo'}
                    ></img>}
                     <img
                        className="pointer m-r-10 float-right m-t-5"
                        src={profileIcon}
                        alt={'profile-icon'}
                    ></img>
    </div>
  )
}

export default Header
