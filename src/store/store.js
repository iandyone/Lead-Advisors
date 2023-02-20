import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./reducers/popupSlice.js";

export const store = configureStore({
    reducer: {
        popup: popupReducer
    },
});
