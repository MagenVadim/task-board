import { useSelector, useDispatch } from 'react-redux'

export const TaskView = () => {

  return (
    <div className='task-container'>
      <div className="task-content">
          <div >ID: </div>

          <div className="type-create-container">
              <div>type:</div> 
          </div>

          <div className="priority-create-container">
            <div>priority:</div>
          </div>

          <div className="title-create-container">
            <div className="title-create-type">title:</div>              
          </div>

          <div className="description-create-container">
            <div className="description-create-type">description:</div>
          </div>

          <div className="select-user-container">
            <div className="user-title">Users:</div>
          </div>

      </div>
          

        <button className='btn-create'>Edit</button>       
    </div>

  )
}
