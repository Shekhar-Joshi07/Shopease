import { ADD_TO_CART, DELETE_TO_CART } from "./actionType";


export const getCartData = (payload) =>{
    return {type : ADD_TO_CART, payload}
}

export const deleteCartData = (payload) =>{
    return {type : DELETE_TO_CART, payload}
}