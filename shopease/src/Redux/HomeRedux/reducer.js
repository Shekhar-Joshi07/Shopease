import { GET_DEALDATA_FAILURE, GET_DEALDATA_REQUEST, GET_DEALDATA_SUCCESS } from "./actionTypes"



const initialstate = {
    dealdata : [],
    isLoading : false,
    isError : false,
}

export const reducer = (state=initialstate, {type,payload}) =>{
    switch(type){
        case GET_DEALDATA_REQUEST :
            return {...state, isLoading:true}
        case GET_DEALDATA_SUCCESS :
            return {...state, isLoading:false, dealdata:payload}
        case GET_DEALDATA_FAILURE :
            return {...state, isLoading:false, isError : true}    
        default :
           return state;
    }
}