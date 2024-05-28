import { useParams } from "react-router-dom"
import { taskListDB } from '../db/tasks';


export const TaskView = () => {

  const {id} = useParams(); 
  const task = taskListDB.find(tsk=>tsk.id===id)

  return (
    <>
      <div>{task.type}</div>
      <div>{task.title}</div>
      <div>{task.description}</div>
    </>

  )
}
