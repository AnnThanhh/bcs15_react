import { useState } from "react";
import SanPham from "./SanPham";
import SanPhamChiTiet from "./SanPhamChiTiet";

const data = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./public/img/phone/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./public/img/phone/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./public/img/phone/applephone.jpg",
  },
];

const DanhSachSAnPham = () => {
  const [spChiTiet, setSpChitiet] = useState({
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./public/img/phone/meizuphone.jpg",
  });
  return (
    <div className="container mx-auto">
      <h3>Danh sách sản phẩm </h3>
      <div className="grid grid-cols-3">
        {data.map((sp, index) => {
          return (
            <SanPham
              spItem={sp}
              key={index}
              setSpChitiet={() => {
                setSpChitiet(sp);
              }}
            />
          );
        })}
      </div>
      <h3>Chi tiết sản phẩm</h3>
      <SanPhamChiTiet spChiTiet={spChiTiet} />
    </div>
  );
};

export default DanhSachSAnPham;
