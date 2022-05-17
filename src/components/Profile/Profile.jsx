import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import User from './User/User'

const Profile = () => {
  return (
    <div>
      <User />
      <MyPosts />
    </div>
  )
}

export default Profile