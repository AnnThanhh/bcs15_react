//file store này sẽ chưa toàn state của ứng dụng
import { configureStore } from "@reduxjs/toolkit";
import { numberReducer } from "./reducers/numberReducer";
import { fontSizeReducer } from "./reducers/fSizeReducer";
import cartReducer from "./reducers/cartReducer";
import userReducer from "./reducers/userReducer";
import productReducer from "./reducers/productReducer";
export const store = configureStore({
  reducer: {
    numberReducer: numberReducer,
    fontSizeReducer: fontSizeReducer,
    cartReducer: cartReducer,
    userReducer: userReducer,
    productReducer: productReducer,
  },
});

//imutable: khi reducer trả về giá trị mới (shallow compare) thì component useSelector đến state sẽ render, còn các component follow từ các reducer khác nếu k thay đổi thì sẽ không render lại

//hàm này là hàm sẽ return về state (reducer)
//[state, setState] = useState([])
