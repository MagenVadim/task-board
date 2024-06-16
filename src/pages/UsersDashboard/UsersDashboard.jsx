import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import styles from './UsersDashboard.css'


export const UsersDashboard = () => {

  const userStore = useSelector(state => state.userReducer)

  return (
    <>
      <div className="users-header">
        

      </div>


      <div className="users-user-list">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {userStore.map(user=>
              <tr key={user.fullName}>
                <td className="users-table">
                  <Link className="user-link" to={`/users/card/${user.fullName}`}>
                    <div className="users-user-card">
                      <img src={user.url} alt="task-user" className="thumb-sm rounded-circle mr-2"/>
                      <p >{user.fullName}</p>
                    </div>
                  </Link>
                </td>
                <td className="details">
                  <p className="user-details">{user.position}</p>
                </td>
                <td className="details">
                  <p className="user-details">{user.city}</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
    
  )
}
