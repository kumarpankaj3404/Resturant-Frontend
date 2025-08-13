import {createSlice ,nanoid} from '@reduxjs/toolkit';

const initialState={
    items: [],
};

export const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers: {
        addToCart: (state, action) =>{
            const cart={
                id: nanoid(),
                item: action.payload
            }
            state.items.push(cart)
        },
        removeFromCart: (state,action) => {
            state.items=state.items.filter((cart)=>cart.id !== action.payload)
        },
    },
});

export const {addToCart, removeFromCart} = cartSlice.actions

export default cartSlice.reducer