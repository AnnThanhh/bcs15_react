const CardProducts = (props) => {
  //props = {tenSanPham: ""}
  //props đại diện cho các giá trị nhận vào từ propName của component <Component propsName =""/>
  /**
   * Điểm khác biệt giữa state và props
   * state và props đều chưa các giá trị binding lên giao diện
   * 
   * state chứa các giá trị có thể thay đổi (thông qua phương thức setState)
   * props thì chứa các giá trị nhận từ component cha truyền vào và truyền vào 
   */

  const { tenSanPham, gia } = props;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg w-full"
          src="https://picsum.photos/200/200"
          alt
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {tenSanPham}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Giá: {gia}đ
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Mua hàng
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
};

export default CardProducts;
