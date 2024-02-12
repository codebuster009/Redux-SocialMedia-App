import { createSlice } from "@reduxjs/toolkit";
//created the slice for our post data
const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '2', title: 'Second Post', content: 'More text' }
]

const postSlice = createSlice({
    name : "posts",
    initialState,
    reducers: {}
})
//exporting it to use it in our store
export default postSlice.reducer