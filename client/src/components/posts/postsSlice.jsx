//Followed redux tutorial by Dave Gray and adapted it for this project

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: '',
        title: 'Hello World!',
        content: 'What is HTML?',
    },
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,           
                    }
                }
            }
        },
    }
})

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer