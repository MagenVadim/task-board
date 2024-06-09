import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


export const UsersDashboard = () => {

  const userStore = useSelector(state => state.userReducer)

  return (
    <div>
      {userStore.map(user=>
        <p>{user.fullName}</p>
      )}
    </div>
  )
}
