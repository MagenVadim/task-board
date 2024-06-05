import React from 'react'
import SelectType from '../../components/CreateTask/SelectType'
import SelectPriority from '../../components/CreateTask/SelectPriority'
import {InputTitleField} from '../../components/InputTitleField/InputTitleField'
import {InputDescriptionField} from '../../components/InputDescriptionField/InputDescriptionField'
import { useSelector, useDispatch } from 'react-redux'
import { editTask } from '../../store/taskSlice'
import { useState, useEffect } from 'react'


export const TaskEdit = () => {
    const dispatch = useDispatch();  
    const taskStore = useSelector(state => state.taskReducer)   
    const id = "09"
    const task = taskStore.find(el =>el.id===id)
    const taskObject= {...task}  

    const selectedType = task.type
    const selectedPriority = task.priority
    const [taskTitle, setTaskTitle] = useState(task.title)
    const [taskDesc, setTaskDesc] = useState(task.description)
   
    useEffect(()=>{
      taskObject.task = taskTitle;
      taskObject.description = taskDesc;
    }, [taskTitle, taskDesc])
      
    const handleType = (type)=>{
      taskObject.type=type    
    }     
    const handlePriority = (priority)=>{
      taskObject.priority=priority  
    }    

  return (
    <div className='task-container'>
        <div className="task-content">

            <div className="type-create-container">
            <div className='id-task-view'>ID:</div>
            <p className='task-view'>{id}</p>
            </div>

            <div className="type-create-container">
                <div>type:</div>
                <SelectType selectedType={selectedType} handleType={handleType} id={id}/>
            </div>

            <div className="priority-create-container">
              <div>priority:</div>
              <SelectPriority selectedPriority={selectedPriority} handlePriority={handlePriority} id={id}/>
            </div>

            <InputTitleField title={taskTitle} handleTitle={setTaskTitle}/>     

            <InputDescriptionField description={taskDesc} handleDescription={setTaskDesc}/> 


            <div className="view-user-container">
            <div className="user-title">Users:</div>
            
            </div>

        </div>
            

            <button className='btn-create' onClick={()=>dispatch(editTask({id, taskObject}))}>Edit Task</button>       
    </div>
  )
}

