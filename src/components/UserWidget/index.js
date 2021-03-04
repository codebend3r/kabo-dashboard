import React from 'react'

import DogImage from '@images/tipsi-dot.jpg'

import './UserWidget.scss'

const UserWidget = () => (
  <div className="o-user-widget">
    <h3>Chester's Dashboard</h3>
    <img className="c-user-widget__profile-image" src={DogImage} />
  </div>
)

export default UserWidget
