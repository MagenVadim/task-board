import React from 'react'
import styles from './SelectUser.css'
import { useState, useEffect } from 'react'
import { userList } from '../../db/users';


export const SelectUser = () => {

    const [userListDB, setUserListDB] = useState([])
    const [users, setUsers] = useState([])

    useEffect(()=>{
      setUserListDB([...userList])
    },[])
  
    const handleSelect = (value)=>{
        setUsers([...users, value])
    }

    useEffect(()=>{
        console.log(users)
      },[users])

  return (
    <div className="select-user-container">
        <div className="user-title">Users:</div> 
        <select 
            name="select-user" 
            className='select-user'
            onChange={(e)=>handleSelect(e.target.value)}
            >
            {userListDB.map(user=>
                <option 
                    key={user.fullName} 
                    value={user.fullName}
                >{user.fullName}
                </option>
            )}
        </select>
    </div>
  )
}

