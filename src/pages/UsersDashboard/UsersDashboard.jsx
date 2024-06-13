import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import styles from './UsersDashboard.css'


export const UsersDashboard = () => {

  const userStore = useSelector(state => state.userReducer)

  return (
    <div className="users-user-list">
      {userStore.map(user=>
        <div key={user.fullName} className="users-table">
          <Link to={`/users/card/${user.fullName}`}>
            <div className="users-user-card">
              <img src={user.url} alt="task-user" className="thumb-sm rounded-circle mr-2"/>
              <p >{user.fullName}</p>
            </div>
          </Link>
          <div className="details">
            <p className="user-details">{user.position}</p>
          </div>
          <div className="details">
            <p className="user-details">{user.city}</p>
          </div>
        </div>
      )}
    </div>
  )
}
