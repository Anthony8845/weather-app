import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import weatherReducer from "./weatherReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  weather: weatherReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  composeWithDevTools: composeWithDevTools(applyMiddleware(thunk)),
});
