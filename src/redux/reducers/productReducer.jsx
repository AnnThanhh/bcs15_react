import { createSlice } from "@reduxjs/toolkit";
import { http } from "../../utils/setting";

const initialState = {
  arrProduct: [], //state arrProduct của shoeShop
  prodDetails: {},
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    setProductAction: (state, action) => {
      state.arrProduct = action.payload;
    },
    setProductDetails: (state, action) => {
      state.prodDetails = action.payload;
    },
  },
});

export const { setProductAction, setProductDetails } = productReducer.actions;

export default productReducer.reducer;

//--------------------------action thunk

export const getProductApiActionThunk = () => {
  return async (dispatch) => {
    //cho phép thực thi logic api
    const res = await http.get("https://apistore.cybersoft.edu.vn/api/Product");
    //sau khi thực thi logic api thì dữ liệu sẽ được đưa lên store = tham số dispatch của actionThunk
    console.log(res);
    const actionPayload = setProductAction(res.data.content);
    dispatch(actionPayload);
  };
};

export const getProductDetailActionThunk = (id) => {
  //closure function
  return async (dispatch) => {
    console.log(id)
    const response = await http.get(
      //hàm action thunk
      `https://apistore.cybersoft.edu.vn/api/Product/getbyid?id=${id}`
    );
    console.log(response.data.content);
    //gọi api và lấy dữ liệu sau đso tạo ra action để đưa lên store
    const actionPayload = setProductDetails(response.data.content);
    console.log(actionPayload);
    dispatch(actionPayload);
  };
};
