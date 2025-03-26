import { useQuery } from "@tanstack/react-query";
import { getAllUserAPI } from "../../api/userAPI";
import { Table } from "antd";

const TableUserRQ = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["getAllUser"], //định danh query
    queryFn: getAllUserAPI,
    staleTime: 5 * 60 * 1000,
    cacheTime: 6 * 60 * 1000,
  });
  if (isLoading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
    },
  ];

  return (
    <div>
      <h3>User management</h3>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default TableUserRQ;
