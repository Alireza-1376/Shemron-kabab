import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    branch : "close" ,
}

const branchSlice = createSlice({
    name :"branch" ,
    initialState : initialState ,
    reducers :{
        showBranch :(state , action)=>{
            state.branch = action.payload ;
        }
    }
})

export default branchSlice.reducer ;
export const {showBranch} =branchSlice.actions ;
