import { createStore, combineReducers } from "redux";
import profileReducer from "./profile_reducer";
import messagesReducer from "./messages_reducer";
import usersReducer from "./users_reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer
})

let store = createStore(reducers);
window.store = store;
export default store;
