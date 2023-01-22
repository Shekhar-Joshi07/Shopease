import { combineReducers, legacy_createStore } from "redux";
import {reducer as mobileReducer} from "./MobileRedux/reducer";
import {reducer as dealReducer} from "./HomeRedux/reducer";
import {reducer as cartReducer} from "./CartRedux/reducer";

const rootReducer = combineReducers({mobileReducer, dealReducer, cartReducer});

export const store = legacy_createStore(rootReducer);