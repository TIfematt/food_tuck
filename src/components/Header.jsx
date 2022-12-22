import React from 'react';
import "./Header.css";

function Header() {
  const menuList = ['Home', 'Menu', 'Blog', 'Pages', 'About', 'Shop', 'Contact' ]
  const menuListt = menuList.map(key =>{
    return (
      <ul>
        <li className='navlist'>{key}</li>
      </ul>
    )
  });
  return (
    <div className='header'>
      <div className='logo'>
        <h3>Foodtuck</h3>
      </div>
      <nav className='nav'>
        {menuListt}
      </nav>
    </div>
  )
}

export default Header
