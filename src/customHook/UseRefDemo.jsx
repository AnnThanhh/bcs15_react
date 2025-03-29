import React, { useRef, useState } from "react";
import ContentChild from "./ContentChild";

/**
 *
 * useState: là dùng để lưu trữ csc gia trị thay đổi trên giao diện
 * useRef: là dùng để lưu trữ các giá trị thay đổi mà không cần hiển thị trên giao diện
 * useRef, sử dụng khi đối với các giá trị thay đổi mà không cần hiển thị trên giao diện. ví dụ: thường sử dụng đối với các input form mà không cso validation(form comment, form post bài viết, input tìm kiếm)
 */

const UseRefDemo = () => {
  const [state, setState] = useState(1);
  const [like, setLike] = useState({ number: 1 });

  const valueInputRef = useRef("");
  console.log("component render");

  return (
    <div className="container mx-auto">
      <h3>useRef demo</h3>

      <ContentChild like={like} />
      <button
        onClick={() => {
          let newLike = { ...like };
          newLike.number += 1;
          setLike(newLike);
          console.log(1);
        }}
      >
        {like.number} Like
      </button>
      <h3>State: {state}</h3>
      <input
        type="text"
        onChange={(e) => {
          //   setState(e.target.value);
          valueInputRef.current = e.target.value;
        }}
      />
      <button
        onClick={() => {
          console.log("valueInput", valueInputRef.current);
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default UseRefDemo;
