import styles from './Header.css'
import {Link} from 'react-router-dom'

export const Header = () => {
  return (
    <div className='header'>
      <Link to={'/create'}>
        <button className='btn-task-create'>Create</button>
      </Link> 
    </div>
  )
}

