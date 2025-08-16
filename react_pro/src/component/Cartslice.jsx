import { createSlice } from "@reduxjs/toolkit";

let Cartslice = createSlice({

    name: "tray",

    initialState: {
        trayItems: []
    },

    reducers: {
        additem: (state, action) => {
            state.trayItems.push(action.payload)
        }
    }
})

export const {additem} = Cartslice.actions  
export default Cartslice.reducer    


