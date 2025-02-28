import CardProducts from "./CardProducts";

const DemoProps = () => {
  return (
    <div className="container mx-auto">
      <h3>Danh sách sản phẩm</h3>
      <div className="grid grid-cols-3 my-4">
        <CardProducts tenSanPham="Sản Phẩm A" gia={1000} />
        <CardProducts tenSanPham="Sản Phẩm B" gia={2000} />
        <CardProducts tenSanPham="Sản Phẩm C" gia={3000} />
      </div>
    </div>
  );
};

export default DemoProps;
