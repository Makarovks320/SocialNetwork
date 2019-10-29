/* eslint-disable react/jsx-pascal-case */
import { updatePostActionCreator, addPostActionCreator } from '../../../redux/profile_reducer';
import New_post from './New_post';
import { connect } from 'react-redux';



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

const New_post_container = connect(mapStateToProps, mapDispatchToProps)(New_post)

export default New_post_container;
