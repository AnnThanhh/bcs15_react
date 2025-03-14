import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const prodForm = useFormik({
    initialValues: {
      id: "",
      name: "",
      price: "",
      img: "",
      description: "",
      type: "APPLE",
      deleted: false,
    },
    onSubmit: async (values) => {
      console.log(values);
      const res = await axios.post(
        `https://apitraining.cybersoft.edu.vn/api/ProductApi/create`,
        values
      );
      //sau khi chỉnh xong thì dùng navigate chuyển về trang quản lý
      alert("update thành công");
      navigate("../product-management");
    },
  });
  return (
    <div className="container mx-auto">
      <h3>Add Product</h3>
      <form onSubmit={prodForm.handleSubmit}>
        <div>
          <div className="mb-4">
            <label className="block text-gray-700">ID</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              placeholder="Enter product ID"
              name="id"
              onChange={prodForm.handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              placeholder="Enter product name"
              name="name"
              onChange={prodForm.handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              placeholder="Enter product price"
              name="price"
              onChange={prodForm.handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Image URL</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              placeholder="Enter image URL"
              name="img"
              onChange={prodForm.handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              placeholder="Enter description"
              name="description"
              onChange={prodForm.handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Type</label>
            <select
              name="type"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              onChange={prodForm.handleChange}
            >
              <option value={"SONY"}>SONY</option>
              <option value={"APPLE"}>APPLE</option>
              <option value={"SAMSUNG"}>SAMSUNG</option>
              <option value={"XIAOMI"}>XIAOMI</option>
            </select>
          </div>
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
              name="deleted"
              onChange={prodForm.handleChange}
            />
            <label className="ml-2 block text-gray-700">Deleted</label>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
