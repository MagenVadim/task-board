import React from 'react'
import { Task } from '../components/Task';


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
                      avatar={el.user}
                      userID={el.userID}
                    />                                        
                )}
            </ul>
            <a href="#" className="btn-add-new">
            <i className="fa fa-plus-circle"></i> Add New</a>
        </div>
      </div>
  )
}
