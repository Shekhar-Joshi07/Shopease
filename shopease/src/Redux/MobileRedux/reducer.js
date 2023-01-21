import { GET_MOBILEDATA_FAILURE, GET_MOBILEDATA_REQUEST, GET_MOBILEDATA_SUCCESS } from "./actionTypes"


const initialstate = {
    mobdata : [],
    isLoading : false,
    isError : false,
}

export const reducer = (state=initialstate, {type,payload}) =>{
    switch(type){
        case GET_MOBILEDATA_REQUEST :
            return {...state, isLoading:true}
        case GET_MOBILEDATA_SUCCESS :
            return {...state, isLoading:false, mobdata:payload}
        case GET_MOBILEDATA_FAILURE :
            return {...state, isLoading:false, isError : true}    
        default :
           return state;
    }
}