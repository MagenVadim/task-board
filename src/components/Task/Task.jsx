import React from 'react'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {removeTask} from '../../store/taskSlice'
import styles from './Task.css'
import { useSelector } from 'react-redux'


export const Task = ({id, description, userID, priority}) => {

    const userStore = useSelector(state => state.userReducer)

    const userCard = [] ;
    userID.forEach(element => {
        userCard.push(userStore.find(usfn => usfn.userID===element))
    });
  
    const dispatch = useDispatch();    

  return (
    <div>
        <li className="task-warning ui-sortable-handle">
            <div className={`priority-${priority} float-right`}> 
                {priority}
            </div>{description}            
            
            <div className="mt-3">
                <p className="view-button float-right mb-0 mt-2">
                    <Link to={`/task/view/${id}`} state={{id}}>
                        <button type="button" className="btn btn-success btn-sm waves-effect waves-light">View</button>
                    </Link>                    
                </p>

                <p className="delete-button float-right mb-0 mt-2">                    
                    <button 
                        onClick={()=>dispatch(removeTask({id}))} 
                        value={id} type="button" 
                        className="btn btn-delete btn-sm waves-effect waves-light">
                            Delete
                    </button>                                      
                </p>

                <div className="avatar-container">
                    {userCard.map(user=>
                            <div key={user.userID} className="mb-0">
                                <Link to={`/users/card/${user.fullName}`}>
                                    <div className="text-muted">
                                        <img src={user.url} alt="task-user" className="thumb-sm rounded-circle mr-2"/>
                                    </div>
                                </Link>
                            </div>
                        )
                    }
                </div>

            </div>
        </li>
    </div>
  )
}
