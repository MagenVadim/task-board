import React from 'react'
import styles from './CreateTask.css'

import { useState} from 'react'
import {InputTitleField} from '../../components/InputTitleField/InputTitleField'
import { InputDescriptionField } from '../../components/InputDescriptionField/InputDescriptionField'
import { SelectUser } from '../../components/SelectUser/SelectUser'
const { v4: uuidv4 } = require('uuid');



export const CreateTask = () => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [newTask, setNewTask] = useState({})
  const [newType, setNewType] = useState({})
  const [newPriority, setNewPriority] = useState({})
  const [selectedUsers, setSelectedUsers] = useState([])
  const task_ID = uuidv4();
 
  const taskCreate = () =>{
    setNewTask({
      id: task_ID,
      type: "Completed",
      priority:"High",
      title:"Test",
      description:"Increased automation of tests",
      userID: ["03"],
    })
  }

  return (
    <div className='task-container'>
      <div className="task-content">
          <div >ID: </div>

          <div className="type-create-container">
              <div>type:</div>
              <select name="select-create" className='select-create'>
                  <option value='Upcoming'>Upcoming</option>
                  <option value='In Progress'>In Progress</option>
                  <option value='Completed'>Completed</option>
              </select>
          </div>

          <div className="priority-create-container">
            <div>priority:</div>
            <select name="priority-create" className='priority-create'>
                  <option value='High'>High</option>
                  <option value='Medium'>Medium</option>
                  <option value='Low'>Low</option>
              </select>
          </div>

          <InputTitleField title={title} handleTitle={setTitle}/>     
          <InputDescriptionField description={description} handleDescription={setDescription}/>     
          <SelectUser selectedUsers={selectedUsers} setSelectedUsers={setSelectedUsers}/>

      </div>
          

        <button className='btn-create'>Create</button>       
    </div>
    


  )
}
