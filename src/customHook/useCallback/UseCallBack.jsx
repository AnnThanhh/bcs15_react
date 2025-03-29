import React, { memo, useCallback, useState } from "react";
//useCallback này dùng để ghi nhớ một hàm để tránh tạo lại nó khi mà component re-render
const UseCallBack = () => {
  const [like, setLike] = useState(1);
  const [number, setNumber] = useState(1);
  const renderLike = () => {
    return `bạn đã ấn ${like} like`;
  };

  const callBackRenderLike = useCallback(renderLike, [like]);

  return (
    <div className="container mx-auto">
      <h3>UseCallBack Demo</h3>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Number: {number}
      </button>
      <button
        onClick={() => {
          setLike(like + 1);
        }}
      >
        Like: {like}
      </button>
      <CommentComponent renderLike={callBackRenderLike} />
    </div>
  );
};

export default UseCallBack;

const CommentComponent = memo((props) => {
  console.log("child render");
  return (
    <div>
      <h3>Child Component</h3>
      {props.renderLike()}
    </div>
  );
});
