import React from 'react'
import pic from "../assets/img.png"

const UserCard = () => {
  return (
    <div className='user-container'>
        <p id="title"> ashish gupta</p>
        <img  id="user-img" src= {pic} alt="not found" />
        <p id="user-desc"> ashish gupta</p>
    </div>
  )
}

export default UserCard
