import styles from './CreateTask.css'
import SelectType from '../../components/CreateTask/SelectType'
import { useState, useEffect } from 'react'
import {InputTitleField} from '../../components/InputTitleField/InputTitleField'
import { InputDescriptionField } from '../../components/InputDescriptionField/InputDescriptionField'
import { SelectUser } from '../../components/SelectUser/SelectUser'
import { useDispatch } from 'react-redux'
import {addTask} from '../../store/taskSlice'
const { v4: uuidv4 } = require('uuid')

export const CreateTask = () => {
  const dispatch = useDispatch();   

  const [newTitle, setNewTitle] = useState('')
  const [newDescription, setNewDescription] = useState('')  
  const [newType, setNewType] = useState('')
  const [newPriority, setNewPriority] = useState('')
  const [selectedUsers, setSelectedUsers] = useState([])
  const array_ID=[];
  const task_ID = uuidv4(); 
  
  const selectedUsers_userID = ()=>{    
    selectedUsers.forEach(el=>
      array_ID.push(el.userID))
  }
selectedUsers_userID()

  const object = {
  id: task_ID,
  type: newType,
  priority: newPriority,
  title: newTitle,
  description: newDescription,
  userID: array_ID,
}    


  useEffect(()=>{
    console.log()
  },[])

  return (
    <div className='task-container'>
      <div className="task-content">
          <div >ID: {task_ID}</div>

          <div className="type-create-container">
              <div>type:</div>
              <SelectType handleType={setNewType}/>
          </div>

          <div className="priority-create-container">
            <div>priority:</div>
            <select name="priority-create" className='priority-create' onChange={(e)=>setNewPriority(e.target.value)}>
                  <option>select priority: </option>
                  <option value='High'>High</option>
                  <option value='Medium'>Medium</option>
                  <option value='Low'>Low</option>
              </select>
          </div>

          <InputTitleField title={newTitle} handleTitle={setNewTitle}/>     
          <InputDescriptionField description={newDescription} handleDescription={setNewDescription}/>     
          <SelectUser selectedUsers={selectedUsers} setSelectedUsers={setSelectedUsers}/>

      </div>
          

        <button className='btn-create' onClick={()=>dispatch(addTask(object))}>Create</button>       
    </div>
    


  )
}
