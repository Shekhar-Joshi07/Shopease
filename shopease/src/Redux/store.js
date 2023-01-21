import { combineReducers, legacy_createStore } from "redux";
import {reducer as mobileReducer} from "./MobileRedux/reducer";
import {reducer as dealReducer} from "./HomeRedux/reducer";

const rootReducer = combineReducers({mobileReducer, dealReducer});

export const store = legacy_createStore(rootReducer);