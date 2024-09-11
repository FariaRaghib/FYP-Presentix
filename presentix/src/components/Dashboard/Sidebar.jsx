import React from 'react';
import { sidebar_menu } from '../../data/constant';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar_main'>
      {sidebar_menu.map((menu, index) => (
        <ul key={index}>
          <li className={`${menu.link === window.location.pathname ? 'active' : ''} sidebar_menu_item w-full`}>
            <NavLink to={menu.link} >
              <i className={`${menu.icon} mr-2`} />
              {menu.menu_item}
            </NavLink>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Sidebar;
