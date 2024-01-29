//Followed redux tutorial by Dave Gray and adapted it for this project

import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        username: 'Fry',

    },
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        userAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(username) {
                return {
                    payload: {
                        username,        
                    }
                }
            }
        },
    }
})

export const selectAllUsers = (state) => state.users;

export const { userAdded } = usersSlice.actions

export default usersSlice.reducer