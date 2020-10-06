import {APPROVE_CARD_REQUEST} from '../commonConstants'
import axios from 'axios'
import { PARTNER_API_URL } from '../../../../constants/constants'
const PATH = 'card_request_approval'

export const approveCardRequest = (data)=>dispatch=>{
    console.log('called')
    axios.post(`${PARTNER_API_URL}${PATH}`,data)
    .then(response=>response.data)
    .then(res=>dispatch({
        type:APPROVE_CARD_REQUEST,
        payload:res
    }))
}