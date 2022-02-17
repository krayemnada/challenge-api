import { combineReducers } from "redux";
import productReducer from "./Reducer";

const rootReducer = combineReducers({
    data: productReducer,
});

export default rootReducer;
