import {combineReducers} from "redux";
import {hCatalogReducer} from "./hCatalogReducer";


export const rootReducer = combineReducers({
    hCatalog: hCatalogReducer
})