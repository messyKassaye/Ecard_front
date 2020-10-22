import {FETCH_CUSTOMERS} from '../actionConstants/adminConstants'

const initialState = {
    loading:true,
    customers:[]
}

export default function(state=initialState,action){
    switch(action.type){
        case FETCH_CUSTOMERS:
            return {
                ...state,
                loading:false,
                customers:action.payload
            }
            default:
                return state
    }
}