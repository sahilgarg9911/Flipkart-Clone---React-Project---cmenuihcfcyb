import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state, action) {
            state.push(action.payload)
        },
        remove(state, action) {
            return state.filter((prod) => { return prod.id !== action.payload })
        },
        removeAll(state) {
            state.splice(0, state.length)
        }
    }
})
export const { add, remove, removeAll } = cartSlice.actions;
export default cartSlice.reducer;