import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import styles from './UsersDashboard.css'


export const UsersDashboard = () => {

  const userStore = useSelector(state => state.userReducer)

  return (
    <div className="users-user-list">
      {userStore.map(user=>
      <Link to={`/users/card/${user.fullName}`}>
        <div key={user.fullName} className="users-user-card">
          <img src={user.url} alt="task-user" className="thumb-sm rounded-circle mr-2"/>
          <p >{user.fullName}</p>
        </div>
      </Link>

        
      )}
    </div>
  )
}
