import { useFormik } from "formik";
import React from "react";
import axios from "axios";
import { setCookie, TOKEN, USER_LOGIN } from "../utils/setting";
import { useNavigate } from "react-router-dom";
const Login2 = () => {
  const navigate = useNavigate();
  const frmLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values);
      const res = await axios.post(
        "https://apistore.cybersoft.edu.vn/api/Users/signin",
        values
      );
      console.log(res.data.content);
      //lưu token vào client (localstorage, cookie)

      const token = res.data.content.accessToken;
      localStorage.setItem(TOKEN, token);

      const userLogin = JSON.stringify(res.data.content);
      localStorage.setItem(USER_LOGIN, userLogin);

      //lưu vào cookie
      setCookie(TOKEN, token, 7);
      navigate("/profile");
    },
  });
  return (
    <div className="container mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>
        <form onSubmit={frmLogin.handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="email"
              type="email"
              placeholder="Enter your email"
              required
              name="email"
              onChange={frmLogin.handleChange}
            />
          </div>
          {/* Password */}
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="password"
              type="password"
              placeholder="Enter your password"
              name="password"
              onChange={frmLogin.handleChange}
              required
            />
          </div>
          {/* Login Button */}
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login2;
