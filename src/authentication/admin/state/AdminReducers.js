import {combineReducers} from "redux";
import dialogReducer from './reducers/dialogReducer'
import customersReducer from './reducers/customersReducer'

export default combineReducers({
    dialogReducers:dialogReducer,
    customerReducer:customersReducer,
})