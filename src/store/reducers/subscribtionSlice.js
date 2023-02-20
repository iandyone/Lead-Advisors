import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isSubscriptionSuccess: false,
}

const subscriptionSlice = createSlice({
    name: "subscription",
    initialState,
    reducers: {
        setSubscriptionSuccess(state, action) {
            state.isSubscriptionSuccess = action.payload;
        },

    }
})

export default subscriptionSlice.reducer;
export const {setSubscriptionSuccess} = subscriptionSlice.actions;