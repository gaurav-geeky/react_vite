import {configureStore} from "@reduxjs/toolkit"  
import cartReducer from "./Cartslice" 

let Store = configureStore({

    reducer: {
        tray: cartReducer 
    }
})

export default Store 

