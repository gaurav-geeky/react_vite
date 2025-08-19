import { createSlice } from "@reduxjs/toolkit";

let Cartslice = createSlice({

    name: "tray",
    initialState: {
        trayItems: []
    },
    reducers: {
        additem: (state, action) => {
            let exist = state.trayItems.find((ok) => ok.pid === action.payload.pid)
            if (exist) {
                exist.quantity++;
            }
            else {
                state.trayItems.push({ ...action.payload, quantity: 1 })
            }
        },
        increaseQty: (state, action) => {
            const exist = state.trayItems.find((i) => i.pid == action.payload);
            if (exist && exist.quantity < 10) {
                exist.quantity++
            }
        },
        decreaseQty: (state, action) => {
            let exist = state.trayItems.find((i) => i.pid == action.payload);

            if (exist && exist.quantity > 1) {
                exist.quantity--;
            }
            else if (exist && exist.quantity == 1) {
                state.trayItems = state.trayItems.filter((i) => i.pid !== action.payload);
            }
        }
    }
})

export const { additem, increaseQty, decreaseQty } = Cartslice.actions
export default Cartslice.reducer




