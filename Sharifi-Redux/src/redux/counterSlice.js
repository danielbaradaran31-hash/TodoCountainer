import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    counter: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers:{
        increase: (state)=> {
           state.counter ++
        },
        decrease: (state)=>{
            state.counter --
        },
        reste:(state)=>{
            state.counter = 0
        }
    }
})


export const counterReducer = counterSlice.reducer
export const {increase, decrease, reste} = counterSlice.actions