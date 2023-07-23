import {HEADER_CATALOG_TOGGLE} from "../types";

const initialState = {
    visibility: false
}

export const hCatalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case HEADER_CATALOG_TOGGLE:
            return {...state, visibility: !state.visibility}
        default:
            return state
    }
}