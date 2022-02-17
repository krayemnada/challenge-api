import * as types from "./ActionTypes";

const initialState = {
    results: [],

    loading: false,
    error: false,
};
const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PRODUCT_START:
            return {
                ...state,
                loading: true,
            };
        case types.FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                results: action.payload,
            };
        case types.FETCH_PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case types.GET_SINGLE_PRODUCT_START:
            return {
                ...state,
                loading: true,
            };
        case types.GET_SINGLE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                results: action.payload,
            };
        case types.GET_SINGLE_PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default productReducer;
