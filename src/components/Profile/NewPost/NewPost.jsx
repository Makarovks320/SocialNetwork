import React from 'react';
import s from './NewPost.module.css';
import { Field, reduxForm } from 'redux-form'

const NewPostForm = (props) => {
return (<form onSubmit={props.handleSubmit}>
   <Field component="textarea" name="newPostBody" placeholder="Write your post here..."/>
        <button>Post</button>
        </form>)
}

const NewPostReduxForm =  reduxForm({form: 'newPost'})(NewPostForm)

const NewPost = (props) => {
const addPost = (formData) => {
  props.addPost(formData.newPostBody);
}

  return (
    <div className={s.new_post_container}>
      <div className={s.wrapper}>
        <div className={s.thumbnail}>
          <img className={s.avatar} alt="avatar" 
          src="https://ilarge.lisimg.com/image/8012568/984full.jpg" width="100%"/>
        </div>
        <NewPostReduxForm onSubmit={addPost}/>
      </div>
    </div>
  )
}

export default NewPost;
