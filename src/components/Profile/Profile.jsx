import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import User from './User/User'

const Profile = (props) => {
  return (
    <div>
      <User />
      <MyPosts pcnt={props.pcnt} />
    </div>
  )
}

export default Profile