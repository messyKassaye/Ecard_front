import {SHOW_AGENTS} from '../PartnersConstants'
import axios from 'axios'
import { API_URL } from '../../../../constants/constants'
const PATH = 'partner_agent'

export const showAgents = (status)=>dispatch=>{
    axios.get(`${API_URL}${PATH}/${status}`)
    .then(response=>response.data)
    .then(res=>dispatch({
        type:SHOW_AGENTS,
        payload:res.data
    }))
}