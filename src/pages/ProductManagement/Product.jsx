import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useMatch, useNavigate, useParams } from "react-router-dom";

const Product = () => {
  const match = useMatch("/admin/product/:id");
  console.log(match); // nếu là null thì add product. ngược lại có giá trị thì là edit
  const params = useParams(); // lấy tham số id trên url
  const { id } = params;
  const isEdit = !!match; //true: edit, false: addnew
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
      let url = "https://apitraining.cybersoft.edu.vn/api/ProductApi/create";
      let method = "POST";
      if (isEdit) {
        url = `https://apitraining.cybersoft.edu.vn/api/ProductApi/update/${match.params.id}`;
        method = "PUT";
      }
      const res = await axios({
        url,
        method,
        data: values,
      });
      console.log(res.data);
      navigate("/admin/product-management");
    },
  });

  //khi edit sẽ load dữ liệu của product
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
    if (isEdit) {
      getAllProductAPIByID();
    }
  }, [isEdit]);

  return (
    <div className="container mx-auto">
      <h3>{isEdit ? "Edit product" : "Add product"}</h3>
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
              disabled={isEdit}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              placeholder="Enter product name"
              name="name"
              value={prodForm.values.name}
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
              onChange={prodForm.handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Type</label>
            <select
              name="type"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              onChange={prodForm.handleChange}
              value={prodForm.values.type}
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
            {isEdit ? "Update" : "Add new"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Product;
