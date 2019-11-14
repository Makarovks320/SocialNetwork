import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleWare from "redux-thunk"
import profileReducer from "./profile_reducer";
import messagesReducer from "./messages_reducer";
import usersReducer from "./users_reducer";
import authReducer from "./auth_reducer";
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));
window.store = store;
export default store;
