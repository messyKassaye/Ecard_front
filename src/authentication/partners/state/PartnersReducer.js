import {combineReducers} from "redux";
import cardReducers from "./reducer/cardReducers";
import companiesReducer from "./reducer/companiesReducer";

export default combineReducers({
    companyReducer:companiesReducer,
    cardReducer:cardReducers
})