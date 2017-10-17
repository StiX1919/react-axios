import axios from "axios"
import apiURL from './api.js'

export function getCustomerList(){
    return axios.get(apiURL).then(res=> {
        return res.data})
}
export function postCustomer(cust) {
    return axios.post(apiURL, cust).then(res=> {
        return res.data})
}
export function getCustomer(id){
    return axios.get(apiURL + id).then(res=> {
        return res.data
    })
}
export function updateCustomer(id, obj){
    return axios.patch(apiURL + id, obj).then(res=>{
        return res.data
    })
}
export function deleteCustomer(id){
    return axios.delete(apiURL + id).then(res=> {
        return res.data
    })
}