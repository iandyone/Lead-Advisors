import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isPopupActive: false,
}

const counterSlice = createSlice({
    name: "popup",
    initialState,
    reducers: {
        setPopupActivity(state, action) {
            state.isPopupActive = action.payload;
        },

    }
})

export default counterSlice.reducer;
export const {setPopupActivity} = counterSlice.actions;