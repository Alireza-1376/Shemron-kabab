import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./Menu/Menu";
import branchSlice from "./Branch/Branch";
import FoodModalSlice from "./FoodModal/FoodModal"

const store = configureStore({
    reducer :{
        menu :menuSlice ,
        branch :branchSlice ,
        foodModal : FoodModalSlice
    }
})

export default store ;