import {combineReducers} from "redux";
import AdminReducers from '../admin/state/AdminReducers'
import PartnersReducer from "../partners/state/PartnersReducer";
import commonReducer from '../commons/state/commonReducers'
export default combineReducers({
  adminReducer:AdminReducers,
  commonReducer:commonReducer,
  partnerReducer:PartnersReducer
})
