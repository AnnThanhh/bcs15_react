import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  http,
  navigateHistory,
  setCookie,
  TOKEN,
  USER_LOGIN,
} from "../../utils/setting";

let getUserLoginDefault = () => {
  if (localStorage.getItem(USER_LOGIN)) {
    const userDefault = JSON.parse(localStorage.getItem(USER_LOGIN));
    return userDefault;
  }
  return null;
};

const initialState = {
  userRegister: {
    id: 0,
    email: "",
    password: "",
    name: "",
    gender: true,
    phone: "",
  },
  userLogin: getUserLoginDefault(),
  profile: {},
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    handleChangeInputAction: (state, action) => {
      const { id, value } = action.payload;
      state.userRegister[id] = value;
    },
    setUserLoginAction: (state, action) => {
      state.userLogin = action.payload;
    },
    setProfileAction: (state, action) => {
      state.profile = action.payload;
    },
  },
});

export const { handleChangeInputAction, setUserLoginAction, setProfileAction } =
  userReducer.actions;

export default userReducer.reducer;

//------------------action thunk-----------------------------

export const loginAction = (userLoginModel) => {
  return async (dispatch) => {
    const res = await axios.post(
      "https://apistore.cybersoft.edu.vn/api/Users/signin",
      userLoginModel
    );
    console.log(res.data.content);
    //lưu token vào client (localstorage, cookie)

    const token = res.data.content.accessToken;
    localStorage.setItem(TOKEN, token);

    const userLogin = JSON.stringify(res.data.content);
    localStorage.setItem(USER_LOGIN, userLogin);

    //lưu vào cookie
    setCookie(TOKEN, token, 7);

    //nạp dữ liệu lên store
    dispatch(setUserLoginAction(res.data.content));
  };
};

export const getProfileAction = async (dispatch) => {
  //xử lý logic api
  try {
    const res = await http.post(
      "https://apistore.cybersoft.edu.vn/api/Users/getProfile"
    );
    dispatch(setProfileAction(res.data.content));
  } catch (err) {
    console.log(err);
    navigateHistory("/loginWithFormik");
  }
};
