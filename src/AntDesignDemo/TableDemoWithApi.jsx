import { Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams, useSearchParams } from "react-router-dom";

const dataColumn = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
    filters: [
      {
        text: "Nike",
        value: "nike",
      },
      {
        text: "Vans",
        value: "vans",
      },
    ],
    onFilter: (value, record) => {
      //value là trường lấy từ thuộc tính filter, record là object item
      return record.name.toLowerCase().search(value) !== -1;
    },
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "Image",
    dataIndex: "image",
    render: (_, record, index) => {
      return <img key={index} src={record.image} width={50} />;
    },
  },
  {
    title: "Action",
    dataIndex: "id",
    render: (_, record) => {
      return <NavLink to={`/details/${record.id}`}>View Detail</NavLink>;
    },
  },
];

const TableDemoWithApi = () => {
  const [arrProduct, setArrProduct] = useState([]);
  const [arrProductFilter, setArrProductFilter] = useState([]);
  const [search, setSearch] = useSearchParams();
  const keyWord = search.get("k");

  const getAllProductAPI = async () => {
    let url = "https://apistore.cybersoft.edu.vn/api/Product";
    if (keyWord) {
      url = `https://apistore.cybersoft.edu.vn/api/Product?keyword=${keyWord}`;
    }
    const res = await axios.get(url);
    console.log(res.data.content);
    //sau khi lấy dữ liệu từ apo về thì đưa vào state của arrProduct
    setArrProduct(res.data.content);
  };
  useEffect(() => {
    //gọi api sau khi load xong jsx
    getAllProductAPI();
  }, [keyWord]);
  return (
    <div className="container mx-auto">
      <h3>Product Management</h3>
      <h4>Search Name</h4>
      <input
        type="text"
        placeholder="Input product name"
        onChange={(e) => {
          const tuKhoa = e.target.value;
          let newArrProduct = arrProduct.filter(
            (item) => item.name.toLowerCase().search(tuKhoa) !== -1
          );
          setArrProductFilter(newArrProduct);

          setSearch({
            k: e.target.value,
          });
        }}
      />
      <Table
        columns={dataColumn}
        dataSource={arrProductFilter.length > 0 ? arrProductFilter : arrProduct}
        rowKey={"id"}
      />
    </div>
  );
};

export default TableDemoWithApi;
