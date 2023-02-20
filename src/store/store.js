import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./reducers/popupSlice.js";
import subscriptionReducer from "./reducers/subscribtionSlice.js";

export const store = configureStore({
    reducer: {
        popup: popupReducer,
        subscription: subscriptionReducer,
    },
});
