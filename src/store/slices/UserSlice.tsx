/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            state.push(action.payload);
        },
        deleteUser: (state, action) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            state = state.filter((user) => user.id !== action.payload);
        },
        deleteAllUser: (state, action) => {
            // state = [];
        }
    }
})

export default userSlice.reducer;