import { Button, Table } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeQuantityProductAction,
  deleteProductAction,
} from "../redux/reducers/cartReducer";

const Cart = () => {
  const cartStore = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();
  console.log(cartStore);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      render: (value, record) => {
        return (
          <>
            <Button
              color="default"
              variant="outlined"
              onClick={() => {
                const payload = {
                  id: record.id,
                  quantity: 1,
                };
                const action = changeQuantityProductAction(payload);
                dispatch(action);
              }}
            >
              +
            </Button>
            {value}
            <Button
              color="default"
              variant="outlined"
              onClick={() => {
                const payload = {
                  id: record.id,
                  quantity: -1,
                };
                const action = changeQuantityProductAction(payload);
                dispatch(action);
              }}
            >
              -
            </Button>
          </>
        );
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      render: (value, record) => {
        return (record.price * record.quantity).toLocaleString();
      },
    },
    {
      title: "Action",
      render: (value, record) => {
        return (
          <Button color="danger" variant="solid">
            <i
              className="fa fa-close"
              onClick={() => {
                //tạo ra action
                const action = deleteProductAction(record.id);
                //dispatch action
                dispatch(action);
              }}
            ></i>
          </Button>
        );
      },
    },
  ];

  return (
    <div className="container mx-auto">
      <Table rowKey={"id"} columns={columns} dataSource={cartStore} />
    </div>
  );
};

export default Cart;
