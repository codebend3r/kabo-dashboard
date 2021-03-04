import React from 'react'

import DogImage from '@images/tipsi-dot.jpg'

import './UserWidget.scss'

const UserWidget = () => (
  <div className="o-user-widget">
    <img className="c-user-widget__profile-image" src={DogImage} />
    <div className="c-user-widget__profile-details">
      <h3 className="c-user-widget__profile-title">Chester's Dashboard</h3>
      <p>Has two dogs</p>
    </div>
  </div>
)

export default UserWidget
