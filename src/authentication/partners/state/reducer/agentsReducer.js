import {SHOW_AGENTS} from '../PartnersConstants'

export const initialState = {
    loading:true,
    agents:[]
}

export default function(state=initialState,action){
    switch(action.type){
        case SHOW_AGENTS:
            return {
                ...state,
                agents:action.payload,
                loading:false
            }
            
        default:
             return state
    }
}