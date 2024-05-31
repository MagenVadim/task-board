import styles from './CreateTask.css'
import { useState, useEffect } from 'react'
import {InputTitleField} from '../../components/InputTitleField/InputTitleField'
import { InputDescriptionField } from '../../components/InputDescriptionField/InputDescriptionField'
import { SelectUser } from '../../components/SelectUser/SelectUser'
const { v4: uuidv4 } = require('uuid');



export const CreateTask = () => {

  const [newTask, setNewTask] = useState({})

  const [newTitle, setNewTitle] = useState('')
  const [newDescription, setNewDescription] = useState('')  
  const [newType, setNewType] = useState('')
  const [newPriority, setNewPriority] = useState('')
  const [selectedUsers, setSelectedUsers] = useState([])
  const task_ID = uuidv4();
 
  const taskCreate = () =>{
    setNewTask({
      id: task_ID,
      type: newType,
      priority: newPriority,
      title: newTitle,
      description: newDescription,
      userID: selectedUsers,
    })
  }

  useEffect(()=>{
    console.log(newTask)
  },[newTask])

  return (
    <div className='task-container'>
      <div className="task-content">
          <div >ID: {task_ID}</div>

          <div className="type-create-container">
              <div>type:</div>
              <select name="select-create" className='select-create' onChange={(e)=>setNewType(e.target.value)}>
                  <option value='Upcoming'>Upcoming</option>
                  <option value='In Progress'>In Progress</option>
                  <option value='Completed'>Completed</option>
              </select>
          </div>

          <div className="priority-create-container">
            <div>priority:</div>
            <select name="priority-create" className='priority-create' onChange={(e)=>setNewPriority(e.target.value)}>
                  <option value='High'>High</option>
                  <option value='Medium'>Medium</option>
                  <option value='Low'>Low</option>
              </select>
          </div>

          <InputTitleField title={newTitle} handleTitle={setNewTitle}/>     
          <InputDescriptionField description={newDescription} handleDescription={setNewDescription}/>     
          <SelectUser selectedUsers={selectedUsers} setSelectedUsers={setSelectedUsers}/>

      </div>
          

        <button className='btn-create' onClick={taskCreate}>Create</button>       
    </div>
    


  )
}
