import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    foodModal : false ,
}

const FoodModalSlice = createSlice({
    name:"foodModal",
    initialState ,
    reducers :{
        foodReducer :(state ,action)=>{
            state.foodModal = action.payload ;
        }
    }
})

export default FoodModalSlice.reducer ;
export const {foodReducer} =FoodModalSlice.actions ;