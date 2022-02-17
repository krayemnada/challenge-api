import * as types from "./ActionTypes";
import axios from "axios";

export const fetchProductStart = () => ({
    type: types.FETCH_PRODUCT_START,
});

export const fetchProductSuccess = (results) => ({
    type: types.FETCH_PRODUCT_SUCCESS,
    payload: results,
});

export const fetchProductFail = (error) => ({
    type: types.FETCH_PRODUCT_FAIL,
    payload: error,
});

export const fetchSingleProductStart = () => ({
    type: types.GET_SINGLE_PRODUCT_START,
});

export const fetchSingleProductSuccess = (results) => ({
    type: types.GET_SINGLE_PRODUCT_SUCCESS,
    payload: results,
});

export const fetchSingleProductFail = (error) => ({
    type: types.GET_SINGLE_PRODUCT_FAIL,
    payload: error,
});

export function fetchProduct() {
    return function (dispatch) {
        dispatch(fetchProductStart());
        axios
            .get("https://api.jikan.moe/v3/search/anime?q=naruto")
            .then((response) => {
                const results = response.data.results;
                dispatch(fetchProductSuccess(results));
            })
            .catch((error) => {
                dispatch(fetchProductFail(error));
            });
    };
}

export function fetchSingleProduct() {
    return function (dispatch) {
        dispatch(fetchSingleProductStart());
        axios
            .get("https://api.jikan.moe/v3/search/anime?q=naruto")
            .then((response) => {
                const results = response.data.results;
                dispatch(fetchSingleProductSuccess(results));
            })
            .catch((error) => {
                dispatch(fetchSingleProductFail(error));
            });
    };
}
