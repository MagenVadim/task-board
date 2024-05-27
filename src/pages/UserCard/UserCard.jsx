import { useParams } from "react-router-dom"
import {userList} from '../../db/users'
import styles from './UserCard.css'

export const UserCard = () => {

  const {fullName} = useParams(); 
  const userObject = userList.find(us=>us.fullName===fullName)
  const avatar = userObject.url

  return (
    <div className="user-card">
      <div className="user-header">

        <div className="user-header-left">
          <div className="user-avatar">
            <img src={avatar} className="image-userCard"/>
            <h2 className="user-fullname">{fullName}</h2>
            <p className="user-position">{userObject.position}</p>
          </div>          
          <div className="user-details">
            <h2 className="personal-details">Personal details</h2>            
            <p>Phone: </p>
            <p>Email: </p>
            <p>Location: </p>
            <p>Hire data: </p>
          </div>
        </div>

      </div>
    </div>

  )
}
