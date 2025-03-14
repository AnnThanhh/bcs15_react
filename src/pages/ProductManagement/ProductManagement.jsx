import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";

//xây dựng giao diện table chứa danh sách sản phẩm và thanh tìm kiếm
const ProductManagement = () => {
  const [arrProduct, setArrayProduct] = useState([]);

  //useSearchParams()
  const [search, setSearch] = useSearchParams();

  const kw = search.get("prodName"); // 1 , abc, san pham
  const handleChange = (e) => {
    //đưa dữ liệu từ phía người dùng lên url
    setSearch({
      prodName: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const getAllProductAPI = async () => {
    let url = "";
    if (kw) {
      url = `https://apitraining.cybersoft.edu.vn/api/ProductApi/getall?keyword=${kw}`;
    } else {
      url = `https://apitraining.cybersoft.edu.vn/api/ProductApi/getall`;
    }
    const res = await fetch(url);

    const data = await res.json();
    console.log(data);
    setArrayProduct(data);
  };

  useEffect(() => {
    getAllProductAPI();
    //rỗng: là gọi api sau khi load xong html 1 lần
  }, [kw]);
  return (
    <div>
      <div className="container mx-auto mt-4">
        {/* Thanh tìm kiếm */}
        <div className="mb-4">
          <form className="relative" onSubmit={handleSubmit}>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="product-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Tìm kiếm sản phẩm..."
              onInput={handleChange}
            />
          </form>
          <NavLink
            to="../product"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            New Product
          </NavLink>
        </div>
        {/* Table sản phẩm */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="checkbox-all" className="sr-only">
                      Chọn tất cả
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Tên sản phẩm
                </th>
                <th scope="col" className="px-6 py-3">
                  Giá
                </th>
                <th scope="col" className="px-6 py-3">
                  Loại
                </th>
                <th scope="col" className="px-6 py-3">
                  action
                </th>
              </tr>
            </thead>
            <tbody>
              {arrProduct.map((item) => {
                return (
                  <tr
                    key={item.id}
                    className="bg-white border-b hover:bg-gray-50"
                  >
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="checkbox-1" className="sr-only">
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td className="px-6 py-4">{item.id}</td>
                    <td className="px-6 py-4">{item.name}</td>
                    <td className="px-6 py-4">{item.price}</td>
                    <td className="px-6 py-4">{item.type}</td>

                    <td className="px-6 py-4">
                      <NavLink
                        to={`../edit/${item.id}`}
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                      >
                        Edit
                      </NavLink>
                      <button
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        onClick={async () => {
                          if (window.confirm("bạn có muốn xóa không")) {
                            const res = await axios.delete(
                              `https://apitraining.cybersoft.edu.vn/api/ProductApi/delete/${item.id}`
                            );
                            getAllProductAPI();
                          }
                        }}
                      >
                        Delete
                      </button>
                      <NavLink
                        to={`../product/${item.id}`}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      >
                        Edit 2
                      </NavLink>
                    </td>
                  </tr>
                );
              })}

              {/* Thêm các dòng khác tương tự */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
