import {createSlice} from '@reduxjs/toolkit'
const initialState={
    posts:[]
}
export const postSlice=createSlice({
    name:'post',
    initialState,
    reducers:{
        initialPosts:(state,action)=>{
            state.posts=action.payload.documents
        },
        addPost:(state,action)=>{
            console.log(action.payload)
            state.posts.push(action.payload)
        }
    }
})
export const {initialPosts,addPost}=postSlice.actions
export default postSlice.reducer