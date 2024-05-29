import React from 'react'
import {Link} from 'react-router-dom'
import {userList} from '../db/users'
import { useDispatch } from 'react-redux'
import {removeTask} from '../store/taskSlice'



export const Task = ({id, description, type, userID}) => {
   
    const userCard = [] ;
    userID.forEach(element => {
        userCard.push(userList.find(usfn => usfn.userID===element))
    });
  
    const dispatch = useDispatch();    

  return (
    <div>
        <li className="task-warning ui-sortable-handle">
            <div className="checkbox checkbox-custom checkbox-single float-right">                                
            </div>{description}
            <p>{type}</p>
            <div className="clearfix"></div>

            <div className="mt-3">
                <p className="float-right mb-0 mt-2">
                    <Link to={`/task/view/${id}`}>
                        <button type="button" className="btn btn-success btn-sm waves-effect waves-light">View</button>
                    </Link>                    
                </p>

                <p className="float-right mb-0 mt-2">                    
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
