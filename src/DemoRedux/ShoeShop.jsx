import { Button, Card } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProductAction } from "../redux/reducers/cartReducer";

const ShoeShop = () => {
  const [arrProduct, setArrProduct] = useState([]);
  const dispatch = useDispatch();
  const getAllProductAPI = async () => {
    const res = await axios.get(
      "https://apistore.cybersoft.edu.vn/api/Product"
    );

    setArrProduct(res.data.content);
    console.log(res.data.content);
  };

  useEffect(() => {
    getAllProductAPI();
  }, []);

  return (
    <div className="container mx-auto">
      <h3 className="text-center">shoe shop</h3>
      <div className="grid grid-cols-4 gap-5">
        {arrProduct.map((item, index) => {
          return (
            <Card
              key={index}
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={item.image} />}
            >
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <Button
                color="primary"
                variant="solid"
                onClick={() => {
                  //   const action = {
                  //     type: "ADD_PRODUCT",
                  //     payload: { ...item, quantity: 1 },
                  //   };

                //   const action = {
                //     type: "cartReducer/addProductAction",
                //     payload: { ...item, quantity: 1 },
                //   };

                const action = addProductAction({...item,quantity: 1})

                  dispatch(action);
                }}
              >
                Add to Cart
              </Button>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ShoeShop;
