import React from 'react'

import './MainMenu.scss'

const menuItems = [
  {
    label: 'dashboard',
  },
  {
    label: 'store',
  },
  {
    label: 'orders',
  },
  {
    label: 'account',
  },
]

const MainMenu = () => (
  <ul className="o-main-menu">
    {menuItems.map(({ label }) => (
      <li className="c-menu-item">
        <a className="c-main-menu-link" href="#">
          {label}
        </a>
      </li>
    ))}
  </ul>
)

export default MainMenu
