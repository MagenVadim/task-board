import React from 'react'

export const Task = ({description, avatar, type}) => {
  return (
    <div>
        <li className="task-warning ui-sortable-handle">
            <div className="checkbox checkbox-custom checkbox-single float-right">
                <input type="checkbox" aria-label="Single checkbox Two"/>
                <label></label>
            </div>{description}
            <p>{type}</p>
            <div className="clearfix"></div>
            <div className="mt-3">
                <p className="float-right mb-0 mt-2">
                    <button type="button" className="btn btn-success btn-sm waves-effect waves-light">View</button>
                </p>
                <p className="mb-0">
                    <a href="" className="text-muted"><img src={avatar} alt="task-user" className="thumb-sm rounded-circle mr-2"/> <span className="font-bold font-secondary">Petey Cruiser</span></a>
                </p>
            </div>
        </li>
    </div>
  )
}
