import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./Menu/Menu"
const store = configureStore({
    reducer :{
        menu :menuSlice ,
    }
})

export default store ;