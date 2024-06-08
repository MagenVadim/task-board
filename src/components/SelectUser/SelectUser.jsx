import React from 'react'
import styles from './SelectUser.css'
import { useState, useEffect } from 'react'
import { userList } from '../../db/users';
import Image from "../../../src/image/close.png"


export const SelectUser = ({id, selectedUsers, setSelectedUsers}) => {    
    const userListDB = userList
    const usersID=[] 
    const [filterList, setFilterList] = useState([])  

    useEffect(()=>{ 
        const usersFiltered = []
        selectedUsers.forEach(el=>{
            usersID.push(el.userID)
        }); 
        userListDB.forEach(user=>{                
         !usersID.includes(user.userID) && usersFiltered.push(user)                 
        }) 
        setFilterList(usersFiltered)
    },[selectedUsers])   

    const handleSelect = (value)=>{
        const newUserObject =  userListDB.find(user => user.fullName === value)
        setSelectedUsers([...selectedUsers, newUserObject]) 

        const newFilterList = filterList.filter(user=> user.fullName !== value)
        setFilterList(newFilterList)        
    }

    const deleteUser = (fullName)=>{ 
        const newSelectedUsers = selectedUsers.filter(user => user.fullName !== fullName)        
        setSelectedUsers(newSelectedUsers) 
               
        const newUserObject = userListDB.find(user => user.fullName === fullName)
        setFilterList([...filterList, newUserObject])
    }


  return (
    <div className="select-user-container">
        <div className="user-title">Users:</div> 
        <select name="select-user" className='select-user' onChange={(e)=>handleSelect(e.target.value)}>
            <option>select user:</option>
            {filterList.map(user=>
                <option 
                    key={`${id}-${user.fullName}`} 
                    value={user.fullName}
                >{user.fullName}
                </option>
            )}
        </select>
        <div className='user-assigned'>
            {selectedUsers.map(user=>
                <div key={`${id}-${user.fullName}`} className="user-sell">
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

