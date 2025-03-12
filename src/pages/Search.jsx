import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
const Search = () => {
  const [tuKhoa, setTuKhoa] = useState("");
  const [arrProduct, setArrayProduct] = useState([]);
  console.log(tuKhoa);
  //useSearchParam: lưu giá trị người nhập len trên url
  const [search, setSearchParam] = useSearchParams();
  const valueKeyword = search.get("k");

  const getProductByKeyword = async () => {
    if (valueKeyword) {
      //gọi api
      const res = await fetch(
        `https://apistore.cybersoft.edu.vn/api/Product?keyword=${valueKeyword}`
      );
      const data = await res.json();
      console.log(data.content);
      setArrayProduct(data.content);
    }
  };

  useEffect(() => {
    getProductByKeyword();
  }, [valueKeyword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    //đưa giá trị nhập liệu lên url
    setSearchParam({
      k: tuKhoa,
    });
  };
  
  return (
    <div className="container mx-auto">
      <form className="max-w-md mx-auto mt-20" onSubmit={handleSubmit}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="input product name"
            onInput={(e) => {
              setTuKhoa(e.target.value);
            }}
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      <h3 className="mt-3">Kết quả tìm kiếm</h3>
      <div className="grid grid-cols-4 gap-5">
        {arrProduct.map((prod) => {
          return (
            <div
              key={prod.id}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src={prod.image}
                  alt
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {prod.name}
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

export default Search;
