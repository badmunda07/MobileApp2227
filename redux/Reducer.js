import { ADD_TO_CART } from "./constant";

const defaultValue = [];

export const reducer = (state = defaultValue, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [
                ...state,
                action.data
            ]
        default:
            return state;
    }
}