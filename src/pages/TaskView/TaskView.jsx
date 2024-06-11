import { useSelector } from 'react-redux'
import { useParams } from "react-router-dom"
import {Link} from 'react-router-dom'
import styles from './TaskView.css'



export const TaskView = () => {
  const {id} = useParams(); 

  const taskStore = useSelector(state => state.taskReducer) 
  const userStore = useSelector(state => state.userReducer) 


  const taskType = taskStore.find(el => el.id===id).type
  const taskPriority = taskStore.find(el => el.id===id).priority
  const taskTitle = taskStore.find(el => el.id===id).title
  const taskDescription = taskStore.find(el => el.id===id).description
  const taskUsersID = taskStore.find(el => el.id===id).userID


  const userCard = []
  taskUsersID.forEach(id => {
    userCard.push(userStore.find(user => user.userID === id))
  });

  return (
    <div className='task-container'>
      <div className="task-content">

        <div className="type-create-container">
          <div className='id-task-view'>ID:</div>
          <p className='task-view'>{id}</p>
        </div>

        <div className="type-create-container">
            <div>type:</div>
            <p className='task-view'>{taskType}</p> 
        </div>

        <div className="priority-create-container">
          <div>priority:</div>
          <p className='task-view'>{taskPriority}</p>
        </div>

        <div className="title-create-container">
          <div className="title-create-type">title:</div>     
          <p className='task-view'>{taskTitle}</p>         
        </div>

        <div className="description-create-container">
          <div className="description-create-type">description:</div>
          <p className='task-view'>{taskDescription}</p>
        </div>

        <div className="view-user-container">
          <div className="user-title">Users:</div>
          {userCard.map(user => 
            <Link to={`/users/card/${user.fullName}`}>
              <div key = {user.userID} className="view-user-card">
                <img src={user.url} alt="task-user" className="thumb-sm rounded-circle mr-2"/>
                <p key={user.fullName} className='users-name-view'>{user.fullName}</p>  
              </div> 
            </Link>                
          )}          
        </div>

      </div>
          
      <Link to={`/task/edit/${id}`}>
        <button className='btn-create'>Edit</button>  
      </Link>
             
    </div>

  )
}
