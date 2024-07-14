import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/company.png'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import { BsPersonRaisedHand } from "react-icons/bs";

const Navbar = () => {
  
  const [menu,setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-300px";
  }

  return (
    <div className='navbar'>
      {/* <img src={logo} alt="" className='logo'/> */}
      <div className='logo'>Code<span>Era.</span></div>
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li><AnchorLink className='anchor-link' href='#about' offset={150}><p onClick={()=>setMenu("home")}>About</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={100} href='#work'><p onClick={()=>setMenu("work")}>Our Work</p></AnchorLink></li>
        {/* <li><AnchorLink className='anchor-link' offset={50} href='#contact2'><p onClick={()=>setMenu("contact2")}>Contact</p></AnchorLink></li> */}
      </ul>
      <AnchorLink className='anchor-link' offset={0} href='#contact2'>
      <div className="nav-connect">
         Say Hii! <BsPersonRaisedHand size={20}/>

        </div>
        </AnchorLink>
    </div>
  )
}

// {menu==="home"?<img src={underline} alt=''/>:<></>}
// {menu==="services"?<img src={underline} alt=''/>:<></>}
// {menu==="work"?<img src={underline} alt=''/>:<></>}
// {menu==="contact2"?<img src={underline} alt=''/>:<></>}

export default Navbar
