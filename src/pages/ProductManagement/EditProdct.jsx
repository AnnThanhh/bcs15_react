import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
const EditProdct = () => {
  const params = useParams(); // lấy tham số id trên url
  const { id } = params;
const navigate = useNavigate()
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
      const res = await axios.put(
        `https://apitraining.cybersoft.edu.vn/api/ProductApi/update/${values.id}`, values
      );
      //sau khi chỉnh xong thì dùng navigate chuyển về trang quản lý
      alert("update thành công")
      navigate("../../product-management");
    },
  });

  const getAllProductAPIByID = async () => {
    const res = await axios.get(
      `https://apitraining.cybersoft.edu.vn/api/ProductApi/get/${id}`
    );
    console.log(res.data);
    //lấy dữ liệu về thanh công = > đưa lên form
    // prodForm.setFieldValue('name', res.data.price) // set value tùy biến
    prodForm.setValues(res.data);
  };
  useEffect(() => {
    getAllProductAPIByID();
  }, []);
  return (
    <div className="container mx-auto">
      <h3>Edit Product</h3>
      <form onSubmit={prodForm.handleSubmit}>
        <div>
          <div className="mb-4">
            <label className="block text-gray-700">ID</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              placeholder="Enter product ID"
              name="id"
              value={prodForm.values.id}
              onChange={prodForm.handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              placeholder="Enter product name"
              value={prodForm.values.name}
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
              value={prodForm.values.price}
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
              value={prodForm.values.img}
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
              value={prodForm.values.description}
              onChange={prodForm.handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Type</label>
            <select
              name="type"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              value={prodForm.values.type}
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
              value={prodForm.values.deleted}
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

export default EditProdct;
