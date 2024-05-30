import React from 'react'
import styles from './CreateTask.css'

export const CreateTask = () => {

  return (
    <div className='task-container'>
        <div >ID:</div>

        <div className="create-type-conyainer">

            <div>type:</div>
            <select className='select-create-type'>
                <option value='Upcoming'>Upcoming</option>
                <option value='In Progress'>In Progress</option>
                <option value='Completed'>Completed</option>
            </select>
        </div>
        
        <div className="priority-create-type">priority:</div>
        <div className="title-create-type">title:</div>
        <div className="description-create-type">description:</div>
        <div className="user-create-type">User:</div>
    </div>


  )
}
