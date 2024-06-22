import { createSlice } from "@reduxjs/toolkit";

const authState = {
token:localStorage.getItem("token")|| null,
isAuth: !!localStorage.getItem('token'),
toggleAuth:false,
toggleForget:false
}

const authSlice = createSlice({
    name:"authentication",
    initialState: authState,
    reducers:{
     login(state,action){
        state.token = action.payload
        state.isAuth = true
        localStorage.setItem("token",action.payload)
     },
     logOut(state){
     state.token =  null
     state.isAuth = false
     localStorage.removeItem("token")
     },
     toggleAuth(state){
        state.toggleAuth = !state.toggleAuth
     },
     toggleForget(state){
      state.toggleForget = !state.toggleForget
     }
    }
})

export const authAction = authSlice.actions
export const authReducer = authSlice.reducer