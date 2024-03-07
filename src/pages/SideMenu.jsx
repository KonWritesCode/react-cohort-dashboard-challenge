import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import HomeIcon from '../components/Icons/HomeIcon';
import ProfileIcon from '../components/Icons/ProfileIcon';
import { DataContext } from "../App"

function SideMenu() {
  //const dataContext = useContext(DataContext)
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  let iconHovered = ''
  let hoveredButton = (buttonName) => {
    return (activeButton === buttonName || iconHovered === buttonName) 
      ? true 
      : false
  }

  return (
    <aside className="sidebar">
      <div className="buttons-container">
        <Link className='link' to="/">
        <button 
          className={`menu-button${activeButton === 'home' ? '-active' : ''}`}
          onClick={() => handleClick('home')}
        >
          <HomeIcon active={hoveredButton('home')}/>
          Home
        </button>
        </Link>
        <Link className='link' to="/profile">
        <button 
          className={`menu-button${activeButton === 'profile' ? '-active' : ''}`}
          onClick={() => handleClick('profile')}
        >
          <ProfileIcon active={hoveredButton('profile')}/>
          Profile
        </button>
        </Link>
      </div>
    </aside>
  );
}

export default SideMenu