import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 })
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload;
        const itemToUpdate = state.items.find(item => item.name === name);
        if (itemToUpdate) {
          itemToUpdate.quantity = quantity;
        }
    
    },
    incrementPlantQauntity: (state, action) => {
      const { payload: index } =action;
      if (state[index]) {
        return state[index].quantity++;
      }
    },
    decrementPlantQuantity: (state, action) => {
      const {payload: index } = action;
      if (state[index] && state[index].quantity > 0) {
        return state[index].quantity--;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity, incrementPlantQauntity, decrementPlantQuantity } = CartSlice.actions;

export default CartSlice.reducer;
