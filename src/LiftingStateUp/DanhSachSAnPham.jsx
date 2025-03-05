import { useState } from "react";
import SanPham from "./SanPham";
import SanPhamChiTiet from "./SanPhamChiTiet";
import GioHang from "./GioHang";

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

  const [gioHang, setGioHang] = useState([]);

  //state đặt ở đâu thì hàm xử lý setState sẽ nằm ở trên component đó
  const themGioHang = (spClick) => {
    //tạo ra sản phẩm có số lượng
    const spGioHang = { ...spClick, soLuong: 1 };

    //khi click vào themGioHang => 2 trường hợp
    /**
     * th1: sp đã có trong giỏ hàng => lấy ra và tăng số lượng
     * th2: sp chưa tồn tại trong giỏ hàng => them vào mảng giỏ hàng
     */
    const sp = gioHang.find((item) => item.maSP === spGioHang.maSP);
    if (sp) {
      sp.soLuong += 1;
      let gioHangUpdate = [...gioHang]; //shadow clone
      setGioHang(gioHangUpdate);
    } else {
      setGioHang([...gioHang, spGioHang]);
    }
  };

  const xoaGioHang = (maSPClick) => {
    console.log(maSPClick);

    //xử lý xóa
    let gioHangUpdate = [...gioHang.filter((item) => item.maSP !== maSPClick)];
    //setState
    setGioHang(gioHangUpdate);
  };

  const tangGiamSoLuong = (maSPClick, soLuong) => {
    //maSP, 1 hoặc -1
    console.log(maSPClick, soLuong);
    let sp = gioHang.find((item) => item.maSP === maSPClick);
    if (sp) {
      sp.soLuong += soLuong;
      if (sp.soLuong == 0) {
        //nếu số lượng == 0 thì gọi lại logic setState xoaGiohang
        if (window.confirm("bạn có muốn xóa không?")) {
          xoaGioHang(sp.maSP);
        } else {
          sp.soLuong = 1;
        }
        return;
      }
    }
    let gioHangUpdate = [...gioHang];
    setGioHang(gioHangUpdate);
  };
  const thayDoiSoLuong = (maSPClick, soLuong) => {
    let sp = gioHang.find((item) => item.maSP === maSPClick);
    if (sp) {
      sp.soLuong = Number(soLuong);
    }
    let gioHangUpdate = [...gioHang];
    setGioHang(gioHangUpdate);
  };

  return (
    <div className="container mx-auto">
      <h3>Danh sách sản phẩm </h3>
      <GioHang
        gioHang={gioHang}
        xoaGioHang={xoaGioHang}
        tangGiamSoLuong={tangGiamSoLuong}
        thayDoiSoLuong={thayDoiSoLuong}
      />
      <div className="grid grid-cols-3">
        {data.map((sp, index) => {
          return (
            <SanPham
              spItem={sp}
              key={index}
              setSpChitiet={() => {
                setSpChitiet(sp);
              }}
              themGioHang={themGioHang}
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
