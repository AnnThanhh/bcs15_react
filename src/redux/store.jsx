//file store này sẽ chưa toàn state của ứng dụng
import { configureStore } from "@reduxjs/toolkit";
import { numberReducer } from "./reducers/numberReducer";
import { fontSizeReducer } from "./reducers/fSizeReducer";
import cartReducer  from "./reducers/cartReducer";
export const store = configureStore({
  reducer: {
    numberReducer: numberReducer,
    fontSizeReducer: fontSizeReducer,
    cartReducer: cartReducer,
  },
});

//imutable: khi reducer trả về giá trị mới (shallow compare) thì component useSelector đến state sẽ render, còn các component follow từ các reducer khác nếu k thay đổi thì sẽ không render lại

//hàm này là hàm sẽ return về state (reducer)
//[state, setState] = useState([])
