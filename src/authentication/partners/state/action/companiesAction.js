import {STORE_COMPANY} from '../PartnersConstants'
import axios from 'axios'
import { API_URL } from '../../../../constants/constants'

const PATH = 'company'
export const storeCompany = (data)=>dispatch=>{
    axios.post(`${API_URL}${PATH}`,data)
    .then(response=>response.data)
    .then(res=>dispatch({
        type:STORE_COMPANY,
        payload:res
    }))
}
