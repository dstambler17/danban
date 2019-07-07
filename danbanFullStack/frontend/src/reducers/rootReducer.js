import authReducer from './authReducer'
import taskItemReducer from './taskItemReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    taskItem: taskItemReducer,
    auth: authReducer
})

export default rootReducer
