const GioHang = (props) => {
  const { gioHang } = props;

  const tinhTongTien = () => {
    const tongTien = gioHang.reduce((total, item, index) => {
      total += item.soLuong * item.giaBan;
      return total;
    }, 0);
    return tongTien.toLocaleString();
  };

  return (
    <div className="relative overflow-x-auto my-4">
      <h3>
        Tổng tiền giỏ hàng: số loại sản phẩm: {gioHang.length} - tổng tiền: $
        {tinhTongTien()}
      </h3>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Mã SP
            </th>
            <th scope="col" className="px-6 py-3">
              Hình ảnh
            </th>
            <th scope="col" className="px-6 py-3">
              Tên SP
            </th>
            <th scope="col" className="px-6 py-3">
              Giá bán
            </th>
            <th scope="col" className="px-6 py-3">
              Số lượng
            </th>
            <th scope="col" className="px-6 py-3">
              Thành tiền
            </th>
            <th scope="col" className="px-6 py-3">
              Hành động
            </th>
          </tr>
        </thead>
        <tbody>
          {gioHang.map((item, index) => {
            return (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                key={index}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.maSP}
                </th>
                <td className="px-6 py-4">
                  <img src={item.hinhAnh} className="w-20" alt="" />
                </td>
                <td className="px-6 py-4"> {item.tenSP}</td>
                <td className="px-6 py-4">$ {item.giaBan}</td>
                <td className="px-6 py-4">
                  <button
                    type="button"
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-2 py-1.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    onClick={() => {
                      props.tangGiamSoLuong(item.maSP, 1);
                    }}
                  >
                    +
                  </button>
                  <input
                    value={item.soLuong}
                    style={{ width: 20 }}
                    onChange={(e) => {
                      props.thayDoiSoLuong(item.maSP, e.target.value);
                    }}
                  />
                  <button
                    type="button"
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-2 py-1.5 me-2 mb-2 ml-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    onClick={() => {
                      props.tangGiamSoLuong(item.maSP, -1);
                    }}
                  >
                    -
                  </button>
                </td>
                <td className="px-6 py-4">
                  ${(item.soLuong * item.giaBan).toLocaleString()}
                </td>
                <td className="px-6 py-4">
                  <button
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    onClick={() => {
                      props.xoaGioHang(item.maSP);
                    }}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GioHang;
