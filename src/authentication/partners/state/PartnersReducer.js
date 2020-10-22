import {combineReducers} from "redux";
import agentsReducer from "./reducer/agentsReducer";
import cardReducers from "./reducer/cardReducers";
import companiesReducer from "./reducer/companiesReducer";
import sendCardReducer from "./reducer/sendCardReducer";

export default combineReducers({
    companyReducer:companiesReducer,
    cardReducer:cardReducers,
    agentsReducer:agentsReducer,
    sendCardReducer:sendCardReducer
})