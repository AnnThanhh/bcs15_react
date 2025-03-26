import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import { registerAPI } from "../../api/userAPI";
const RegisterFormRQ = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["registerUser"], //định danh mutation
    mutationFn: registerAPI,
    onSuccess: (data) => {
      //thành công
      queryClient.invalidateQueries("getAllUser");
    },
    onError: (error) => {
      //thất bạn
      console.log(error);
    },
  });

  const frmRegister = useFormik({
    initialValues: {
      id: "",
      email: "",
      password: "",
      name: "",
      gender: true,
      phone: "",
    },
    onSubmit: (values) => {
      console.log(values);
      //sau khi submit sẽ gọi api = mutation
      mutation.mutateAsync(values);
    },
  });
  return (
    <div className="container mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          User Information
        </h2>
        <form onSubmit={frmRegister.handleSubmit}>
          <input
            type="hidden"
            name="id"
            id="id"
            defaultValue={0}
            onChange={frmRegister.handleChange}
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
              placeholder="Enter your email"
              required
              onChange={frmRegister.handleChange}
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
              required
              onChange={frmRegister.handleChange}
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
              onChange={frmRegister.handleChange}
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
                onChange={frmRegister.handleChange}
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
              onChange={frmRegister.handleChange}
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

export default RegisterFormRQ;
