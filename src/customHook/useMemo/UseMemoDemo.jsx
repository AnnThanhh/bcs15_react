import React, { useMemo, useState } from "react";
import TableCart from "./TableCart";

//useMemo: dùng để cache lại giá trị sau mỗi lần render, khi nào dependency thay đổi giá trị đó mới tạo mới lại
const UseMemoDemo = () => {
  const [like, setLike] = useState(1);
  const cart = [
    { id: 1, name: "prod 1", price: 1000 },
    { id: 2, name: "prod 1", price: 1000 },
    { id: 3, name: "prod 1", price: 1000 },
    { id: 4, name: "prod 1", price: 1000 },
  ];

  console.log("render component");
  const memoCart = useMemo(() => cart, []);
  return (
    <div className="container mx-auto">
      <h3>UseMemoDemo</h3>
      <button
        onClick={() => {
          setLike(like + 1);
        }}
      >
        {like} like
      </button>
      <TableCart cart={memoCart} />
    </div>
  );
};

export default UseMemoDemo;
