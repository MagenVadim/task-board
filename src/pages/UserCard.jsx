import { useParams } from "react-router-dom"
import {userList} from '../db/users'

export const UserCard = () => {

  const {fullName} = useParams(); 
  const userObject = userList.find(us=>us.fullName===fullName)
  const avatar = userObject.url

  return (
    <>
      <div>{fullName}</div>
      <img src={avatar} className="image-userCard"/>
    </>

  )
}
