import React from 'react'
import SelectType from '../../components/CreateTask/SelectType'
import SelectPriority from '../../components/CreateTask/SelectPriority'
import {InputTitleField} from '../../components/InputTitleField/InputTitleField'
import {InputDescriptionField} from '../../components/InputDescriptionField/InputDescriptionField'
import { SelectUser } from '../../components/SelectUser/SelectUser'
import { useSelector, useDispatch } from 'react-redux'
import { editTask } from '../../store/taskSlice'
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"


export const TaskEdit = () => {
    const dispatch = useDispatch();  
    const taskStore = useSelector(state => state.taskReducer) 
    const userStore = useSelector(state => state.userReducer) 

    const {id} = useParams(); 
    
    const task = taskStore.find(el =>el.id===id)
    const taskObject= {...task}  

    const selectedType = task.type
    const selectedPriority = task.priority

    const [taskTitle, setTaskTitle] = useState(task.title)
    const [taskDesc, setTaskDesc] = useState(task.description)
    const [selectedUsers, setSelectedUsers] = useState([])

    const usersID = task.userID
    const users = []

    useEffect(()=>{
      taskObject.title = taskTitle;
      taskObject.description = taskDesc;

      const usersID = [];
      selectedUsers.forEach(user =>{
        usersID.push(user.userID)
      });
      taskObject.userID = usersID;

    }, [taskTitle, taskDesc, selectedUsers])

    useEffect(()=>{
      usersID.forEach(id => {
        users.push(userStore.find(el => el.userID === id))      
      });
      setSelectedUsers(users)
    }, [])

      
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
            <SelectUser id={id} selectedUsers={selectedUsers} setSelectedUsers={setSelectedUsers}/>


        </div>
            

            <button className='btn-create' onClick={()=>dispatch(editTask({id, taskObject}))}>Edit Task</button>       
    </div>
  )
}

