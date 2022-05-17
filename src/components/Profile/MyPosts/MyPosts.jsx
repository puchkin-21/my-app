import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={s.c}>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message='Hello, world' likesCount='24'/>
        <Post message='It my first post here' likesCount='21' />
      </div>
    </div>
  );
}

export default MyPosts 