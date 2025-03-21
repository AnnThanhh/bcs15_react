import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleChangeInputAction } from "../redux/reducers/userReducer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const { userRegister } = useSelector((state) => state.userReducer);
  console.log("userRegister", userRegister);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChangeInput = (e) => {
    let { id, value } = e.target;
    //tạo áction pay để đưa dữ liệu lên store
    const action = handleChangeInputAction({ id, value });
    dispatch(action);
    console.log("action", action);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userRegister);
    //gọi api đăng ký
    try {
      const res = await axios.post(
        "https://apistore.cybersoft.edu.vn/api/Users/signup",
        userRegister
      );
      alert("đăng ký thành công");
      navigate("/loginWithFormik");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          User Information
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="hidden"
            name="id"
            id="id"
            defaultValue={0}
            value={userRegister.id}
            onChange={handleChangeInput}
          />
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
              value={userRegister.email}
              placeholder="Enter your email"
              required
              onChange={handleChangeInput}
            />
          </div>
          <div className="mb-4">
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
              value={userRegister.password}
              required
              onChange={handleChangeInput}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="name"
              type="text"
              placeholder="Enter your name"
              value={userRegister.name}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Gender
            </label>
            <div className="mt-2">
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="gender"
                defaultValue="true"
                value={userRegister.gender}
                onChange={handleChangeInput}
              >
                <option value="true">Male</option>
                <option value="false">Female</option>
              </select>
            </div>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={userRegister.phone}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
