import { createContext } from "react";

export const MyReducerContext = createContext();

export const initState = {
    basket: [],
    size: 0
}

export const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "add":
            let alreadyAdded = false;
            state.basket.forEach(element => {
                if (element.id === payload.id) {
                    alreadyAdded = true;
                    return;
                }
            });
            if (alreadyAdded) {
                return {
                    ...state,
                };
            }
            return {
                ...state,
                basket: [...state.basket, payload],
                size: state.size + 1
            };
        case "remove":
            return {
                ...state,
                basket: state.basket.filter(item => item !== payload),
                size: state.size - 1
            };
        default:
            return state;
    }
}






