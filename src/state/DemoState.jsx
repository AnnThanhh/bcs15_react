import { useState } from "react";

const DemoState = () => {
  //useState: vừa gọi là hàm vừa gọi hook
  const [state, setState] = useState(10); // number, string, array
  /**
   * state là gì
   * state là gia trị thay đổi trên giao diện bởi 1 event
   * setState là hàm làm thay đổi giá trị state đồng thời gọi function component chạy lại với state mới
   */
  //res = [stateDefault, setState(newSate)]

  return (
    <div className="container mx-auto">
      <h1>State</h1>
      <h2>Ví dụ: tăng giảm số lượng</h2>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => {
          let newState = state + 1;
          setState(newState);
        }}
      >
        Tăng
      </button>
      <span className="mx-5">{state}</span>
      <button
        type="button"
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        onClick={() => {
          let newSate = state - 1;
          setState(newSate);
        }}
      >
        Giảm
      </button>
    </div>
  );
};

export default DemoState;
