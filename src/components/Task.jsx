import React from 'react'
import {Link} from 'react-router-dom'
import {userList} from '../db/users'
import { useSelector, useDispatch } from 'react-redux'
import {removeTask} from '../store/taskSlice'


export const Task = ({id, description, avatar, type, userID}) => {

    const userCard = userList.find(usfn => usfn.userID===userID);
    const fullName = userCard.fullName;

    const taskStore = useSelector(state => state.taskReducer.taskList)
    const dispatch = useDispatch()

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
                
                <div className="mb-0">
                    <Link to={`/users/card/${fullName}`}>
                        <div className="text-muted">
                            <img src={avatar} alt="task-user" className="thumb-sm rounded-circle mr-2"/>
                            <span className="font-bold font-secondary">{fullName}</span>
                        </div>
                    </Link>
                </div>
            </div>

        </li>
    </div>
  )
}
