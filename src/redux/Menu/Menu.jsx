import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    menu: "close",
}

const menuSlice = createSlice({
    name: "menu",
    initialState: initialState,
    reducers: {
        showMenu: (state, action) => {
            state.menu = action.payload;
        }
    }
})

export default menuSlice.reducer;
export const { showMenu } = menuSlice.actions;