import React from 'react'
import SelectType from '../../components/CreateTask/SelectType'
import { useSelector, useDispatch } from 'react-redux'
import { editTaskType } from '../../store/taskSlice'



export const TaskEdit = () => {
    const dispatch = useDispatch();  
    const taskStore = useSelector(state => state.taskReducer)   
    const id = "01"
    const taskObject = taskStore.find(el =>el.id===id)
    const selectedType = taskObject.type

    const handleType=(type)=>{
      dispatch(editTaskType({id, type}))
    }

    console.log(taskStore)

  return (
    <div className='task-container'>
        <div className="task-content">

            <div className="type-create-container">
            <div className='id-task-view'>ID:</div>
            <p className='task-view'>{id}</p>
            </div>

            <div className="type-create-container">
                <div>type:</div>
                <SelectType selectedType={selectedType} handleType={handleType}/>
            </div>

            <div className="priority-create-container">
            <div>priority:</div>
            <p className='task-view'></p>
            </div>

            <div className="title-create-container">
            <div className="title-create-type">title:</div>     
            <p className='task-view'></p>         
            </div>

            <div className="description-create-container">
            <div className="description-create-type">description:</div>
            <p className='task-view'></p>
            </div>

            <div className="view-user-container">
            <div className="user-title">Users:</div>

            
            </div>

        </div>
            

            <button className='btn-create'>Edit</button>       
    </div>
  )
}

