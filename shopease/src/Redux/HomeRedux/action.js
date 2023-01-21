import { GET_DEALDATA_FAILURE, GET_DEALDATA_REQUEST, GET_DEALDATA_SUCCESS } from "./actionTypes"



export const getDealdataRequest = () =>{
    return {type : GET_DEALDATA_REQUEST}
}

export const getDealdataSuccess = (payload) =>{
    return {type : GET_DEALDATA_SUCCESS, payload}
}

export const getDealdataFailure = () =>{
    return {type : GET_DEALDATA_FAILURE}
}