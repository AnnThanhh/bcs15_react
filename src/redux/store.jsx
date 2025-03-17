//file store này sẽ chưa toàn state của ứng dụng
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    numberReducer: (number = 3, action) => {
      if (action.type === "CHANGE_QUANTITY") {
        number += action.payload;
      }
      //return state mới
      return number;
    },
    AReducer: (state = "a") => state,
    BReducer: (state = "b") => state,
  },
});
//hàm này là hàm sẽ return về state (reducer)
//[state, setState] = useState([])
