import React, { useEffect, useState } from "react";
import axios from "axios";
const Shoepages = () => {
  const [arrProduct, setArrProduct] = useState([]);

  const getAllProductAPI = async () => {
    const res = await axios.get(
      "https://apistore.cybersoft.edu.vn/api/Product"
    );
    setArrProduct(res.data.content);
  };

  useEffect(() => {
    //hàm này sẽ chạy sau khi html render và mỗi khi bất kì hàm setState nào được gọi
    console.log("useEffect");
    //dependency list [] thì hàm này chỉ chạy 1 lần sau khi render component
    getAllProductAPI();
  },[]);
  console.log("mouting");
  return (
    <div className="container mx-auto">
      {/* <button
        type="button"
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        onClick={() => {
          getAllProductAPI();
        }}
      >
        get API
      </button> */}
      <h3>Shoe shop</h3>
      <div className="grid grid-cols-6 gap-1">
        {arrProduct.map((item) => {
          return (
            <div
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
              key={item.id}
            >
              <a href="#">
                <img className="rounded-t-lg" src={item.image} alt />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.name}
                  </h5>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shoepages;
