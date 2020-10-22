import {FETCH_CUSTOMERS} from '../actionConstants/adminConstants'
import axios from 'axios'
import { ADMIN_API_URL, API_URL } from '../../../../constants/constants'
const PATH = 'customers'

export const indexCustomers = ()=>dispatch=>{
    axios.get(`${ADMIN_API_URL}${PATH}`)
    .then(response=>response.data)
    .then(res=>dispatch({
        type:FETCH_CUSTOMERS,
        payload:res.data
    }))
}