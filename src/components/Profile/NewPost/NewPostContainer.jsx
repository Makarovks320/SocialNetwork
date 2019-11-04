import { connect } from 'react-redux';
import NewPost from './NewPost';
import { updatePostActionCreator, addPostActionCreator } from '../../../redux/profile_reducer';



const mapStateToProps = (state) => {
  return { newPostText: state.profilePage.newPostText }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updatePostText: (text) => {
      dispatch(updatePostActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost)

export default NewPostContainer;
