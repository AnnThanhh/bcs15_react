//rxslice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartReducer = createSlice({
  name: "cartReducer", //tên reducer
  initialState, //giá trị default ban đầu
  reducers: {
    addProductAction: (state, action) => {
      const { payload } = action;
      const itemCart = state.cart.find((item) => item.id === payload.id);
      if (itemCart) {
        itemCart.quantity += 1;
      } else {
        state.cart.push(payload);
      }
    },

    deleteProductAction: (state, action) => {
      const { payload } = action;
      state.cart = state.cart.filter((item) => item.id !== payload);
    },

    changeQuantityProductAction: (state, action) => {
      const { payload } = action;
      let itemCart = state.cart.find((item) => item.id === payload.id);
      if (itemCart) {
        itemCart.quantity += payload.quantity;
      }
    },
  }, //hàm xử lý action
});

export const { addProductAction, deleteProductAction, changeQuantityProductAction } =
  cartReducer.actions; //bóc tách hàm xử lý action

export default cartReducer.reducer; //chính reducer của file này
