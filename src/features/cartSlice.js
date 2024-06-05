import { createSlice } from "@reduxjs/toolkit";
import { productData } from "../products/productData";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    list: [],
    total:0,
    items: productData,
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addcount: (state, action) => {
      const check = state.list.findIndex(book=>book.id === action.payload.id)
      console.log(check);
      if(check !== -1){
        state.list[index].quantity += action.payload.quantity
      } else{
        state.list.push(action.payload)
      }
      //
      state.total=state.list.reduce((sum, book)=>sum + +book?.price * book?.quantity, 0)
    },

      updateQuantity(state,action){
      const check=state.list.findIndex(book=>book.id === action.payload.id)
      if(check !== -1){
        state.list[check].quantity += action.payload.quantity
      }
      state.total = state.list.reduce((sum, book)=>sum + +book?.price * book?.quantity, 0)
    },

      removeItem(state, action){
      state.list=state.list.filter(book=>book.id !== action.payload.id)
      state.total = state.list.reduce(
        (sum, book) => sum + +book?.price * book?.quantity,
        0
      );

    }
  },
});
export const { addcount, updateQuantity, removeItem  } = cartSlice.actions;
export default cartSlice.reducer;

//   initialState: {
//     addedItems: [],
//   },
//   reducers: {
//     addCartItem: (state, action) => {
//       state.addedItems.push(action.payload);
//     },
//   },
// });

// export const { addCartItem } = cartSlice.actions;

// export const selectAddedItems = (state) => state.cart.addedItems;

