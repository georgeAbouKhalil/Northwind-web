import { createStore, combineReducers } from "redux";
import { authReducer } from "./AuthState";
import { productsReducer } from "./ProductsState";

// For multiple reducers:
// const reducers = combineReducers({ productsState: productsReducer, employeesState: customersReducer }); // if we have more then 1 reducers
// const reducers = combineReducers({ productsState: productsReducer });
// const store = createStore(reducers);
// export default store;

// For single reducer:
const productsStore = createStore(productsReducer);
export default productsStore;

export const authStore = createStore(authReducer);