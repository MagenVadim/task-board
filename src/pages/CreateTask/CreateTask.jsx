import React from 'react'
import styles from './CreateTask.css'

import { useState} from 'react'
import {InputTitleField} from '../../components/InputTitleField/InputTitleField'
import { InputDescriptionField } from '../../components/InputDescriptionField/InputDescriptionField'
import { SelectUser } from '../../components/SelectUser/SelectUser'

export const CreateTask = () => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')  

  return (
    <div className='task-container'>
      <div className="task-content">
          <div >ID:</div>

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
          <SelectUser/>

      </div>
          

        <button className='btn-create'>Create</button>       
    </div>
    


  )
}
