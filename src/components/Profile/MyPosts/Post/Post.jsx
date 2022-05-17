import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <div>
        <img src='https://image.shutterstock.com/image-vector/example-stamp-vector-template-illustration-600w-1362869099.jpg' />
        {props.message}
        <div>
          <span>Like</span> {props.likesCount}
        </div>
      </div>
    </div>
  );
}

export default Post 