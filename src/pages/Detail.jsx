import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";

const Detail = () => {
  const param = useParams();

  const [prodDetails, setProdDetail] = useState({});

  const [transformValue, setTranformValue] = useState("rotate(0deg)");
  console.log(param);

  const getProductByID = async () => {
    const response = await fetch(
      `https://apistore.cybersoft.edu.vn/api/Product/getbyid?id=${param.prodID}`
    );
    const jsonRes = await response.json();
    const data = jsonRes.content;
    console.log(data);
    setProdDetail(data);
  };

  useEffect(() => {
    //goij khi html load xong -> gọi đúng 1 lần
    getProductByID();
  }, [param.prodID]);

  return (
    <div className="container mx-auto">
      <h3>detail - prodID: {param.prodID}</h3>

      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg"
            src={prodDetails.image}
            style={{ transform: transformValue }}
            alt
          />
        </a>
        <div className="grid grid-cols-4">
          {prodDetails.detaildetailedImages?.map((deg, index) => {
            return (
              <div key={index}>
                <img
                  onClick={() => {
                    setTranformValue(deg);
                  }}
                  src={prodDetails.image}
                  style={{
                    transform: deg,
                    border: `1px solid ${deg === transformValue ? 'orange' : '#EEE'}`,
                    cursor: "pointer",
                  }}
                  className="w-15 m-2"
                  alt=""
                />
              </div>
            );
          })}
        </div>

        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {prodDetails.name}
            </h5>
            {prodDetails.size?.map((size) => {
              return (
                <button
                  key={size}
                  type="button"
                  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  {size}
                </button>
              );
            })}
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

      <h3>sản phẩm liên quan</h3>
      <div className="grid grid-cols-3">
        {prodDetails.relatedProducts?.map((prodRelate, index) => {
          return (
            <div
              key={index}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <img className="rounded-t-lg" src={prodRelate.image} alt />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {prodRelate.name}
                  </h5>
                </a>
                <Link
                  to={`/detail/${prodRelate.id}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Xem chi tiết
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
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Detail;
