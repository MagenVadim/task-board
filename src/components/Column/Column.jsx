import React from 'react'
import { Task } from '../Task/Task';


export const Column = ({title, cardList}) => {
  return (
      <div className="col-lg-4">
        <div className="card-box">
            <h4 className="text-dark header-title">{title}</h4> 
            <ul className="sortable-list taskList list-unstyled ui-sortable" id="upcoming">
                {cardList.map(el=>                                    
                    <Task 
                      key={el.id}                       
                      id={el.id} 
                      description={el.description} 
                      userID={el.userID}
                      priority={el.priority}
                    />                                        
                )}
            </ul>
        </div>
      </div>
  )
}
