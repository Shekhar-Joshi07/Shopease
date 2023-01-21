import { GET_MOBILEDATA_FAILURE, GET_MOBILEDATA_REQUEST, GET_MOBILEDATA_SUCCESS } from "./actionTypes"


export const getMobiledataRequest = () =>{
    return {type : GET_MOBILEDATA_REQUEST}
}

export const getMobiledataSuccess = (payload) =>{
    return {type : GET_MOBILEDATA_SUCCESS, payload}
}

export const getMobiledataFailure = () =>{
    return {type : GET_MOBILEDATA_FAILURE}
}