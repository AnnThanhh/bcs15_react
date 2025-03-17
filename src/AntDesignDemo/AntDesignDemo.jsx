import React from "react";

//bước 1: import thư viện
import { Rate } from "antd";
//bước 2: các tham số cần tạo để sử dụng (nếu có)
const AntDesignDemo = () => {
  //bước 3: sử dụng
  return (
    <div className="container mx-auto mt-5">
      <Rate
        character={({ index, value }) => (
          <i
            className="fa-solid fa-heart"
            style={{ color: index < value ? "red" : "grey" }}
          ></i>
        )}
        allowHalf={true}
        defaultValue={2.5}
        count={10}
      />
    </div>
  );
};

export default AntDesignDemo;
