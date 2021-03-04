import React from 'react'

import './Header.scss'

import KaboLogo from '@components/KaboLogo'
import MainMenu from '@components/MainMenu'

const Header = () => (
  <div className="o-header">
    <KaboLogo />
    <MainMenu />
  </div>
)

export default Header
