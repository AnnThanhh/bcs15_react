const GioHang = (props) => {
  const { gioHang } = props;
  return (
    <div className="relative overflow-x-auto my-4">
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
                <td className="px-6 py-4">{item.soLuong}</td>
                <td className="px-6 py-4">${item.soLuong * item.giaBan}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GioHang;
