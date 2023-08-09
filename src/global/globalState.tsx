import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    taskState: "" || null
}

const globalState = createSlice({
    name: "taskState",
    initialState,
    reducers: {
        createUser: (state, { payload }) => {
            state.taskState = payload
        },
        logOut: (state) => {
            state.taskState = null
        }
    }
});

export const { createUser, logOut } = globalState.actions

export default globalState.reducer