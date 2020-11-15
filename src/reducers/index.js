import actionsReducer from "./actions";
import editblogReducer from "./editblog";
import listblogReducer from "./listblog";
import profileReducer from "./profile";
import publisherReducer from "./publisher";
import signinReducer from "./signin";
import signupReducer from "./signup";
import viewblogReducer from "./viewblog";
import {combineReducers} from "redux";

const allreducer = combineReducers({
    actions: actionsReducer,
    editblog: editblogReducer,
    listblog: listblogReducer,
    profile: profileReducer,
    publisher: publisherReducer,
    signin: signinReducer,
    signup: signupReducer,
    viewblog: viewblogReducer
})

export default allreducer;