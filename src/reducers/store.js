import { configureStore } from "@reduxjs/toolkit";
import hackerNewsReducer from "./hackerNewsReducer.js";
import mediumReducer from "./mediumReducer.js";

export default configureStore({
    reducer: {
        hackerNews: hackerNewsReducer,
        medium: mediumReducer
    } 
});