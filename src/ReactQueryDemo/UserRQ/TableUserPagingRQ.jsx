import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Table } from "antd";
import React, { useState } from "react";
import { getAllUserPagingAPI } from "../../api/userAPI";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Phone",
    dataIndex: "phone",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    render: (data, record) => {
      return record.gender ? <span>Male</span> : <span>Female</span>;
    },
  },
];

const TableUserPagingRQ = () => {
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const { data, isLoading, error } = useQuery({
    queryKey: ["userPaging", pageIndex, pageSize],
    queryFn: getAllUserPagingAPI,
    staleTime: 10000,
    gcTime: 15000,
    refetchOnReconnect: true, // dữ liệu sẽ được tải lại sau khi kết nối mạng được khôi phục
    refetchOnWindowFocus: true, // dữ liệu sẽ được tải lại sau khi cửa số lấy lại tiêu điểm,
    refetchInterval: 60000, //tự động tải lại dữ liệu sau mỗi 60s
    placeholderData: keepPreviousData, //giữ lại dữ liệu cũ khi đang tải dữ liệu mới
  });

  if (error) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(data);

  const { items } = data;
  return (
    <Table
      columns={columns}
      dataSource={items}
      pagination={{
        pageSize: data.pageSize,
        current: data.pageIndex,
        total: data.totalRow,
        onChange: (pageIndex, pageSize) => {
          setPageIndex(pageIndex);
          setPageSize(pageSize);
        },
      }}
    />
  );
};

export default TableUserPagingRQ;
