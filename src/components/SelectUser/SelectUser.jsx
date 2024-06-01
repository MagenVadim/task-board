import React from 'react'
import styles from './SelectUser.css'
import { useState, useEffect } from 'react'
import { userList } from '../../db/users';
import Image from "../../../src/image/close.png"


export const SelectUser = ({selectedUsers, setSelectedUsers}) => {

    const [filterList, setFilterList] = useState([])
    const [userListDB, setUserListDB] = useState([])
    

    useEffect(()=>{
      setUserListDB([...userList])
      setFilterList([...userList])
    },[])
  
    const handleSelect = (value)=>{
        const userObject = userListDB.find(user=> user.fullName === value)
        const newFilterList = filterList.filter(user=> user.fullName !== value)        
        setSelectedUsers([...selectedUsers, userObject])
        setFilterList(newFilterList)        
    }

    useEffect(()=>{
        console.log()
      }, [selectedUsers])

    const deleteUser = (id)=>{  
        const userObject = userListDB.find(user=> user.fullName === id)
        const newSelectedUsers = selectedUsers.filter(user=> user.fullName !== id)
        setFilterList([...filterList, userObject])          
        setSelectedUsers(newSelectedUsers)
    }

  return (
    <div className="select-user-container">
        <div className="user-title">Users:</div> 
        <select name="select-user" className='select-user'onChange={(e)=>handleSelect(e.target.value)}>
            <option>select user:</option>
            {filterList.map(user=>
                <option 
                    key={user.fullName} 
                    value={user.fullName}
                >{user.fullName}
                </option>
            )}
        </select>
        <div className='user-assigned'>
            {selectedUsers.map(user=>
                <div key={user.fullName} className="user-sell">
                    <p className="user-name">{user.fullName}</p>
                    <img 
                        className="remove-icon" 
                        id={user.fullName}
                        src={Image} 
                        alt="remove-icon"
                        onClick={(e)=>deleteUser(e.target.id)}
                    />
                </div>
                
            )}
        </div>
    </div>
  )
}

