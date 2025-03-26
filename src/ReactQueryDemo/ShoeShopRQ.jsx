import { useQuery } from "@tanstack/react-query";
import { getAllProductApi } from "../api/productAPI";
import { Button, Card } from "antd";

const ShoeShopRQ = () => {
  const query = useQuery({
    queryKey: ["getProduct"],
    queryFn: getAllProductApi,
    staleTime: 1 * 1000 * 60,
    cacheTime: 1000 * 10,
  });
  //query.data, query.error, querry.isloading
  if (query.isLoading) {
    return <div>Loading....</div>;
  } else if (query.error) {
    return <div>Lỗi {query.error.message}</div>;
  }
  return (
    <div className="container mx-auto">
      <h3 className="text-center">shoe shop</h3>
      <div className="grid grid-cols-4 gap-5">
        {query.data.map((item, index) => {
          return (
            <Card
              key={index}
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={item.image} />}
            >
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <Button color="primary" variant="solid">
                Add to Cart
              </Button>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ShoeShopRQ;
