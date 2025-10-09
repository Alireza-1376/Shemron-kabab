import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./Menu/Menu";
import branchSlice from "./Branch/Branch";

const store = configureStore({
    reducer :{
        menu :menuSlice ,
        branch :branchSlice ,
    }
})

export default store ;